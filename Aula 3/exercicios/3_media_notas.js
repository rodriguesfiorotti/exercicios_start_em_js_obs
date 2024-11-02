let opcao
let total = 0
let i = 0
let media = 0

do {
    opcao = parseFloat(prompt("Informe a nota: \n\n Para Sair digite '-1'"))
    if (opcao !== -1) {
        total = total + opcao
        i++
    }
} while (opcao !== -1)
    
if (i > 0) {
    media = total / i;
    alert(`O total das notas é de ${total} pontos, \n A quantidade de notas calculadas foi de ${i} notas, \n A média das notas é de ${media} pontos!`);
} else {
    alert("Nenhuma nota foi inserida.");
}