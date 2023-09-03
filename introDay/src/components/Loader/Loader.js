const Loader = () => {
    const divProgressBar = document.createElement("div")
    divProgressBar.classList.add("progress-bar")

    const divProgress = document.createElement("div")
    divProgress.classList.add("progress")

    const pPercentage = document.createElement("p")
    pPercentage.classList.add("percentage")
    pPercentage.textContent = "0%"

    divProgress.appendChild(pPercentage)
    divProgressBar.appendChild(divProgress)

    return divProgressBar
}

export const displayPercentage = (percentage) => {
    let number = parseInt(percentage.textContent)
    if (number === 100) return
    percentage.textContent = `${number + 1}%`
    return setTimeout(() => {
        displayPercentage(percentage)
    }, 48)
}

export default Loader
