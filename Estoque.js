import { Classificado } from './Classificado.js';

export class Estoque extends Classificado {
    constructor(nome, preco, categoria, quantidade){
        super(nome, preco, categoria);
        this.quantidade = quantidade;
    }
    exibir(){
    console.log(`Nome: ${this.nome}\nPreço: R$ ${this.preco}\nCategoria: ${this.categoria}\nQuantidade: ${this.quantidade}`);
    }
}