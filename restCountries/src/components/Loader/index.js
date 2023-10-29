const Loader = () => {
    const loaderContainer = document.createElement("div")
    loaderContainer.classList.add("loader")

    for (let i = 1; i <= 5; i++) {
        const divDot = document.createElement("div")
        divDot.classList.add("dot")
        loaderContainer.appendChild(divDot)
        if (i == 1) continue
        divDot.classList.add(`d${i}`)
    }

    return loaderContainer
}

export default Loader
