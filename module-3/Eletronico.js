import { Produto } from './Produto.js';

export class Eletronico extends Produto {
  constructor(nome, preco, marca) {
    super(nome, preco, 'Eletrônico');
    this.marca = marca;
  }

  getInfo() {
    return `${super.getInfo()} - Marca: ${this.marca}`;
  }
}
