// Napisati JS funkciju koja za prosleđeni string ispisuje 5 najčešće korišćenih karaktera kao i njihov
// broj ponavljanja:
// let str = "aassdddfff"

// const brojac = (str) => {
//     const nekiNiz = []
//     let slovo
//     for (let i = 0; i < str.length; i++) {
//         slovo = nekiNiz.find((el) => str.charAt(i) === el.slovo)
//         if (slovo) {
//             slovo.broj += 1
//             continue
//         }
//         const obj = {
//             slovo: str.charAt(i),
//             broj: 1,
//         }
//         nekiNiz.push(obj)
//     }

//     nekiNiz.sort((a, b) => b.broj - a.broj)

//     return nekiNiz.slice(0, 5)
// }

// console.log(brojac(str))

///////////////////////////////////////////////////

// const niz = [0, 1, 2, 3, 4]

// function firstNonConsecutive(arr) {
//     const result = arr.find((el, index) => {
//         if (el - arr[index + 1] !== -1 && arr[index + 1] !== undefined)
//             return arr[index + 1]
//     })
//     return result !== undefined
//         ? arr[arr.findIndex((el) => el === result) + 1]
//         : null
// }

// console.log(firstNonConsecutive(niz))

////////////////////////////////////////////////////

// function excludeVAT(price) {
//     return price * 0.85
// }

// const niz = [1, 10, 12, 2, 202, 14]

// const minNum = (arr) => {
//     return arr.sort((a, b) => a - b)[0]
// }

// const minimum = (arr) => {
//     const min = arr[0]
//     arr.forEach((el) => {
//         if (el < min) min = el
//     })
//     return min
// }

// console.log(minimum(niz))

const hex = "0xfa872b"
console.log(Number(hex))

// const hexToDecimal = (number) => {
//     const operableString = number.substring(2)
//     let convertedNumber = 0
//     let stepen = 0

//     for (let i = operableString.length - 1; i >= 0; i--) {
//         if (operableString.charAt(i) === "a")
//             convertedNumber += 10 * Math.pow(16, stepen)
//         else if (operableString.charAt(i) === "b")
//             convertedNumber += 11 * Math.pow(16, stepen)
//         else if (operableString.charAt(i) === "c")
//             convertedNumber += 12 * Math.pow(16, stepen)
//         else if (operableString.charAt(i) === "d")
//             convertedNumber += 13 * Math.pow(16, stepen)
//         else if (operableString.charAt(i) === "e")
//             convertedNumber += 14 * Math.pow(16, stepen)
//         else if (operableString.charAt(i) === "f")
//             convertedNumber += 15 * Math.pow(16, stepen)
//         else convertedNumber += +operableString[i] * Math.pow(16, stepen)
//         stepen++
//     }

//     return convertedNumber
// }

// console.log(hexToDecimal(hex))

const arr = [1, 2, 3]

const randElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
