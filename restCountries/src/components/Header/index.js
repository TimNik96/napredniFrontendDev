import { setDarkMode } from "../../helper/setDarkMode"

const Header = () => {
    let isDarkMode = false

    const header = document.querySelector(".header")

    const appName = document.createElement("h1")
    appName.textContent = "Where in the world?"

    const darkMode = document.createElement("div")
    darkMode.classList.add("lightMode")
    darkMode.textContent = "Dark Mode"

    header.append(appName, darkMode)

    darkMode.addEventListener("click", (event) => {
        isDarkMode = !isDarkMode
        if (isDarkMode) {
            darkMode.classList.add("darkMode")
            darkMode.classList.remove("lightMode")
            setDarkMode(isDarkMode)
            return
        }
        darkMode.classList.add("lightMode")
        darkMode.classList.remove("darkMode")
        setDarkMode(isDarkMode)
    })
}

export default Header
