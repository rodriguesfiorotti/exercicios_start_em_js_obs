
function alterarParagrafo () {
    let paragrafo = document.getElementById("meuParagrafo")

    paragrafo.innerText = "Texto alterado com sucesso"
}

document.getElementById("meuBotao").addEventListener("click", alterarParagrafo);