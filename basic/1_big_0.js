/*   https://cs.slides.com/colt_steele/built-in-data-structures-30
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do 
is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2 )
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

- Arithmetic operations are constant
- variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop,  the complexity is the length of the loop times 
the complexity of whatever happens inside of the loop.

== Space Complexity in JS- Rules of Thumb

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

*/



// const SumUpto = (n)=>{
// var x = (n * (n+1))/2
// return x 
// }
// // console.log("Time before result1",performance.now())
// const result1 = SumUpto(5000000000)
// console.log("result1",result1)
// console.log("Time after result1",performance.now())


// const Sum = (n)=>{
//     let total = 0;
//     for ( let i = 1 ; i <=n ; i++){
//         total += i
//     }
//     return total
// }
// // console.log("Time before result1",performance.now())
// const result = Sum(5000000000)
// console.log("result2",result)
// console.log("Time after result2",performance.now())
// -------------------------------------------------------------------------------------------------------

// function abc(n){
//     for (i=0; i <= n ; i++){
//         console.log(i)
//     }
//     console.log("Back to down")
//     for(j=n-1; j >= 0;j--){
//         console.log(j)
//     }
// }
// abc(8)

// -------------------------------------------------------------------------------------------------------------
/* log atleast5*/

// function logatLeast5(n){
//     for(var i=1;i <= Math.max(5,n);i++){
//         console.log(i)
//     }
// }
// logatLeast5(5)


/* atmost5 */
// function logatmost5(n){
//     for(var i=1;i <= Math.min(5,n);i++){
//         console.log(i)
//     }
// }
// logatmost5(50)
// -------------------------------------------------------------------------------------------------------------
/* sum of an array*/
// function sum(arr){
//     let total = 0.
//     for(let i=0; i < arr.length; i++){
//         total += arr [i];
//     }
//     console.log(total)
// }
// sum([1,2,3,4])



//=================================================================================================================================================
