/* https://cs.slides.com/colt_steele/searching-algorithms-22#/17/0/0 */


/*
What is Recursion ?
A process (a function in our case) that calls itself.

How recursive functions work..??
Invoke the same function with a different input until you reach your base case!

What is Base case ?
The condition when the recursion ends.

Two essential parts of a recursive function!
- Base Case
- Different Input
*/

/*===== CountDown=====*/
// function countdown(num){
//     if (num <=0){
//         console.log("All done")
//         return ;
//     }else{
//         console.log(num);
//         num--
//         countdown(num)
//     }
// }
// countdown(5)

/*===== Sum-range=====*/
// function sumRange(num){
//     if(num === 1) return 1;
//     return num + sumRange(num-1)
// }
// console.log(sumRange(10))


/*===== Factorial=====*/
// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1)
// }
// console.log(factorial(4))
// -----------------------------------------------------------------------
/*
Where things go wrong
-No base case
-Forgetting to return or returning the wrong thing!
-Stack overflow! .i.e maximum call stack exceed

example--
1- function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num);
}
2- function factorial(num){
    if(num === 1) console.log(1) ;
    return num * factorial(num-1);
}

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*HELPER METHOD RECURSION
fUNCTION ke andar recursion funciton ko call krnaa

*/
// e.g = Let's try to collect all of the odd values in an array!  
// Using HELPER METHOD RECURSION

// const arr = [1, 3, 4, 56, 78, 8, 3, 6, 11]
// const collectOdd = (data) => {
//     const newArr = []
//     const innerFunciton = (data) => {
//         if (data.length === 0) {
//             return
//         }
//         if (data[0] % 2 !== 0) {
//             newArr.push(data[0])
//         }
//         innerFunciton(data.slice(1))
//     }
//     innerFunciton(arr)
//     return newArr
// }
// console.log(collectOdd(arr))

//   Using PURE RECURSION
// const arr = [1, 3, 4, 56, 78, 8, 3, 6, 11]
// function collectOddValues(arr) {
//     let newArr = [];

//     if (arr.length === 0) {
//         return newArr;
//     }

//     if (arr[0] % 2 !== 0) {
//         newArr.push(arr[0]);
//     }
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }
// console.log(collectOddValues(arr))
// ===================================================

/*
------------------------Recap
- A recursive function is a function that invokes itself
- Your recursive functions should always have a base case and be invoked with different input each time.
- When using recursion, it's often essential to return values from one function to another to extract data from each function call.
- Helper method recursion is an alternative that allows us to use an external scope in our recursive functions.
- Pure recursion eliminates the need for helper method recursion, but can be trickier to understand at first.

*/
