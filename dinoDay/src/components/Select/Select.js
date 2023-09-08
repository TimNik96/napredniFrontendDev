export const Select = (array) => {
    const divSelect = document.createElement("div")
    divSelect.classList.add("column")
    divSelect.classList.add("select")

    const label = document.createElement("label")
    label.textContent = "Dinosaurus: "

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

    divSelect.append(label, select)

    return divSelect
}
