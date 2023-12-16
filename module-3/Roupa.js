import { Produto } from './Produto.js';

export class Roupa extends Produto {
  constructor(nome, preco, tamanho) {
    super(nome, preco, 'Roupa');
    this.tamanho = tamanho;
  }

  getInfo() {
    return `${super.getInfo()} - Tamanho: ${this.tamanho}`;
  }
}
