// n = 2
// 1 + 1    2   [2]


// n = 3
// 1 + 1 +1   1 + 2    2 + 1  [3]

// n = 4
// 1 1 1 1    1 2 1   1 1 2   2 1 1  2 2    [5]

// n = 5
//  1 1 1 1 1   1 2 2 1  ...  [8]





function numWays(n) {
    if (n === 0) {
        return 1
    }
    if (n <= 2) {
        return n
    }

    let t1 = 1, t2 = 2
    for (let i = 3;i <= n; i++) {
        let t = t1 + t2;
        console.log(`t1:${t1}, t2:${t2}, i:${i}`)
        t1 = t2;
        t2 = t % 10000
    }
    return t2

    // return numWays(n - 2) + numWays(n - 1)
}



console.log(numWays(10))