let pessoa = "aprovada"

switch (pessoa) {
  case "aprovada":
    console.log("parabens");
    break;
  case "reprovada": 
      console.log("tente novamente");
      break;
  case "lista":
    console.log("aguarde");
    break;
  default:
    console.log("nao se aplica");
}