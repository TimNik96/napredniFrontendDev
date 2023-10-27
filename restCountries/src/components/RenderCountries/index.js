const RenderCountries = (countries) => {
    const main = document.querySelector(".country-selection")
    main.textContent = ""

    if (countries.length == 0) {
        const pError = document.createElement("p")
        pError.classList.add("errorMessage")
        pError.textContent = "No match found"
        main.appendChild(pError)
        return
    }

    countries.forEach((item) => {
        const divCountry = document.createElement("div")
        divCountry.classList.add("country")

        const imgCountry = document.createElement("img")
        imgCountry.src = item.flags.png
        imgCountry.alt = item.flags.alt

        const divInfo = document.createElement("div")
        divInfo.classList.add("country-info")

        const countryName = document.createElement("h3")
        countryName.textContent = item.name.common

        const pPopulation = document.createElement("p")
        pPopulation.textContent = `Population: ${item.population}`

        const pRegion = document.createElement("p")
        pRegion.textContent = `Region: ${item.region}`

        const pCapital = document.createElement("p")
        pCapital.textContent = `Capital: ${item.capital}`

        divInfo.append(countryName, pPopulation, pRegion, pCapital)
        divCountry.append(imgCountry, divInfo)

        main.appendChild(divCountry)
    })
}

export default RenderCountries
