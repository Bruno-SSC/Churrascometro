import { resultado } from "../main.js"
import People from "./People.mjs"
import showResult from "./showResult.mjs"

export default function calcResult() {

    // * variáveis 

    var adultos = document.querySelector('#inputs input[placeholder="Adultos"]').value

    var criancas = document.querySelector('#inputs input[placeholder="Crianças"]').value

    const formato = document.querySelector('#inputs select').value


    var duracao = document.querySelector('#inputs input[placeholder="Duração"]').value



    /*
    todo: a quantia começa com 0 e vai aumentando conforme mais pessoas e tempo. Portanto, os testes determinam em quanto e quantas vezes aumenta de acordo esses valores. O que também depende de quanto cada adulto/criança come que supomos seja um valor x configurável. 
    */

    // ? Adulto: 300g/h
    // ? Criança: 100g/h

    if (formato == 'Minutos') {
        duracao = (duracao / 60)
    }

    adultos == '' ? adultos = 0 : ''

    criancas == '' ? criancas = 0 : ''

    const tp = parseInt(adultos) + parseInt(criancas)
    const pessoas = new Array()

    for (let i = 0; i < tp; i++) {
        if (i < adultos) {
            pessoas.push(new People('adulto', duracao))
        } else {
            pessoas.push(new People('crianca', duracao))
        }
    }

    var quantia = 0
    for (let pessoa of pessoas) {
        quantia += pessoa.comida
    }


    if(quantia >= 1000){
        resultado.innerHTML = Math.round(quantia/1000) + ' Kg de carne'
    }else{
        resultado.innerHTML = Math.round(quantia) + ' gramas de carne'
    }

    showResult()

}