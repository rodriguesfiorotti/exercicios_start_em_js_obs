let listaDeNumeros = [];
let opcao;
let nota = [];
let peso = [];
let somaPesos = 0;
let mediaPonderada = 0;



while (opcao !== 3) {
  opcao = parseInt(prompt("Escolha uma opção: \nAdicionar nota e peso (Digite 1) \nCalcular Média Ponderada Atual (Digite 2) \nFinalizar (Digite 3)"));

  if (opcao === 1) {
    let novaNota = parseFloat(prompt("Digite a nota:"));
    let novoPeso = parseFloat(prompt("Digite o peso da nota:"));
    
    nota.push(novaNota);
    peso.push(novoPeso);

    somaPesos += novoPeso;

  } else if (opcao === 2) {
    let produtoNotas = 0;
    
    for (let i = 0; i < nota.length; i++) {
      produtoNotas += (nota[i] * peso[i]);
    }
    
    mediaPonderada = produtoNotas / somaPesos;

    alert(`A média ponderada é ${mediaPonderada.toFixed(2)} pontos`);

  } else if (opcao === 3) {
    alert("Saindo...");

  } else {
    alert("Opção inválida, tente novamente.");

  }
}