// [
//     5, 9, 3, 1, 2,
//     8, 4, 7, 6
// ]
//     [
//     5, 3, 9, 1, 2,
//         8, 4, 7, 6
//     ]
//     [
//     3, 5, 9, 1, 2,
//         8, 4, 7, 6
//     ]
//     [
//     3, 5, 1, 9, 2,
//         8, 4, 7, 6
//     ]
//     [
//     3, 1, 5, 9, 2,
//         8, 4, 7, 6
//     ]
//     [
//     1, 3, 5, 9, 2,
//         8, 4, 7, 6
//     ]
//     [
//     1, 3, 5, 2, 9,
//         8, 4, 7, 6
//     ]


let a = 1, b = 2

const ary = [5, 9, 3, 1, 2, 8, 4, 7, 6] // n
function bubbleSort(ary) {
    for (let i = 1; i < ary.length;i ++) {
        for (let j = i; j > 0; j--) {
            if (ary[j] < ary[j -1]) {
                    [ary[j], ary[j - 1]] = [ary[j - 1], ary[j]]
            }
            console.log(ary)
        }
    }
    return ary
}
// bubbleSort(ary)



// 选择排序
// 6 1 7 8 9 3 5 4 2
// 1 6 7 8 9 3 5 4 2
// 1 2 7 8 9 3 5 4 6
// 1 2 3 8 9 7 5 4 6

function selectSort(ary) {
    for (let i = 0; i < ary.length; i++) {
        let min = Math.min(...ary.slice(i));
        let index = ary.indexOf(min);
        [ary[i], ary[index]] = [ary[index], ary[i]];
        console.log(ary)
    }
    return ary
}

selectSort(ary)
















