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


//---------------------POLIFILL--------------------------------------------------------------------------------
const data = {
    name: "Devtools Tech",
    channel: {
        youtube: {
            link: "bit.ly/devtools-yt",
            name: "Devtools Tech",
            subscribe: "true",
        },
        platform: {
            link: "devtools.tech",
            resources: {
                pages: ["/questions", "/resources"],
            },
        },
    },
};

const flatObject = (obj, path, flatObj = {}) => {
    Object.keys(obj).map((key) => {
        if (typeof obj[key] === "object") {
            flatObject(obj[key], path ? `${path}_${key}` : key, flatObj);
        } else {
            flatObj[path ? `${path}_${key}` : key] = obj[key];
        }
    });

    return flatObj;
};
// console.log(flatObject(data, "", {}));


const flatObjMy = (obj, path, flatobj = {}) => {
    Object.keys(obj).map((item) => {
        if (typeof obj[item] === "object") {
            flatObjMy(obj[item], path ? `${path}_${item}` : item, flatobj)
        }
        else {
            flatobj[path ? `${path}_${item}` : item] = obj[item]
        }
    })
    return flatobj
}
// console.log(flatObjMy(data, "", {}));


/*
const arr = [1, [2, 3, [3, 4, 46, [64, 56, 656, [4, 54, 5, 65, 56, 6, [65, 65, 56, 56,]]]]]]
// console.log(arr.flat(5), 'flat')
const flatArr = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flatArr(arr[i]))
        } else {
            result.push(arr[i])
        }

    }
    return result
}
console.log(flatArr(arr))
*/

// --------------------------

// const minInArr = (nums) => {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = left + Math.floor((right - left) / 2);
//         if (nums[left] < nums[mid]) {
//             /**
//         In this step i am checking whether the left side is sorted or not and if it sorted 
//         i am storing the minimum value in min and moving my left pointer to mid + 1
//        */
//             left = mid + 1;
//         } else {
//             if (nums[mid] < nums[right]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//     }

//     return nums[left];
// };

const minInArr = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < nums[right]) {
            right = left;
        } else {
            left++;
        }
    }

    return nums[left];
};

// console.log(minInArr([3, 4, 5, 1, 2]));
// console.log(minInArr([3, 4, 5, 6, 7, 0, 1, 2]));

const arr = ['45', '567', '1', '2', '3', '4', '5']

const minValue = (arr) => {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }

    }
    return min
}

console.log(minValue(arr), 'o/p')