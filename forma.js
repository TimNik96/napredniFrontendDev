const forma = document.querySelector("form")
const inputFirstname = document.querySelector("#firstname")
const inputEmail = document.querySelector("#email")
const errorP = document.querySelector("p")

forma.addEventListener("submit", (event) => {
    event.preventDefault()
    if (inputFirstname.value.trim() === "") {
        errorP.textContent = "Morate popuniti polje"
        setTimeout(() => {
            errorP.textContent = ""
        }, 2000)
        return
    }
    if (inputFirstname.value.trim().length < 8) {
        errorP.textContent = "Morate uneti bar 8 karaktera"
        setTimeout(() => {
            errorP.textContent = ""
        }, 2000)
        return
    }
    if (!inputEmail.value.includes("@")) {
        errorP.textContent = "Mejl nije validan"
        setTimeout(() => {
            errorP.textContent = ""
        }, 2000)
        return
    }
})
