// const arr = [1, 1, 2, 2, 2, 3, 3];

const secondLargest = (arr) => {
    const sortArr = arr.sort((a, b) => a - b)
    return sortArr[sortArr.length - 2]
}
// console.log(secondLargest(arr))

/* ----------------------------------------------------------------------------- -- */
const secondSmallest = (arr) => {
    let small = Infinity;
    let secondSmall = Infinity;
    if (arr.length < 2)
        return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            secondSmall = small
            small = arr[i]
        } else if (arr[i] < secondSmall && arr[i] !== small) {
            secondSmall = arr[i]
        }

    }
    return ({
        small: small,
        secondSmall: secondSmall
    })
}
// console.log(secondSmallest(arr))

/* ----------------------------------------------------------------------------- -- */

const isSortedArr = (arr) => {
    if (arr.length === 1) return true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}
// console.log(isSortedArr(arr))

/* ----------------------------------------------------------------------------- -- */

const removeDuplicatefromSorted = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    // console.log(arr.slice(0, i + 1))
    return i + 1
}
const removeDuplicate = (arr) => {
    const seen = new Set()
    let i = 0
    console.log(seen, i)

    for (let j = 0; j < arr.length; j++) {

        if (!seen.has(arr[j])) {
            seen.add(arr[j])
            arr[i] = arr[j]
            i++
        }
    }
    // console.log(arr.slice(0, i))
    return arr.slice(0, i)
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))
// console.log(removeDuplicatefromSorted(arr))



/* ----------------------------------------------------------------------------- -- */

const leftRotateByOne = (arr) => {
    if (arr.length === 0) return arr
    // const firstElement = arr.shift()
    // arr.push(firstElement)
    // return arr

    let firstElement = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = firstElement
    return arr

}

const reverseArr = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

const leftRotatreByD = (arr, d) => {
    const n = arr.length
    if (n === 0 || d === 0) return arr
    d = d % n
    if (d === 0) return arr;

    reverseArr(arr, 0, d - 1)
    reverseArr(arr, d, n - 1)
    reverseArr(arr, 0, n - 1)
    return arr
}

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}
// var rotate = function (nums, k) {
//     let n = nums.length
//     if (k === 0 || n === 0) return nums
//     k = k % n
//     if (k === 0) return nums

//     reverse(nums, 0, k - 1)
//     reverse(nums, k, n - 1)
//     reverse(nums, 0, n - 1)

//     return nums
// };
// console.log(leftRotatreByD([1, 2, 3, 4, 5, 6, 7,], 3), 'leftRotatreByD')
// console.log(rotate(arr))

/* --------------------------------------------------------------- */


function moveZeros(n, a) {
    let j = 0;
    // Place the pointer j
    // for (let i = 0; i < n; i++) {
    //     if (a[i] === 0) {
    //         j = i;
    //         break;
    //     }
    // }
    // No non-zero elements
    // if (j === -1) return a;

    // Move the pointers i and j and swap accordingly
    for (let i = 0; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
        }
    }

    return a;
}

let arr1 = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr1);
// console.log(ans.join(' '), 'moveZeros');

/* --------------------------------------------------------------- */

function findUnion(arr1, arr2) {
    let unionArr = [];

    // Add elements of the first array to the union array if they are not already present
    for (let i = 0; i < arr1.length; i++) {
        if (!isInArray(unionArr, arr1[i])) {
            unionArr.push(arr1[i]);
        }
    }

    // Add elements of the second array to the union array if they are not already present
    for (let i = 0; i < arr2.length; i++) {
        if (!isInArray(unionArr, arr2[i])) {
            unionArr.push(arr2[i]);
        }
    }

    return unionArr;
}

// Helper function to check if an element is in the array
function isInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}


// let arr2 = [1, 2, 3, 4];
// let arr3 = [3, 4, 5, 6];
// let unionArr = findUnion(arr3, arr2);
// console.log(unionArr);

/* --------------------------------------------------------------- */


const finMissingNumber = (nums) => {
    let n = nums.length
    let refSum = 0
    for (let i = 0; i <= n; i++) {
        refSum += i
    }
    const numSum = nums.reduce((a, b) => a + b, 0)
    return (refSum - numSum)
}
// console.log(finMissingNumber([9,6,4,2,3,5,7,0,1]))
/* --------------------------------------------------------------- */

const findNumberthatappearsOne = (arr) => {


    let val = 0
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] ? hash[arr[i]]++ : hash[arr[i]] = 1
    }

    Object.keys(hash).map((item) => {
        // console.log({ item })
        if (hash[item] == 1) {
            val = item
        }
    })

    return val
}
const findUniqueNumbers = (nums) => {
    let hash = {};

    // Count occurrences
    nums.forEach(item => {
        hash[item] = (hash[item] || 0) + 1;
    });

    // Filter numbers that appear only once
    return Object.keys(hash)
        .filter(item => hash[item] === 1)
        .map(Number); // Convert keys back to numbers
};
console.log(findUniqueNumbers([4, 1, 2, 1, 2, 34, 4, 100]), "findNumberthatappearsOne")

/* --------------------------------------------------------------- */


const Armstrong = (num) => {
    let temp = num
    const digits = Math.floor(Math.log10(num) + 1)
    let sum = 0
    while (temp > 0) {
        let ld = temp % 10
        sum += Math.pow(ld, digits)
        temp = Math.floor(temp / 10)
    }
    return sum === num ? true : false
}

// console.log(Armstrong(9475), "Armstrong")

/* --------------------------------------------------------------- */
function isPrime(N) {
    if (N <= 1) return false;
    if (N === 2 || N === 3) return true;
    if (N % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(N); i += 2) {
        if (N % i === 0) return false;
    }
    return true;
}
// console.log(isPrime(30) ? "Prime" : "Not Prime");

/* --------------------------------------------------------------- */

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
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 'findMaxConsecutiveOnes')

/* ----------------------------------------------------------------------------- -- */

const consecutiveSequense = (arr) => {
    let newArrr = new Set(arr)
    let longest = 0
    for (let nums of newArrr) {

        if (!newArrr.has(nums - 1)) {
            let currentNum = nums;
            let count = 1


            while (newArrr.has(currentNum + 1)) {
                currentNum++
                count++

            }
            longest = Math.max(longest, count)
        }
    }
    return longest

}
// console.log(
//     consecutiveSequense([24, 54, 56, 1, 35, 456, 3, 56, 6, 456, 3, 4, 3456, 5, 1]), 'longest')

/* --------------------------------------------------------------- */

// intersection of the two arrays

const intersection = (arr1, arr2) => {
    // return arr1.filter((item) => arr2.includes(item))
    let result = []
    let hash = {}
    for (let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = true
    }

    for (let i = 0; i < arr2.length; i++) {
        if (hash[arr2[i]]) {
            result.push(arr2[i])
            hash[arr2[i]] = false
        }
    }
    return result

}


// console.log(intersection([1, 2, 34, 44545, 6], [2, 3, 5, 67, 78, 989, 1]), 'interactions')


/* --------------------------------------------------------------- */

const obj = [
    {
        key: 'Sample 1',
        data: 'Data1',
    },
    {
        key: 'Sample 1',
        data: 'Data2',
    },
    {
        key: 'Sample 2',
        data: 'Data10',
    },
    {
        key: 'Sample 1',
        data: 'Data3',
    },
    {
        key: 'Sample 1',
        data: 'Data20',
    },
    {
        key: 'Sample 3',
        data: 'Data30',
    },
]

const groupByKey = (arr) => {
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i].key] ? hash[arr[i].key].push(arr[i]) : hash[arr[i].key] = [arr[i]]
    }
    return hash

}
console.log(groupByKey(obj), "groupByKey")
