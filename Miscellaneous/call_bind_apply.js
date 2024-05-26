const ob1 = {
    'first_name': 'Sunny',
    'second_name': 'kumar',
}

const method = function (homeTown) {
    console.log(this.first_name + " " + this.second_name + " " + homeTown)
}

const obj2 = {
    'first_name': 'Sunny',
    'second_name': 'kumar',
}


method.call(obj2, 'Delhi')

// method.apply(obj2, ['Delhi'])
const bindData = method.bind(obj2, 'Delhi')
// bindData()

// ----------------Fibonacci----------------------------------------------------------------------------
const Fibonacci = (n) => {
    let n1 = 0, n2 = 1, next = n1 + n2
    while (next <= n) {
        // console.log(next)
        n1 = n2
        n2 = next
        next = n1 + n2

    }
}
// console.log(Fibonacci(10))