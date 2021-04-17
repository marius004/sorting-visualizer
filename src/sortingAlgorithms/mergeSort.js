export function  getMergeSortAnimations(arr) {
    const animations = [];

    if (arr.length <= 1)
        return animations;

    /// deep copy the arr array without copying the color field
    const aux = new Array(arr.length);
    for(let i = 0;i < arr.length;++i) {
        aux[i] = arr[i].height;
    }

    mergeSort(aux, 0, arr.length - 1, animations);
    return animations;
}

function mergeSort(arr, left, right, animations) {

    if(left < right) {
        const mid = Math.floor((left + right) / 2);

        mergeSort(arr, left, mid, animations);
        mergeSort(arr, mid + 1, right, animations);

        merge(arr, left, right, animations);
    }
}

function merge(arr, left, right, animations) {

    const mid = Math.floor((left + right) / 2);
    const copyArr = new Array(arr.length);

    let k = left, i = left;
    let j = mid + 1;

    while(i <= mid && j <= right) {


        animations.push([i, j]); /// we change the color of the two indexes
        animations.push([i, j]); /// revert the color change

        if(arr[i] <= arr[j]) {
            animations.push([k, arr[i]]); /// we overwrite the value arr[i] at position k
            copyArr[k++] = arr[i++];
        } else {
            animations.push([k, arr[j]]); /// we overwrite the value arr[j] at postion k
            copyArr[k++] = arr[j++];
        }
    }

    while(i <= mid) {
        /// the same as above
        animations.push([i, k]);
        animations.push([i, k]);

        animations.push([k, arr[i]]);
        copyArr[k++] = arr[i++];
    }

    while(j <= right) {
        /// the same as above
        animations.push([j, k]);
        animations.push([j, k]);

        animations.push([k, arr[j] ]);
        copyArr[k++] = arr[j++];
    }

    /// copy the copyArr in the mainArray
    for(let i = left; i <= right;++i)
        arr[i] = copyArr[i];
}