const ary = [5, 9, 3, 1, 2, 8, 4, 7, 6]

function bubbleSort(ary) {
    for (let i = 1; i < ary.length; i++) {
        for (let j = i; j > 0; j--) {
            if (ary[j] < ary[j - 1]) {
                [ary[j], ary[j - 1]] = [ary[j - 1], ary[j]]
            }
            console.log(ary)
        }
    }
    return ary
}

// bubbleSort(ary)

// function selectSort(ary) {
//     for (let i = 0; i < ary.length; i++) {
//         let min = Math.min(...ary.slice(i));
//         let index = ary.indexOf(min);
//         [ary[i], ary[index]] = [ary[index], ary[i]];
//         console.log(ary)
//     }
//     return ary
// }
//
// selectSort(ary)
//
function mergeSort(array, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left) >> 1) + left;
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    console.log(` Merge(${array}, ${left}, ${mid}, ${right})`)
    Merge(array, left, mid, right)
    return array;
}

// O(nlogn)
function Merge(array, left, mid, right) {
    let temp = [];
    let i = 0;
    let p1 = left;
    let p2 = mid + 1;

    while (p1 <= mid && p2 <= right) {
        array[p1] <= array[p2] ? temp[i++] = array[p1++] : temp[i++] = array[p2++]
    }

    while (p1 <= mid) {
        temp[i++] = array[p1++]
    }

    while (p2 <= right) {
        temp[i++] = array[p2++]
    }

    for (let i = 0; i < temp.length; i++) {
        array[i+left] = temp[i]
    }
}

console.log(mergeSort(ary, 0, ary.length - 1))













