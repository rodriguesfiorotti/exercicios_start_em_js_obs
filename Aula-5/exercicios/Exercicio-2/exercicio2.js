let veiculo = {
    modelo: "Siena",
    passageiros: [],
    limitePassageiros: 4,
    velocidade: 0,
};

let opcao;

while (true) {
    opcao = parseInt(prompt("Escolha uma opção: \n1. Adicionar passageiro\n2. Aumentar velocidade\n3. Diminuir velocidade\n4. Finalizar programa"));

    if (isNaN(opcao) || opcao < 1 || opcao > 4) {
        alert("Opção inválida! Tente novamente.");
        continue;
    }

    if (opcao === 1) {
        if (veiculo.velocidade > 0) {
            alert(`O carro está em movimento (${veiculo.velocidade} Km/h). Só é possível adicionar passageiros com o carro parado.`);
        } else if (veiculo.passageiros.length >= veiculo.limitePassageiros) {
            alert(`O limite de ${veiculo.limitePassageiros} passageiros foi atingido! Passageiros atuais: ${veiculo.passageiros.join(", ")}.`);
        } else {
            let nomePassageiro = prompt("Informe o nome do passageiro:");
            if (nomePassageiro) {
                veiculo.passageiros.push(nomePassageiro.trim());
                alert(`Passageiro adicionado!\nPassageiros atuais: ${veiculo.passageiros.join(", ")} (${veiculo.passageiros.length} no total).`);
            } else {
                alert("Nome inválido! O passageiro não foi adicionado.");
            }
        }
    } else if (opcao === 2) {
        let aumentarVelocidade = parseInt(prompt("Quantos Km/h deseja aumentar?"));
        if (isNaN(aumentarVelocidade) || aumentarVelocidade <= 0) {
            alert("Entrada inválida! Informe um número maior que zero.");
        } else {
            veiculo.velocidade += aumentarVelocidade;
            alert(`Velocidade aumentada! Velocidade atual: ${veiculo.velocidade} Km/h.`);
        }
    } else if (opcao === 3) {
        if (veiculo.velocidade === 0) {
            alert("O carro já está parado! Não é possível diminuir a velocidade.");
        } else {
            let menosVelocidade = parseInt(prompt("Quantos Km/h deseja diminuir?"));
            if (isNaN(menosVelocidade) || menosVelocidade <= 0) {
                alert("Entrada inválida! Informe um número maior que zero.");
            } else {
                veiculo.velocidade = Math.max(0, veiculo.velocidade - menosVelocidade);
                alert(`Velocidade ajustada! Velocidade atual: ${veiculo.velocidade} Km/h.`);
            }
        }
    } else if (opcao === 4) {
        alert("Finalizando... Obrigado por usar o programa!");
        break;
    }
}
