// function pow(x, n) {
//     let result = 1
//     for (let i = 0; i < n; i++) {
//         console.log(result)
//         result = result * x
//     }
//     return result
// }


// O(n)
function pow(x, n) {
    if (n === 1) {
        return  x
    }
    return x * pow(x, n - 1)
    // 2 * pow(2, 4) => 2 * 2 * pow(2, 3) => 2 * 2 * 2 * pow(2, 2) => 2 * 2 * 2 * 2 * 2
}


console.log(pow(2, 5))

function f(n) {
    if (n === 1) return 1
    return  n * f(n - 1)
}

function fPlus(n, total) {
    if (n === 1) return total
    console.log(n, n * total)
    return fPlus(n - 1, n * total)
}

// f(5) => 5 * 4 * 3 * 2 * 1

console.log(fPlus(5, 1))