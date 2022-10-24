/* info
? Adulto: 300g/h
? Criança: 100g/h
*/

class People {
    constructor(idade, duracao) {
        this.idade = idade
        this.duracao = duracao
        idade == 'adulto' ? this.comida = this.duracao * 300 : this.comida = this.duracao * 100
    }

}

//* variáveis

const queryS = document.querySelector.bind(document)
const resultCont = document.querySelector('#resultCont')
const result = document.querySelector('#result')
const calcBTN = queryS("#calcBTN")

ScrollReveal({ distance: '30px', delay: 500, duration: 1000, origin: 'right', reset: false })
ScrollReveal().reveal('.container-img')
ScrollReveal().reveal('.inputs')

calcBTN.addEventListener('click', () => {

    const adults = queryS("#adults").value
    const kids = queryS("#kids").value
    const timeDuration = queryS("#timeDuration").value
    const timeFormat = queryS("#timeFormat").value

    if (timeFormat == 'Minutos') {
        timeDuration = (timeDuration / 60)
    }

    if (adults == '' | kids == '') {
        alert("todos os campos são obrigatórios")
        return
    }

    const totalPeople = parseInt(adults) + parseInt(kids)
    const pessoas = new Array()

    for (let i = 0; i < totalPeople; i++) {
        if (i < adults) {
            pessoas.push(new People('adulto', timeDuration))
        } else {
            pessoas.push(new People('crianca', timeDuration))
        }
    }

    var quantia = 0
    for (let pessoa of pessoas) {
        quantia += pessoa.comida
    }

    if (quantia >= 1000) {
        result.innerHTML = Math.round(quantia / 1000) + ' Kg de carne'
    } else {
        result.innerHTML = Math.round(quantia) + ' gramas de carne'
    }

    resultCont.classList.remove('hidden')
    result.classList.remove('hidden')
})
