
// const stringCount = (strng, item) => {
//     const obj = {}

//     for (const i of item) {
//         obj[i] = 0
//     }
//     // console.log(obj, "1")

//     for (const value of strng) {
//         if (item.includes(value)) {
//             obj[value]++

//         }
//     }
//     return obj
//     // console.log(obj, "2")
// }

// const input = "pdfkfkofkwpjfpowejpowjepjeofjpo"
// const value = ["p", "k", "f", "w", "j"]
// console.log(stringCount(input, value), 'O/P')

// --------------------------------------------------------------------------

const S = "i.like.this.program.very.much"
const reverse = (s) => {
    const data = s.split('.').map((item) => item.split('').reverse().join(''))
    console.log(data.join('.'))
}
reverse(S)

// -----------------------------

// function reverseWordsCharacters(str) {
//     let reversedStr = "";
//     let word = "";
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === " " || i === str.length - 1) {
//             if (i === str.length - 1) {
//                 word += str[i];
//             }

//             for (let j = word.length - 1; j >= 0; j--) {
//                 reversedStr += word[j];
//             }

//             if (i !== str.length - 1) {
//                 reversedStr += " ";
//             }

//             word = "";
//         } else {
//             word += str[i];
//             // console.log(word, "----wprd")
//         }
//     }

//     return reversedStr;
// }

// const originalString = "Hello world! This is a test.";
// const reversedString = reverseWordsCharacters(originalString);
// console.log(reversedString);