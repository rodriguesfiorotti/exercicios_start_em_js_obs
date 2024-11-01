let numero = parseInt(prompt("Informe um número inteiro."))
let fatorial = numero

for(let i = 1; i != numero; i++){
    fatorial = fatorial * (numero - i)
}

alert(`O fatorial de ${numero} é ${fatorial}`)