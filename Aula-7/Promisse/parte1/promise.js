console.log("Iniciado")

const minhaPromise = new Promise(function (resolve, reject) {

    if (true) {
        reject("Promisse rejeitada")
    } else {

        setTimeout(function () {
            console.log('Executando a Promisse...')
            resolve("Promisse resolvida")
        }, 3 * 1000)

    }
})

minhaPromise.then(function (resultado) {
    console.log(resultado)                    // Caso a função seja resolvida  
})

minhaPromise.catch(function (motivo) {
    console.log(motivo)                       // Caso a função caia em reject
})

console.log(minhaPromise)


console.log("Finalizado")