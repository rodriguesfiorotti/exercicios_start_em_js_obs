// function somaAssincrona (a, b) {
//     return new Promise(function (resolve, reject){
//         const numA = parseFloat(a)
//         const numB = parseFloat(b)

//         if (isNaN(numA) || isNaN(numB)) {
//             reject("Números inválidos")
//         } else {
//             resolve(numA + numB)
//         }
//     })
// }

// A função acima seria o código usando a promise (muito complexo, por isso usamos o async, para simplificar o resultado:)

async function somaAsync(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) || isNaN(numB)) {
        return Promise.reject("Números Inválidos")
    }
    return numA + numB

}

somaAsync(3, 7).then(function (resultado) { // Para cair no erro substitua um número por uma string.
    console.log(resultado)
}).catch(function (motivo) {
    console.log(motivo)
})

console.log("Finalizado")