import "../asset/css/style.css"
import { fetchAllShips } from "./utils/http"

// const app = document.querySelector("#app")

const getAllShips = async () => {
    try {
        const response = await fetchAllShips()
        //eslint-disable-next-line no-console
        console.log(response)
    } catch (error) {
        //eslint-disable-next-line no-console
        console.log(error)
    }
}

getAllShips()
