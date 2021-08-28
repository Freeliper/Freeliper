//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = 'bispo';

switch(chessPiece) {
  case 'bispo': console.log('bispo -> Diagonal');
    break;
  case 'rainha': console.log('rainha -> Diagonal, Lados');
    break;
  case 'cavalo': console.log('cavalo -> L');
    break;
  case 'torre': console.log('torre -> lados');
    break;
  case 'rei': console.log('rei -> uma casa para qualquer direcao');
    break;
  case 'peao': console.log('peao -> uma casa para frente e come uma casa na diagonal');
    break;
  default: 
    console.log('erro, nao é uma peca de xadrex');
}