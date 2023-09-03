export const Select = (array) => {
    const select = document.createElement("select")

    const defaultInput = document.createElement("option")
    defaultInput.setAttribute("selected", "")
    defaultInput.setAttribute("disabled", "")
    defaultInput.value = "default"
    defaultInput.textContent = "TEST"
    select.appendChild(defaultInput)

    array.forEach((dinosaurus) => {
        const option = document.createElement("option")
        option.value = dinosaurus.name.toLowerCase()
        option.textContent = dinosaurus.name
        select.appendChild(option)
    })

    return select
}
