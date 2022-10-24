export default class People {
    constructor(idade, duracao) {
        this.idade = idade
        this.duracao = duracao
        idade == 'adulto' ? this.comida = this.duracao*300 : this.comida = this.duracao * 100
    }

}