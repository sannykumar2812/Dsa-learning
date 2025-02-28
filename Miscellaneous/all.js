const addSum = (a) => {
    return (b) => {
        if (b === undefined) return a
        return addSum(a + b)
    }
}
// console.log(addSum(1)(2)(5)(5)(5)())
// console.log(abc(2)(3)(34)(30)(0)()(32))




const radius = [1, 5, 6, 7]
const area = function (radius) {
    return Math.PI * radius * radius
}

const cirumferance = function (radius) {
    return 2 * Math.PI * radius
}


const diamether = function (radius) {
    return 2 * radius
}

const findValue = (radius, operation) => {
    const output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(operation(radius[i]))
    }
    return output
}


console.log(findValue(radius, diamether), 'daimeter')
console.log(findValue(radius, cirumferance), 'cirumferance')
console.log(findValue(radius, area), 'area')
