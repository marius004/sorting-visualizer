export function getInsertionSortAnimations(arr) {

    const animations = [];

    if(arr.length <= 1)
        return animations;

    /// deep copy the arr array into a new array
    const aux = new Array(arr.length);
    for(let i = 0;i < arr.length;++i)
        aux[i] = arr[i].height;

    insertionSort(aux, animations);
    return animations;
}

function insertionSort(arr, animations) {

    /// 'color' means color change in the animation
    /// 'revert' means change the color back to its initial state
    /// 'take' arr[hole] takes the value of arr[hole - 1]

    for(let i = 1;i < arr.length;++i) {

        const val = arr[i];
        let hole = i;

        while(hole > 0 && arr[hole - 1] > val) {

            animations.push([hole, hole - 1, 'color']);
            animations.push([hole, hole - 1, 'revert']);
            animations.push([hole, arr[hole - 1], 'take']);

            arr[hole] = arr[hole - 1];
            hole--;
        }

        animations.push([hole, i, 'color']);
        animations.push([hole, i, 'revert']);
        animations.push([hole, val, 'take']);

        arr[hole] = val;
    }
}