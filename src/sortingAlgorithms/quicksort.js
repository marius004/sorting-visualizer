export function getQuickSortAnimations(arr) {

    const animations = [];

    if(arr.length <= 1)
        return animations;

    /// deep copy the array without copying the color field
    const aux = new Array(arr.length);
    for(let i = 0;i < arr.length;++i)
        aux[i] = arr[i].height;

    quickSort(aux, 0, aux.length - 1, animations);
    return animations;
}

function quickSort(arr, left, right, animations) {
    if(left < right) {
        const index = partition(arr, left, right, animations);
        quickSort(arr, left, index - 1, animations);
        quickSort(arr, index + 1, right, animations);
    }
}

function partition(arr, left, right, animations) {

    /// 'color' means we change the color of the two indexes in the main array
    /// 'revert' means we revert the color change
    /// 'swap' means we swap the two indexes in the main array

    let index = left;
    const pivot = arr[right];

    for(let i = left; i < right;++i) {
        animations.push([index, i, 'color']);
        animations.push([index, i,'revert']);

        if(arr[i] <= pivot) {
            animations.push([index, i, 'swap']);
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index++;
        }
    }

    animations.push([index, right, 'color']);
    animations.push([index, right, 'revert']);
    animations.push([index, right, 'swap']);

    [arr[index], arr[right]] = [arr[right], arr[index]];
    return index;
}