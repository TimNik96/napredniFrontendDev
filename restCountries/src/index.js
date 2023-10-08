import { getAllCountries } from "./service"
import RenderCountry from "./components/RenderCountry/index.js"

import "../asset/css/style.css"

const app = document.querySelector("#app")

const fetchAllCountries = async () => {
    try {
        const response = await getAllCountries()
        // eslint-disable-next-line no-console
        // console.log(response)

        response.data.forEach((country) => {
            const newCountry = RenderCountry(country)
            app.appendChild(newCountry)
        })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
    }
}

// DRUGI NACIN
// getSingleCountry("Serbia")
//     .then((response) => {
//         //eslint-disable-next-line no-console
//         console.log(response.data)
//     })
//     .catch((error) => {
//         //eslint-disable-next-line no-console
//         console.log(error)
//     })

fetchAllCountries()
