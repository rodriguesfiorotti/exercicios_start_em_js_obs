document.getElementById("adicionarFilmeBtn").addEventListener("click", function (evento) {
    evento.preventDefault();
    let nomeFilme = document.getElementById("nomeFilme").value;
    let liElement = document.createElement("li");
    liElement.textContent = nomeFilme
    document.getElementById("listaFilmes").appendChild(liElement);
    document.getElementById("nomeFilme").value = "";
})