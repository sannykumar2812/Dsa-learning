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
