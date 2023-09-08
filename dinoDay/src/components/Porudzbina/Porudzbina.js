export const Porudzbina = (object) => {
    const nizPor = []

    if (localStorage.getItem("nizPorudzbina") !== null) {
        nizPor = [...JSON.parse(localStorage.getItem("nizPorudzbina"))]
    }

    const divPorudzbine = document.createElement("div")

    const pKupac = document.createElement("p")
    pKupac.innerHTML = `<span class="highlight">Kupac: </span>${object.kupac}`

    const pNapomena = document.createElement("p")
    pNapomena.innerHTML = `<span class="highlight">Kupac: </span>${object.napomena}`

    const pDinosaurus = document.createElement("p")
    pDinosaurus.innerHTML = `<span class="highlight">Kupac: </span>${object.dinosaurus}`

    const pCena = document.createElement("p")
    pCena.innerHTML = `<span class="highlight">Kupac: </span>${object.cena}`

    const btnBrisi = document.createElement("button")
    btnBrisi.textContent = "Obrisi"

    btnBrisi.addEventListener("click", () => {
        // IMPLEMENT DELETE LOGIC
    })
}
