const ary = [2, 7, 9, 3, 1, 10, 3, 6]


// dp[n] = MAX(dp[n -1], dp[n-2] + num)

function rob(ary) {
    const len = ary.length
    if (len === 0) {
        return 0
    }
    const dp = new Array(len + 1)
    dp[0] = 0
    dp[1] = ary[0]

    for (let i = 2; i <= len; i++) {
        console.log(`dp: ${dp}, i:${i}`)
        dp[i] = Math.max(dp[i  -1], dp[i-2] + ary[i-1])
    }
}

rob(ary)