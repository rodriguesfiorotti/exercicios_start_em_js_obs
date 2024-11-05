//como fiz:

/*let numero = parseInt(prompt("Escolha um número de 1 a 10."))

for (let i = 0; i <= 10; i++){
    alert(`${numero} x ${i} = ${numero * i}`)
}*/

//Melhorando com a solução do vídeo:

let numero = parseInt(prompt("Escolha um número de 1 a 10."))
let texto = ""

for (let i = 1; i <= 10; i++){
    let resultado = numero * i;
    texto += `${numero} x ${i} = ${resultado}\n`;
}

alert(texto)

//observação meu código inicial gerava o mesmo valor.
