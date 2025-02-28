// Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array

// removeVowels

const removeVowels = (str) => {
    const Vowels = ['a', 'e', 'i', 'o', 'u']
    let newStr = ''
    for (let i = 0; i <= str.length; i++) {
        if (!Vowels.includes(str[i])) {
            newStr += str[i]
        }
    }
    return newStr
}
