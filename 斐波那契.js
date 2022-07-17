// 1 1 2 3 5 8 13 21 34 55

function fib(n) {

}


// fib(10) -> 1 1 2 3 5 8 13 21 34 55

// 递归
function test(n) {
    console.log(n)
    if (n === 9000) {
        return
    }
    return test( n + 1)
}

test(10)
