const header = document.querySelector(".header")
const app = document.querySelector("#app")
// const main = document.querySelector(".country-selection")

export const setDarkMode = (isDarkMode) => {
    if (isDarkMode) {
        header.style.backgroundColor = "#00102b"
        header.style.color = "#fff"
        app.style.backgroundColor = "#01061b"
        app.style.color = "#fff"
        return
    }

    header.style.backgroundColor = "#fff"
    header.style.color = "#000"
    app.style.backgroundColor = "#fff"
    app.style.color = "#000"
}
