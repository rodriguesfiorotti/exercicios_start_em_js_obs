document.getElementById("meuBotao").addEventListener("click", adicionarCarrinho);

function adicionarCarrinho () {
    let paragrafo = document.createElement('p');
    paragrafo.textContent = "Item adicionado com sucesso!"

    let div = document.getElementById('mensagem')

    div.appendChild(paragrafo)

    setTimeout (function () {
        const paragrafos = document.querySelectorAll('p');
        const primeiroParagrafo = paragrafos[0]; 
        primeiroParagrafo.remove();
        console.log('Mensagem Removida!')
    }, 5 * 1000)

}