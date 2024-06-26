//Classe do herói
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    //Método do tipo de ataque
    tipoHeroi() {
        let ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        return ataque
    }
    //Método que chama tipoHeroi e retorna o resultado
    atacar() {
        let ataque = this.tipoHeroi()
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}
//Dados para definir a classe do héroi
let classeHeroi = new heroi("Herói", 20, "monge")
classeHeroi.atacar()