//Funções e Módulos

function subtrair(x, y, nome) {
    console.log(`${x} - ${y} = ${x - y}`)
    console.log(nome)
}


//A ordem de declaração deve ser a mesma declarada na funçao:
subtrair(10, 7, "João Victor");

//Se eu declarasse algo como subtrair("João Victor", 10, 7) as informações não seriam apresentadas corretamente.



//DEFININDO UM VALOR PADRÃO PARA O PARÂMETRO:

//Caso o parâmetro não seja informado, ele recebe um valor padrão.

function somar(x, y, nome = "Sem Nome") {
    console.log(`${x} + ${y} = ${x + y}`)
    console.log(`O nome é ${nome}`)
}

somar(10, 7)


//Retornando valores de funções;

//Para isso usamos a palavra-chave Return.

function multiplicar(x, y) {
    let resultado = x * y
    console.log(`${x} x ${y} = ${resultado}`)
    return resultado
}

let r = multiplicar(10, 5)
console.log(`O resultado foi: ${r}`)


//Para utilizar de funções anônimas é só guardar essa função dentro de uma varável:

let dividir = function (x, y) {
    let r_divisao = x / y
    console.log(`${x} / ${y} = ${r_divisao}`)
    return r_divisao
}

r = dividir(10, 5)

console.log(`O resultado é: ${r}`)
console.log(dividir)