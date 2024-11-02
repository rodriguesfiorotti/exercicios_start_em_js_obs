
    alert("Adivinhe o número! \nEsse é um jogo em que um número inteiro entre 0 e 100 é gerado, e você tenta descobrir o número que foi gerado...")
    alert("ATENÇÃO: Você terá 5 tentativas!")
    alert("Certo! Vamos começar...")
    alert("Gerando o número...")
    let randomInt = Math.floor(Math.random() * 101);
    alert("Numero gerado!")

    for (let i = 0; i < 5 ; i++) {
        let chute = parseInt(prompt(`Tentativa ${i + 1} de 5: \nQual número você acha que foi gerado? resposta: ${randomInt}`))

        if (chute === randomInt) {
            alert("Parabéns!!! Você acertou o número!!!")
            i = parseInt(prompt(`O que quer fazer? \nPara jogar novamente digite 1 \nPara sair do jogo digite 2`))
            if (i === 1) {
                i = -1
                alert("Ok. Vamos gerar um número...")
                randomInt = Math.floor(Math.random() * 101);
                alert("O novo Numero foi gerado!")
                alert("Você tem mais 5 tentativas para acertar o número.")
            } else {
                i = 5
                alert("Fim de jogo!")
            }
        } else {
            if (i < 4) {
                alert("Não, Você tem mais uma tentativa.")
            } else {
                alert(`Que pena... Você não acertou! \nO número correto era ${randomInt}.`)
                i = parseInt(prompt(`O que quer fazer? \nPara jogar novamente digite 1 \nPara sair do jogo digite 2`))
                if (i === 1) {
                    i = -1
                    alert("Ok. Vamos gerar um número...")
                    randomInt = Math.floor(Math.random() * 101);
                    alert("O novo Numero foi gerado!")
                    alert("Você tem mais 5 tentativas para acertar o número.")
                } else {
                    i = 5
                    alert("Fim de jogo!")
                }
            }
        }
    }

    



