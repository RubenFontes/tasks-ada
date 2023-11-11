//01 - Verificação de Números Pares e Ímpares (If e Ternário)
let numero = 7;
let resultado = (numero % 2 === 0) ? "É par" : "É ímpar";
console.log(resultado);


//02 - Verificação de Nota
let nota = 85;
let mensagem = (nota >= 90) ? "Aprovado com mérito" : (nota >= 70) ? "Aprovado" : "Reprovado";
console.log(mensagem);

//03 - Determinação do Maior Número
let num1 = 15;
let num2 = 30;
let num3 = 20;

let maiorNumero = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
console.log("O maior número é: " + maiorNumero);


//04 - Verificação de Triângulo
let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

let tipoTriangulo = (lado1 === lado2 && lado2 === lado3) ? "Triângulo Equilátero" : (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) ? "Triângulo Isósceles" : "Triângulo Escaleno";
console.log(tipoTriangulo);


//05 - Verificação de Ano Bissexto
let ano = 2000;
let resultadoBissexto = ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) ? "Ano bissexto" : "Não é um ano bissexto";
console.log(resultadoBissexto);


//06 - Verificação de Idade para Compra de Bebida Alcoólica (If e Ternário)
let idade = 20;
let msg = (idade >= 18) ? "Pode comprar bebidas alcoólicas" : "Não pode comprar bebidas alcoólicas";
console.log(msg);

//08 - Verificação de Números Pares e Ímpares
let num = 4;
let res = (num % 2 === 0) ? "É par" : "É ímpar";
console.log(res);


//09 - Conversão de Notas em Conceitos
let letra = 'a';
let conceito = (['a', 'e', 'i', 'o', 'u'].includes(letra.toLowerCase())) ? "É uma vogal" : "É uma consoante";
console.log(conceito);


//10 - Determinação de Estação do Ano
let mes = "Janeiro";
let estacao = (mes === "Dezembro" || mes === "Janeiro" || mes === "Fevereiro") ? "Inverno" :
              (mes === "Março" || mes === "Abril" || mes === "Maio") ? "Primavera" :
              (mes === "Junho" || mes === "Julho" || mes === "Agosto") ? "Verão" :
              (mes === "Setembro" || mes === "Outubro" || mes === "Novembro") ? "Outono" :
              "Mês inválido";
console.log(estacao);
