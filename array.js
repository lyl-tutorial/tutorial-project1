const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter

let res = array.filter((n) => {
    console.log(n)

    return n % 2 === 0
})

console.log(res)

// map

res = res.map((n) => {
    return n * 2
})

console.log(res)
