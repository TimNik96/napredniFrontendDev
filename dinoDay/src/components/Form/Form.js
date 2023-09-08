import dinoArray from "../../dinosData.js"

export const Form = () => {
    const arr = []

    if (localStorage.getItem("nizPorudzbina") != null) {
        arr = [...JSON.parse(localStorage.getItem("nizPorudzbina"))]
    }

    const divContainer = document.createElement("div")

    const form = document.createElement("form")

    const divKupac = document.createElement("div")
    divKupac.classList.add("column")

    const labelKupac = document.createElement("label")
    labelKupac.setAttribute("for", "kupac")
    labelKupac.textContent = "Kupac: "

    const inputKupac = document.createElement("input")
    inputKupac.type = "text"
    inputKupac.name = "kupac"
    inputKupac.id = "kupac"

    divKupac.append(labelKupac, inputKupac)

    const divNapomena = document.createElement("div")
    divNapomena.classList.add("column")

    const labelNapomena = document.createElement("label")
    labelNapomena.textContent = "Napomena: "
    labelNapomena.for = "napomena"

    const textArea = document.createElement("textarea")
    textArea.name = "napomena"
    textArea.cols = "30"
    textArea.rows = "10"
    textArea.id = "napomena"

    divNapomena.append(labelNapomena, textArea)

    const inputSubmit = document.createElement("input")
    inputSubmit.type = "submit"

    form.append(divKupac, divNapomena, inputSubmit)

    const selectValue = document.querySelector("select")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        if (inputKupac.value.trim() === "") {
            alert("Popunite polje kupac")
            return
        }

        if (selectValue.value === "default") {
            alert("Izaberite dinosaurusa")
            return
        }

        const porudzbina = {
            kupac: inputKupac.value,
            dinosaurus: selectValue.value,
            napomena: napomena.value === "" ? "/" : napomena.value,
            cena: dinoArray.find(
                (el) => el.name.toLowerCase() === selectValue.value
            ).cena,
        }

        arr.push(porudzbina)
        localStorage.setItem("nizPorudzbina", arr)

        // DISPLAY ORDERS
    })

    divContainer.appendChild(form)

    return divContainer
}
