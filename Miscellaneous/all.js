const addSum = (a) => {
    return (b) => {
        if (b === undefined) return a
        return addSum(a + b)
    }
}
// console.log(addSum(1)(2)(5)(5)(5)())
// console.log(abc(2)(3)(34)(30)(0)()(32))

/* --------------------------------------------------------------- */
// findMaxConsecutiveOnes
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
            max = Math.max(max, count)
        } else {
            count = 0
        }
    }
    return max
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))




