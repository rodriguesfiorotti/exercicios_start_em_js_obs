// Como fiz:

/*let numero = parseInt(prompt("Informe um número inteiro."))
let fatorial = numero

for(let i = 1; i != numero; i++){
    fatorial = fatorial * (numero - i)
}

alert(`O fatorial de ${numero} é ${fatorial}`)*/

//MELHORANDO COM A SOLUÇÃO DO VÍDEO:

let numero = parseInt(prompt("Informe um número inteiro."));
let fatorial = 1; //ele deu um valor de 1 para o fatorial... peguei o mesmo valor de numero, a solução dele é melhor pois já aproveita o incremento da repetição e evita fazer a operação de subtração que eu fazia.

for(let i = 1; i <= numero; i++){
    fatorial *= i  //aqui ele usa o incremento para uma mesma variavel daquela forma resumida, o que é mellhor tbm.
}

alert(`O fatorial de ${numero} é ${fatorial}`);

//observação meu código inicial gerava o mesmo valor.
