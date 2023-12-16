export class Carrinho {
    static produtos = [];
  
    static adicionarProduto(produto) {
      Carrinho.produtos.push(produto);
    }
  
    static deletarProduto(idProduto) {
      Carrinho.produtos = Carrinho.produtos.filter(produto => produto.id !== idProduto);
    }
  
    static atualizarProduto(novoProduto) {
      const index = Carrinho.produtos.findIndex(produto => produto.id === novoProduto.id);
      if (index !== -1) {
        Carrinho.produtos[index] = novoProduto;
      }
    }
  }
  