// Imports
import calcResult from "./calcResult.mjs"

// variáveis
export const resultado = document.querySelector('#resultado h2')

const calcularBTN = document.querySelector('#inputs input[type="button"]')
calcularBTN.addEventListener('click', calcResult)


