import {Produto} from './Produto.js';

    export class Classificado extends Produto {
        constructor(nome, preco, categoria){
            super(nome, preco);
            this.categoria = categoria;
        }

        exibir() {
            console.log(`Nome: ${this.nome}\nPreço: R$ ${this.preco}\nCategoria: ${this.categoria}`);
        }

    }