function somaAssincrona (a, b) {
        return new Promise(function (resolve, reject){
            const numA = parseFloat(a)
            const numB = parseFloat(b)

            if (isNaN(numA) || isNaN(numB)) {
                reject("Números inválidos")
            } else {
                resolve(numA + numB)
            }
        })
}


somaAssincrona(3, 9).then(function (resultado) {  
// Caso queira ver o resultado = reject, basta substituirm um desses números (3 ou o 9) por uma string

        console.log(resultado)
    }).catch(function (motivo) {
        console.log(motivo)
    }).finally(function () {
        console.log("Promise finalizada") 
    
    // .then = caso dê certo;
    // .catch = caso erro;
    // .finally = quando terminar de executar a promise.
})

console.log("Finalizado")