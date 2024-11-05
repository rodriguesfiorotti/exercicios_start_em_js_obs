/* const idade = parseFloat(prompt("Qual a sua idade?"))

if (idade > 18) {
    console.log("Você é maior de idade");
} else if (idade >= 12) {
    console.log("Você tem mais que 12 anos")
} else {
    console.log("Você tem menos de 12 anos")
} 

let paisOrigem = prompt("Qual seu país de origem?")

switch(paisOrigem) {
    case "Argentina" :
        alert("Você não é brasileiro")
        break
    case "Espanha" :
        alert("Você é europeu!")
        break
    case "Brasil" :
        alert("Você é Brasileiro")
        break
    default :
        alert("Entrada Inválida")
} 

let opcao = prompt("Escolha uma opção:\n 1. teste\n 2. teste\n 3. sair")

while (opcao !== "3") {
    alert("Você escolheu a opção " + opcao)
    opcao = prompt("Escolha uma opção:\n 1. teste\n 2. teste\n 3. sair")5
}

alert("Você escolheu a opção sair...") */


let numero = parseFloat(prompt("Escolha um número:"))
alert("O número é " + numero)

//parte 1: código executado antes da condição
//parte 2: verificação da condição
//parte 3: código executado após o bloco do for
for (let i = 0; numero > i; i++) {
    alert(`i é igual a: ${i}`)
    if(i === 5) {
        alert("condição atendida!")
        break
    }
}