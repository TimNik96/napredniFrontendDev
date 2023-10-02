import "../asset/css/style.css"
import { getAllLaunches, getSingleLaunch } from "./axios.js"

const app = document.querySelector("#app")
app.textContent = "Hello World!"

//TEODORA TRAZILA
const dohvatiPodatke = async () => {
    try {
        const response = await getSingleLaunch("10")
        //eslint-disable-next-line no-console
        console.log(response.data)
    } catch (error) {
        //eslint-disable-next-line no-console
        console.log(error)
    }
}

//TEODORA TRAZILA
dohvatiPodatke()

// getAllLaunches()
//     .then((response) => {
//         //eslint-disable-next-line no-console
//         console.log(response.data)
//     })
//     .catch((error) => {
//         //eslint-disable-next-line no-console
//         console.log(error)
//     })

// // eslint-disable-next-line no-console
// console.log("Nesto")

// getSingleLaunch("10")
//     .then((response) => {
//         //eslint-disable-next-line no-console
//         console.log(response.data)
//     })
//     .catch((error) => {
//         //eslint-disable-next-line no-console
//         console.log(error.response.data)
//     })
