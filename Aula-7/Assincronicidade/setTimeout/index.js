console.log("Script iniciado")
console.log("Iniciando contagem")

setTimeout(function () {                           
    console.log("Executado após 3 segundos")
}, 3 * 1000)

 //com o uso disso, ele continua a ler as linhas abaixo, antes do fim da execução dessa função

console.log("Contagem iniciada")
console.log("O script ainda está em execução")
console.log("Script Finalizado")

// A mensagem deve aparecer após esse ultimo console.log

