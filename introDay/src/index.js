import Loader, { displayPercentage } from "./components/Loader/Loader"

// eslint-disable-next-line no-unused-vars
import css from "../asset/css/styles.css"

const app = document.querySelector("#app")
const btn = document.querySelector("button")

const loader = Loader()
app.prepend(loader)

const divProgress = document.querySelector(".progress")
const percentage = document.querySelector(".percentage")

btn.addEventListener("click", () => {
    divProgress.style.width = "500px"
    displayPercentage(percentage)
})
