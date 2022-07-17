function numberReverse(num) {
    let reverse = 0;
    let res = num

    while (res >= 10) {
        console.log(`reverse: ${reverse}, res:${res}`)
        reverse = reverse * 10 + res % 10
        res = Math.floor(res / 10)
    }

    return (reverse * 10) + res
}

console.log(numberReverse(1234))
