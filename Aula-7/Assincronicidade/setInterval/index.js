console.log("Script iniciado")

let contador = 1

const intervalId = setInterval(function () {                           
    console.log((contador === 1 ? `Executado ${contador} vez após 2 segundos` : `Executado ${contador} vezes após 2 segundos`))  // Operador Ternário (condição ? valor caso verdadeiro : valor caso falso)

    contador++
    if (contador >= 6) {
        clearInterval(intervalId)                       // Quando a condição for atendida (no caso a função rodar 6 vezes) ele para a repetição
        console.log("setInterval Finalizado")
    }
}, 2 * 1000)                                            // Tempo em miissegundos (2 * 1000 = 2 segundos)

console.log("Script Finalizado")

// No caso existe ainda o clearTimeout, que pode ser usado para interromper abruptamente o setInterval,
// um exemplo de uso é quando temos um pop-up que diz "Você se inscreveu corretamente" e que vai ficar 
// por um tempo de 5 segundos na tela, porém caso o usuário precione o "x" ele poderia chamar esse clearTimeout
// para que a função fosse interrompida antes do tempo previsto na função.