//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:Porcentagem >= 90 -> A.Porcentagem >= 80 -> B.Porcentagem >= 70 -> C.Porcentagem >= 60 -> D.Porcentagem >= 50 -> E.Porcentagem < 50 -> F.O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let score = 93;

if (score < 0 || score > 100) {
  console.log("Error, invalid score")
} else if (score >= 90) {
  console.log("Grade -> A")
} else if (score >= 80) {
  console.log("Grade -> B")
} else if (score >= 70) {
  console.log("Grade -> C")
} else if (score >= 60) {
  console.log("Grade -> D")
} else if (score >= 50) {
  console.log("Grade -> E")
} else {
  console.log("Grade -> F")
}