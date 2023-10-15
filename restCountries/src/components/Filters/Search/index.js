import { getAllCountries } from "../../../service"
import RenderCountries from "../../RenderCountries"

const Search = () => {
    const inputSearch = document.createElement("input")
    inputSearch.type = "text"
    inputSearch.placeholder = "Search for a country..."

    inputSearch.addEventListener("keyup", async (event) => {
        if (event.key === "Enter") {
            try {
                const response = await getAllCountries()

                const result = response.data.filter((item) =>
                    item.name.common.includes(event.target.value)
                )

                RenderCountries(result)
            } catch (error) {
                //eslint-disable-next-line no-console
                console.log(error)
            }
        }
    })

    return inputSearch
}

export default Search
