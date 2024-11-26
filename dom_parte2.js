function toKebabCase(str) {                                                                     // Função que transforma o nome do jogo em kebabCase para ser usado como Id
    return str.split(" ").join("-").toLowerCase()                                               // Exemplo: Super Mario World    -->   super-mario-world
}

function removerLi(id) {
    const liParaRemover = document.getElementById(id)                                           // Função para excluir um item da lista
    liParaRemover.remove()              
}

function adicionarLi() {
    const jogo = prompt("Insira o nome do jogo que deseja adicionar a lista:")                  // Função para Adicionar um jogo a lista (ela também cria um botão que consegue excluir o item depois)

    const liElement = document.createElement("li")    
    liElement.innerText = jogo
    liElement.id = toKebabCase(jogo)                                                           // Adicionando o id no formato kebabCase

    const btnRemover = document.createElement("button")                                        // Criando o botão de excluir
    btnRemover.innerText = "Remover Jogo"
    btnRemover.addEventListener("click", function () {
        removerLi(liElement.id);
    })

    liElement.appendChild(btnRemover)                                                          
           
    const ulElement = document.getElementById("listaDeJogos")
    ulElement.appendChild(liElement)     
}

document.getElementById("adicionarJogo").addEventListener("click", adicionarLi)                 // Repare que nesse caso não foi utilizado os parenteses na frente do nome da função, isso ocorre pois queremos adicionar o valor da função e não executá-la!!!