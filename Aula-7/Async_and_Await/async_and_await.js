

async function somaAsync(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) || isNaN(numB)) {
        return Promise.reject("Números Inválidos")
    }
    return numA + numB
}

async function executar() {
    try {
        const resultado = await somaAsync(3, 7)
        console.log(resultado)
    } catch (erro) {
        console.log(erro)
    }
    
}

executar()