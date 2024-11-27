function toKebabCase(str) {                           // Função que transforma o nome do jogo em kebabCase para ser usado como Id
    return str.split(" ").join("-").toLowerCase()     // Exemplo: Super Mario World    -->   super-mario-world
}

function removerLi(id) {                             // Função para excluir um item da lista
    const liParaRemover = document.getElementById(id) 
    liParaRemover.remove()              
}

function adicionarLi(jogo) {                        // Função para adicionar um item na lista
    const liElement = document.createElement("li")
    liElement.id = toKebabCase(jogo.nome)  //adiciona o id
    liElement.textContent = `Nome: ${jogo.nome} | Ano de Lançamento: ${jogo.ano} | Gênero: ${jogo.genero}` //armazena o texto com o nome, ano e genero do jogo

    document.getElementById("listaDeJogos").appendChild(liElement)  // inclui o elemento li com as devidas informações na lista.

}

const form = document.getElementById("cadastrarJogo");

form.addEventListener("submit", function (evento) {  //quando o evento submit ocorre faz o seguinte:
    evento.preventDefault();          // Impede o funcionamento normal do evento: Atualizar a página a cada submit (fazemos isso para conseguir testar/visualizar o que está acontecendo de forma mais fácil)
    console.log(evento.target.children); 

    const inputNome = document.getElementById("nome");
    const inputAno = document.getElementById("ano");
    const inputGenero = document.getElementById("genero");
    
    const jogo = {}     // cria o objeto jogo.s

    // adicionando valores ao objeto com base no valor digitado no campo:
    jogo.nome = inputNome.value
    jogo.ano = inputAno.value
    jogo.genero = inputGenero.value

    adicionarLi(jogo)     // Chama a função que adiciona o item na lista

    evento.target.reset()    // Limpa todos os inputs do form de uma vez;
})