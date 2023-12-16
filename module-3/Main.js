import { Eletronico } from './Eletronico.js';
import { Roupa } from './Roupa.js';
import { Carrinho } from './Carrinho.js';

const eletronico1 = new Eletronico('Smartphone', 1500.0, 'Samsung');
const roupa1 = new Roupa('Camiseta', 29.9, 'M');

const eletronicoEdit = new Eletronico('Smartphone', 1200.0, 'Apple');
eletronicoEdit.id = 1;

Carrinho.adicionarProduto(eletronico1);
Carrinho.adicionarProduto(roupa1);
console.log(Carrinho.produtos);

Carrinho.deletarProduto(1);
console.log(Carrinho.produtos);
