document.getElementById("meuBotao").addEventListener("click", toggleGerarNumeros);

let intervalId;
let gerandoNumeros = false;

function toggleGerarNumeros() {
    let botao = document.getElementById("meuBotao");
    const paragrafoNumero = document.getElementById('numero');

    if (!gerandoNumeros) {
        botao.textContent = 'Parar Geração';
        gerandoNumeros = true;

        intervalId = setInterval(function () {
            const numeroAleatorio = Math.floor(Math.random() * 999999) + 1;
            const numeroFormatado = String(numeroAleatorio).padStart(6, '0');
            paragrafoNumero.textContent = numeroFormatado;
            console.log("Gerou um número: " + numeroFormatado);
        }, 10 * 1000);
        console.log("Iniciando contagem setInterval!");
    } else {
        clearInterval(intervalId);
        paragrafoNumero.textContent = "Intervalo parado!";
        botao.textContent = 'Gerar números';
        gerandoNumeros = false;
        console.log("Parada a geração de números!");
    }
}
