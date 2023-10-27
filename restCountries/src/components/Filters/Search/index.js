import RenderCountries from "../../RenderCountries"

const Search = (data) => {
    const inputSearch = document.createElement("input")
    inputSearch.type = "text"
    inputSearch.placeholder = "Search for a country..."

    inputSearch.addEventListener("keyup", async (event) => {
        if (event.key === "Enter") {
            // try {
            const result = data.filter((item) =>
                item.name.common
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            )

            RenderCountries(result)
            // } catch (error) {
            //     //eslint-disable-next-line no-console
            //     console.log(error)
            // }
        }
    })

    return inputSearch
}

export default Search
