class Man {
    constructor(props) {
        console.log(123)
        this.name = props.name
        this.age = props.age
    }

    sayHello() {
        console.log(`Hello from ${this.name}`)
    }

    get personInfo() {
        return `${this.name} is ${this.age} years old`
    }

    set age(v) {
        console.log(v)
        return v
    }
}

class N extends Man {
    constructor(props) {
        super(props);
        this.sex = 'nanren'
    }
}
