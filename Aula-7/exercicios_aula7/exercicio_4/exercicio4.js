// Função que simula um temporizador
function temporizador(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função que retorna um número aleatório após 3 segundos
async function retornarNumeroAleatorio() {
  await temporizador(3000); // Aguarda 3 segundos
  return Math.floor(Math.random() * 100); // Retorna um número aleatório entre 0 e 99
}

// Função que recebe a quantidade e retorna um array com números aleatórios
async function gerarArrayAleatorio(quantidade) {
  const numerosAleatorios = [];
  
  for (let i = 0; i < quantidade; i++) {
    const numero = await retornarNumeroAleatorio();
    numerosAleatorios.push(numero);
  }

  return numerosAleatorios;
}

// Função para lidar com o clique do botão
document.getElementById("meuBotao").addEventListener("click", async () => {
  // Definindo a quantidade de números aleatórios (exemplo: 5 números)
  const quantidade = 5;
  
  // Gerando os números aleatórios
  const numeros = await gerarArrayAleatorio(quantidade);

  // Exibindo os números no parágrafo
  document.getElementById("numero").innerText = `Números aleatórios gerados: ${numeros.join(", ")}`;
});
