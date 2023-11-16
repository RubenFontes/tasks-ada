//01 - Utilizando um loop for, calcule a soma dos números de 1 a 10 e imprima o resultado. (1+2=3+3=6+4=10+5=15)

let sum = 0;

for (let i = 1; i <= 10; i++){
    sum += i
}   

console.log(sum)

//02 - Crie um objeto representando uma pessoa com nome, idade e cidade.Utilize um loop for-in para imprimir no console todas as propriedades e os valores do objeto

const person = {
    name: "ruben",
    age: 24,
    city: "João Pessoa"
}

for (prop in person){
    console.log(prop, person[prop])
}

//03- Crie um array com pelo menos 5 nomes de frutas.  Utilize um loop for-of para imprimir no console cada nome de fruta.

const arr = ["orange", "apple", "pear", "grape", "lemon"]

for (fruit of arr){
    console.log(fruit)
}

//04 - Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop for. Saida: N X 1 = 10 

const num = 5

for (let i = 1; i <= 10; i++){
    const res = 5 * i
    console.log(`5 x ${i}: ${res}`)
}

//05 - Crie um objeto com valores numéricos e utilize um loop for-in para calcular e imprimir a soma desses valores.

let numObj = {
    v1: 5,
    v2: 10,
    v3: 15,
    v4: 20
}

let sumObj = 0;

for (let key in numObj) {
    sumObj += numObj[key]
}

console.log(sumObj)

//06 - Faça um mecanismo de busca dentro de um array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function searchElement(element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return `Achei o número ${element}`
        }
    }
    return `${element} não encontrado no array.`
}

console.log(searchElement(7))

