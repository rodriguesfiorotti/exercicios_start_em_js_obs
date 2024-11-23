let listaNotasPesos = [];
let opcao
let somaPesos = 0;
let mediaPonderada = 0;

function validarNota() {
  let nota;

  do {
    nota = parseFloat(prompt("Digite a nota (0 a 10):"));
    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert("Nota inválida! Tente novamente (0 a 10).");
    }
  } while (isNaN(nota) || nota < 0 || nota > 10);

  return nota;
}

function validarPeso() {
  let peso;

  do {
    peso = parseFloat(prompt("Digite o peso da nota (maior que 0):"));
    if (isNaN(peso) || peso <= 0) {
      alert("Peso inválido! Tente novamente (maior que 0).");
    }
  } while (isNaN(peso) || peso <= 0);

  return peso;
}

function calcularMediaPonderada(lista, somaPesos) {
  let produtoNotas = 0;
  
  for (let item of lista) {
    produtoNotas += (item.nota * item.peso);
  }
  
  if (somaPesos === 0) {
    alert("Não é possível calcular a média ponderada. A soma dos pesos é 0.");
    return;
  }

  mediaPonderada = produtoNotas / somaPesos;
  alert(`A média ponderada é ${mediaPonderada.toFixed(2)} pontos`);
}

while (opcao !== 3) {
  opcao = parseInt(prompt("Escolha uma opção: \nAdicionar nota e peso (Digite 1) \nCalcular Média Ponderada Atual (Digite 2) \nFinalizar (Digite 3)"));

  if (isNaN(opcao) || opcao < 1 || opcao > 3) {
    alert("Opção inválida! Tente novamente.");
    continue;
  }

  if (opcao === 1) {
    let novaNota = validarNota();
    let novoPeso = validarPeso();

    listaNotasPesos.push({ 
      nota: novaNota,
      peso: novoPeso 
    });

    somaPesos += novoPeso;

  } else if (opcao === 2) {
    if (listaNotasPesos.length === 0) {
      alert("Nenhuma nota e peso adicionados ainda!");
    } else {
      calcularMediaPonderada(listaNotasPesos, somaPesos);
    }

  } else if (opcao === 3) {
    alert("Saindo... Obrigado por usar o programa!");

  } else {
    alert("Opção inválida, tente novamente.");
  }
}
