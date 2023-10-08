const RenderCountry = (country) => {
    const divCountry = document.createElement("div")
    divCountry.textContent = country.name.common

    // country.name country.image country.population etc.

    return divCountry
}

export default RenderCountry
