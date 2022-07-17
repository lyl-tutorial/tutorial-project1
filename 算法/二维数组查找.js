const arry = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]


function find(arry, target) {
    for (let i = 0; i < arry.length; i++) {
        for (let j = 0;j < arry[i].length; j++) {
            if (arry[i][j] === target) {
                return true
            }
        }
    }
    return false
}

console.log(find(arry, 4))
console.log(find(arry, 120))

function findPlus(arry, target) {
    let x = arry.length - 1;
    let y = 0;

    while (x >= 0 && y < arry[0].length) {
        if (arry[x][y] < target) {
            y++;
        } else if (arry[x][y] > target) {
            x--;
        } else {
            return true;
        }
    }
    return false;
}

console.log(findPlus(arry, 10))
console.log(findPlus(arry, 100))
