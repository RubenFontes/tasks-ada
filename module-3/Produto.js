export class Produto {
    static id = 1;
    nome;
    preco;
    categoria;
  
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
      this.id = Produto.id++;
    }
  
    getInfo() {
      return `ID Produto: ${this.id} - Nome: ${this.nome} - Preço: R$ ${this.preco.toFixed(2)} - Categoria: ${this.categoria}`;
    }
  }
  