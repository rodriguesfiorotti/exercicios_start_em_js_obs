let listaDeFrutas = ["Maçã", "Laranja", "Uva"];           // Declaração de uma Array : variavel = [a, b, c].

console.log(listaDeFrutas[0]);                            // Exibindo o valor da posição zero do array lista de frutas. No caso será a string "Maçã".

console.log(listaDeFrutas);                               // Exibindo a lista completa.

listaDeFrutas[1] = "Banana"                               // Alterando o valor da posição 1 "Laranja" para "Banana".

console.log(listaDeFrutas);                               // Exibindo a alteração dos valores na lista completa.



// MÉTODOS DE ARRAYS:
console.log("MÉTODOS DE ARRAYS PRINCIPAIS:");

listaDeFrutas.push("Abacaxi")                             // PUSH: Adiciona objetos no final do Array.
console.log(listaDeFrutas);

listaDeFrutas.pop()                                       // POP: Remove o úlitmo elemento do Array.
console.log(listaDeFrutas);

listaDeFrutas.shift();                                    // SHIFT: Remove o primeiro elemento do Array.
console.log(listaDeFrutas);

listaDeFrutas.unshift("Laranja")                          // UNSHIFT: Adiciona elementos no começo do Array.
console.log(listaDeFrutas);



console.log("OUTROS MÉTODOS:");

let listaMista = [4, 9, 10, 3, false, true, "5"];        // No JS as listas podem conter dados de todos os tipos misturados como nesse exemplo. 
console.log(listaMista);

let NovoArray = listaDeFrutas.concat(listaMista);        // CONCAT: Combina dois ou mais arrays em um único array.
console.log(NovoArray);                                  // Exibindo o novo array que contém tanto os valores do array ListaDeFrutas quanto os do Array ListaMista.

console.log(listaDeFrutas);                             // Note que o array listaDeFrutas permanece inalterado, seguindo a ideia de imutabilidade do JavaScript   

let listaEmTexto = NovoArray.join();                     // JOIN: Junta os elementos em uma única string.
console.log(listaEmTexto);                               // Exibe a lista separada por vírgulas em uma unica string ficando "a,b,c,d,e"

listaEmTexto = NovoArray.join(";");                      // Para separar os valores em ponto e vírgula ao invés de vírgula ficando: "a;b;c;d;e"
console.log(listaEmTexto);

listaEmTexto = NovoArray.join("; ");                     // Para separar os valores em ponto e vírgula e espaço ao invés de somente ponto e vírgula ficando: "a; b; c; d; e" 
console.log(listaEmTexto);

listaEmTexto = NovoArray.join(" e também ");             // Para separar os valores em ponto e vírgula e espaço ao invés de somente ponto e vírgula ficando: "a; b; c; d; e" 
console.log(listaEmTexto);

// SPLIT: Retorna o valor de uma string em array

let parteDaLista = listaEmTexto.split();                         // Se não passarmos parâmetros ele retorna a string inteira (exatamente como foi passada) em um único item.
console.log(parteDaLista);

parteDaLista = listaEmTexto.split("");                           // Se informarmos uma string vazia, ele retorna cada caracter da string separada como um item da Array.
console.log(parteDaLista);

parteDaLista = listaEmTexto.split(" e ");                        // Dessa forma, em todos os lugares que ele encontrar "espaço e espaço" ele vai separar em um item da array.
console.log(parteDaLista);


parteDaLista = listaEmTexto.split(" e também ");                        // Ao passarmos o mesmo parâmetro, ele voltará a separar os itens como estavam no "NovoArray" porém agora todos os itens estão como string
console.log(parteDaLista);

// Vamos voltar a utilizar um outro array simples para seguir com a explicação dos métodos...

let frutas = ["Amora", "Blueberry", "Caju", "Damasco", "Elderberry"]
let duasPrimeiras = frutas.slice(0, 1)                        // SLICE: Retorna uma cópia de um pedaço do array.
console.log(duasPrimeiras);
// Vale dizer que nesses parâmetros o primeiro número indica em qual posição ele irá começar a trazer os valores, e o último indica em qual posição ele irá parar de trazer os valores, sendo que o item dessa posição não será listado no array. No exemplo acima ele listaria somente o item "Maçã"

//Então para listar as 2 primeiras frutas da lista, devemos passar o valor 2 como o último:
duasPrimeiras = frutas.slice(0, 2)                        // SLICE: Retorna uma cópia de um pedaço do array.
console.log(duasPrimeiras);



// Usando o splice 

// ATENÇÃO: O splice realmente modifica o array!!!

frutas.splice(2);                                        // SPLICE: se passarmos somente 1 parâmetro, ele excluirá todos os elementos do array a partir daquela posição, incluindo o elemento na posição 2.
console.log(frutas);

// Caso queira excluir uma parte específica desse array:
//Caso quiséssemos excluir somente O "Caju" e o "Damasco"
frutas = ["Amora", "Blueberry", "Caju", "Damasco", "Elderberry"]
frutas.splice(2, 2)                                     // Agora nós passamos os seguintes parâmetros:
// Primeiro Parâmetro: Onde inicia a exclusão.
// Segundo Parâmetro: Quantos elementos serão excluídos no total (2 elementos).
console.log(frutas);


frutas = ["Amora", "Blueberry", "Caju", "Damasco", "Elderberry"]
frutas.splice(2, 2, "Limão")
// Primeiro Parâmetro: Onde inicia a exclusão.
// Segundo Parâmetro: Quantos elementos serão excluídos no total (2 elementos).
// Terceiro Parâmetro: Incluíndo um valor na posição em que foi removido.
console.log(frutas);



console.log("MÉTODOS AVANÇADOS:");

let numeros = [3, 7, 10, 2, 45, 12]

// DECLARANDO A FUNÇÃO DENTRO DO PARÂMETRO
// numeros.forEach(function (elementoAtual, indiceAtual, arrayCompleto) {
//     console.log(`O elemento no índice ${indiceAtual} é ${elementoAtual}`)
// })


// DECLARANDO FORA:

function mostrarElementos (elementoAtual, indiceAtual, arrayCompleto) {
    console.log(`O elemento no índice ${indiceAtual} é ${elementoAtual}`)
}

numeros.forEach(mostrarElementos);

// primeiro parâmetro: valor do elemento
// segundo parâmetro: indice
// terceiro parâmetro: array completo

// Se fosse feito pelo laço de repetição:
// for (let i = 0; i < numeros.length; i++) {
//     console.log(`O elemento no índice ${i} é ${numeros[i]}`)
// }

// USANDO O MAP:

// O map faz basicamente a mesma coisa que o foreach, porém, com a diferença que ele consegue retornar o valor para uma variavel:

const numeros2 = [2, 4, 6, 8, 5, 3]

let dobro = numeros2.map(function (elementoAtual2, indiceAtual2, arrayCompleto2) {
    console.log(`índice: ${indiceAtual2} | Valor: ${elementoAtual2}`)
    return elementoAtual2 * 2
})

console.log(dobro)


console.log("ULTIMOS MÉTODOS DESSA AULA:")

// FILTER:

// Nesse método, todos os itens que seja verdadeiro da condição será adicionado

let ArrayParaFiltrar = [3, 2, 7, 8, 16, 5, 2, 3]

let pares = ArrayParaFiltrar.filter(function (elementoAtual3) {
    return elementoAtual3 % 2 === 0
})

let impares = ArrayParaFiltrar.filter(function (elementoAtual3) {
    return elementoAtual3 % 2 !== 0
})

console.log(ArrayParaFiltrar, pares, impares)

pessoasArray = [
    { id: 100, nome: "Isaac", idade: 28 },
    { id: 101, nome: "Lucas", idade: 20 },
    { id: 102, nome: "Juliana", idade: 30 },
    { id: 103, nome: "Guilherme", idade: 28 },
    { id: 104, nome: "Leonardo", idade: 30 }
]

let idadeMaxima = parseFloat(prompt("Escolha uma idade máxima:"))

const pessoasDentroDoLimite = pessoasArray.filter(function (pessoasArray){
    return pessoasArray.idade <= idadeMaxima
})

console.log(pessoasDentroDoLimite)


// USANDO O FIND:

// Nesse método, somente o primeiro item que seja verdadeiro da condição será adicionado

let nomePesquisado = prompt("Pesquisar por nome:")
const pessoasEncontradas = pessoasArray.find(function (pessoasArray){
    return pessoasArray.nome === nomePesquisado
})

console.log(pessoasEncontradas)
