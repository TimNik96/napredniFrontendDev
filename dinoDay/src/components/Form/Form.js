import { Select } from "../Select/Select"
import dinoArray from "../../dinosData"

export const Form = () => {
    const divContainer = document.createElement("div")
    divContainer.classList.add("header")

    const form = document.createElement("form")

    const divKupac = document.createElement("div")

    const labelKupac = document.createElement("label")
    labelKupac.setAttribute("for", "kupac")
    labelKupac.textContent = "Kupac: "

    const inputKupac = document.createElement("input")
    inputKupac.type = "text"
    inputKupac.name = "kupac"
    inputKupac.id = "kupac"

    divKupac.append(labelKupac, inputKupac)

    const select = Select(dinoArray)

    const divNapomena = document.createElement("div")

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

    form.append(divKupac, select, divNapomena, inputSubmit)

    divContainer.appendChild(form)

    return divContainer
}
