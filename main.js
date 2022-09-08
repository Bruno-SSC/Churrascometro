// Imports
import calcResult from "./js/calcResult.mjs"

// variáveis

export const resultado = document.querySelector('#resultado h2')
const calcularBTN = document.querySelector('#inputs input[type="button"]')

resultado.parentElement.style.display = "none"

calcularBTN.addEventListener('click', calcResult)

