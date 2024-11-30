document.getElementById("btnAdicionaTarefa").addEventListener("click", function(evento) {
    evento.preventDefault();

    let tituloTarefa = document.getElementById("tituloTarefa").value;

    let liElement = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            liElement.style.textDecoration = "line-through";
        } else {
            liElement.style.textDecoration = "none";
        }
    });

    let buttonElement = document.createElement("button");
    buttonElement.textContent = "Apagar";
    buttonElement.addEventListener("click", function() {
        liElement.remove(); 
    });

    let textoTarefa = document.createTextNode(" " + tituloTarefa);

    liElement.appendChild(checkbox);
    liElement.appendChild(textoTarefa);
    liElement.appendChild(buttonElement);

    document.getElementById("listaTarefas").appendChild(liElement);
    document.getElementById("tituloTarefa").value = ""; 
});
