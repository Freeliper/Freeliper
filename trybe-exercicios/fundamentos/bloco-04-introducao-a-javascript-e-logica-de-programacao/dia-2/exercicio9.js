/**
 * Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 */

let numbers = [];

for (let i = 1; i < 26; i++) {
  numbers.push(i)
}
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  let resultadoDaDivisao = numbers[i] / 2;
  console.log(resultadoDaDivisao)
}



