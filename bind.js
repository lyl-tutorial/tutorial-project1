function sum(a, b) {
    if (this.c) {
        console.log(a + b + this.c)
    } else {
        console.log(a + b)
    }
    console.log(this)
}

sum(1, 2)

const thisObj = {
    c: 20
}

const sumBind = sum.bind(thisObj, 5)

sumBind(2)
