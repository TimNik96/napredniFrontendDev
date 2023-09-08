import { Form } from "./components/Form/Form.js"
import { Select } from "./components/Select/Select.js"
import dinoArray from "./dinosData.js"

import "../asset/css/styles.css"

const app = document.querySelector("#app")
const header = document.querySelector(".header")

const select = Select(dinoArray)
header.appendChild(select)

const forma = Form()
header.appendChild(forma)

// DISPLAY COMPONENT
