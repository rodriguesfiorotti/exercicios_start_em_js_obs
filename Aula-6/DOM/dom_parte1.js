
// Utilizando de maneira bem simples

const titulo = document.getElementById("titulo");

titulo.addEventListener("click", function () {
    alert("Você clicou no título!");""
})

// Utilizando o QuerySelector:

let exemploQueryAll = document.querySelectorAll("h2.subtitulo"); //Retorna sempre uma "Lista" de todos os elementos encontrados

console.log(exemploQueryAll);

// Caso não queira uma lista, podemos usar somente o querySelector

let exemploQuery = document.querySelector("h2.subtitulo"); //Retorna apenas o primeiro elemento encontrado (mesmo que aja mais que um no documento)

console.log(exemploQuery);


// Começando a manipular o DOM:

const manipulado = document.getElementById("manipulacao");

console.log(manipulado);

manipulado.addEventListener("click", function () {
    //manipulado.innerHTML = "Olá, mundo <em>Estamos usando o DOM</em>"      // Usando o InnerHTML para adicionar conteúdo html literalmente no arquivo. Observação: Não é muito indicado quando for manipular somente o texto.

    manipulado.innerText = "Olá mundo! <em>Estamos usando o DOM</em>"        // Usando o innerText, ele não compreende as tags html, alterando somente o texto.

    console.log(manipulado.getAttribute("id"));                              // Utilizando o getAttribute para buscar o atributo id.

    manipulado.setAttribute("id", "id-alterado");                            // Utilizando o setAttribute para alterar o atributo id.
    console.log(manipulado.getAttribute("id"));  

    manipulado.setAttribute("class", "bg-blue");                            // Utilizando o setAttribute para alterar o atributo classe, que quando assume essa classe muda a cor de fundo por causa do CSS.
})


const exemplo = document.getElementById("exemplo");

    exemplo.addEventListener("click", function () {
       // exemplo.classList.remove("bg-blue");                              // Remove o fundo azul do titulo que já vem com o fundo azul

       exemplo.classList.toggle("bg-blue");                                 // Adiciona se for diferente e remove se for igual (liga e desliga)
    })

