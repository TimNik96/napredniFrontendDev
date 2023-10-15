import { getAllCountries, getSingleCountry } from "./service"
import RenderCountries from "./components/RenderCountries/index.js"
import Search from "./components/Filters/Search"

import "../asset/css/style.css"

const filters = document.querySelector(".filters")
const search = Search()
filters.appendChild(search)

const fetchAllCountries = async () => {
    try {
        const response = await getAllCountries()
        // eslint-disable-next-line no-console
        console.log(response)

        RenderCountries(response.data)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
    }
}

const fetchSingleCountry = async (name) => {
    try {
        const response = await getSingleCountry(name)
        // eslint-disable-next-line no-console
        console.log(response)

        RenderCountries(response.data)
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
// fetchSingleCountry("serbia")
