/**Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

const a = 10;
const b = 9;
const c = 5;

let par = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  par = true;
};
console.log(par);