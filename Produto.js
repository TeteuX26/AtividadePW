export class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibir() {
        console.log(`Nome: ${this.nome}\nPreço: R$ ${this.preco}`);
    }
}