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
