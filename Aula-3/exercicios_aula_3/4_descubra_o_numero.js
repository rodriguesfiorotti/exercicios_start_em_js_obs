    /*let escolha = parseInt(prompt("Existem 2 versões desse jogo qual quer jogar? \n 1. Minha Versão Inicial (Digite 1)\n 2. Versão da solução do Vídeo (Digite 2)"))

    switch(escolha) {
        case 1 :
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
                        i = 5 //olhando a solução percebi que poderia utilizar o break aqui
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
                            i = 5  //olhando a solução percebi que poderia utilizar o break aqui
                            alert("Fim de jogo!")
                        }
                    }
                }
            }
        break
        case 2 :*/

            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

            const maxTentativas = 10
            let tentativas = 0

            for (tentativas = 1; tentativas <= maxTentativas; tentativas++) {
                let palpite = parseInt(prompt(`Tentativa ${tentativas}/${maxTentativas}. Adivinhe o número (entre 1 e 100):`));

                if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                    alert("Por favor, insira um número válido entre 1 e 100.");
                    tentativas--;
                }
                else if (palpite === numeroAleatorio) {
                    alert(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
                    break;
                }
                else if (palpite < numeroAleatorio) {
                    alert("Tente um número maior");
                }
                else if (palpite > numeroAleatorio) {
                    alert("Tente um número menor");
                }
            }

            if (tentativas > maxTentativas) {
                alert(`Suas ${maxTentativas} tentativas acabaram. O número era ${numeroAleatorio}.`)
            }

            //É... Essa solução é realmente muito melhor...
            /*   break
     default :
            alert("Essa não é uma opção, caso queira jogar o jogo, clique novamente no botão")
    }*/