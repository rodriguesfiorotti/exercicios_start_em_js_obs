// Função que simula um temporizador
function temporizador(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Função assíncrona para executar os alertas com atrasos
  async function executarAlertas() {
    alert("Iniciando os alertas...");
    
    await temporizador(3000); // 3 segundos
    alert("Alerta após 3 segundos!");
    
    await temporizador(5000); // 5 segundos
    alert("Alerta após 5 segundos!");
    
    await temporizador(7000); // 7 segundos
    alert("Alerta após 7 segundos!");
    
    alert("Todos os alertas foram exibidos.");
  }
  
  // Executar a função ao clicar no botão
  document.getElementById("meuBotao").addEventListener("click", executarAlertas);
  