class Caracter {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo // guerreiro, mago, monge, ninja
    }

    atacar() {
        let tipoAtaque

        if (this.tipo == "Mago" || this.tipo == "mago") {
            tipoAtaque = "magia"
        } else if (this.tipo == "guerreiro" || this.tipo == "Guerreiro") {
            tipoAtaque = "espada"
        } else if (this.tipo == "monge" || this.tipo == "Monge") {
            tipoAtaque = "artes marciais"
        } else if (this.tipo == "Ninja" || this.tipo == "ninja") {
            tipoAtaque = "shuriken"
        }

        console.log(`o ${this.tipo} atacou usando ${tipoAtaque}`)
    }
}

let player1 = new Caracter("Marquinhos", 22, "Guerreiro")
let player2 = new Caracter("Joaquim", 17, "Ninja")
let player3 = new Caracter("Boáz", 64, "Mago")
let player4 = new Caracter("Metusálem", 72, "Monge")

player1.atacar()
player2.atacar()
player3.atacar()
player4.atacar()