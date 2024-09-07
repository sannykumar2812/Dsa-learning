/* https://cs.slides.com/colt_steele/tries-21#/1/0/0 */
/*

---How do we search?
Given an array, the simplest way to search for an value is to look at every element in the array
and check if it's the value we want.

There are many different search methods on arrays in JavaScript:
- indexOf  -->>> retrun index number
- includes  -->>> retrun true false
- find
- findIndex


/*
1. Linear searchg - Normal
    - This function accepts an array and a value
   - Loop through the array and check if the current array element is equal to the value
   - If it is, return the index at which the element is found
    -If the value is never found, return -1
*/

const arr = [1, 45, 6, 7, 8, 920, 34, 56, 67]
const linerSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}
console.log(linerSearch(arr, 1), "o/p")