import { getRegion } from "../../../service"
import { capitalize } from "../../../helper/regions"
import RenderCountries from "../../RenderCountries/index.js"

const RegionSelect = (regions) => {
    const select = document.createElement("select")
    const pDefault = document.createElement("option")
    pDefault.value = "default"
    pDefault.textContent = "Select Region"
    select.appendChild(pDefault)

    regions.forEach((el) => {
        const optionRegion = document.createElement("option")
        optionRegion.value = el.toLowerCase()
        optionRegion.textContent = el
        select.appendChild(optionRegion)
    })

    select.addEventListener("change", (event) => {
        getRegion(capitalize(event.target.value))
            .then((response) => {
                RenderCountries(response.data)
            })
            .catch((error) => {
                //error
            })
    })

    return select
}

export default RegionSelect
