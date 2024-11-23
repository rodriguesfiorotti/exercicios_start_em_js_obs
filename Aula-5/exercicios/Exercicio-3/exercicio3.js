let produtos = [];
let opcao;

while (true) {
    opcao = parseInt(prompt("Escolha uma opção: \n1. Cadastrar Produto\n2. Listar itens cadastrados\n3. Alterar Quantidade\n4. Excluir Produto\n5. Finalizar Programa"));

    if (isNaN(opcao) || opcao < 1 || opcao > 5) {
        alert("Opção inválida! Tente novamente.");
        continue;
    };

    if (opcao === 1) {
        let nomeProduto;
        let quantidadeProduto;

        nomeProduto = prompt("Informe a descrição do Produto:");
        quantidadeProduto = parseFloat(prompt("Informe a quantidade do Produto"));

        produtos.push({
            nome: nomeProduto,
            quantidade: quantidadeProduto
        });

        alert("O produto foi cadastrado com sucesso!");

    } else if (opcao === 2) {
        if (produtos.length === 0) {
            alert("Nenhum produto cadastrado ainda!");

          } else {
            let relatorio;
            relatorio = "Relatório de Estoque:\n";
       
             for (let item of produtos) {
            relatorio += `${item.nome}: ${item.quantidade}\n`;
            };

             alert (relatorio);
        }
    } else if (opcao === 3) {
        let indiceProduto;
        let listaProdutos;
        let novaQuantidadeProduto;

        listaProdutos = "Estoque Atual:\n";
       
        for (let [index, item] of produtos.entries()) {
            listaProdutos += `${index + 1}. ${item.nome}: ${item.quantidade}\n`;
          };

          do {
            indiceProduto = parseInt(prompt(`Digite o número referente ao produto que deseja editar:\n${listaProdutos}`)) - 1;

            // Verifica se o índice é válido
            if (indiceProduto >= 0 && indiceProduto < produtos.length) {
                let novaQuantidadeProduto = parseFloat(
                    prompt(`Produto Selecionado: ${produtos[indiceProduto].nome}.\nQuantidade atual: ${produtos[indiceProduto].quantidade}\nInsira a nova quantidade:`)
                );

                // Atualiza a quantidade do produto
                if (!isNaN(novaQuantidadeProduto) && novaQuantidadeProduto >= 0) {
                    produtos[indiceProduto].quantidade = novaQuantidadeProduto;
                    alert("Quantidade atualizada com sucesso!");
                } else {
                    alert("Quantidade inválida! A operação foi cancelada.");
                }
                break; // Sai do loop após atualizar a quantidade
            } else {
                alert("Índice inválido! Tente novamente.");
            }
        } while (true);


    } else if (opcao === 4) {
        if (produtos.length === 0) {
            alert("Nenhum produto cadastrado ainda!");

        } else {
            let indiceProduto;
            let listaProdutos;
            let novaQuantidadeProduto;

            listaProdutos = "Estoque Atual:\n";
        
            for (let [index, item] of produtos.entries()) {
                listaProdutos += `${index + 1}. ${item.nome}: ${item.quantidade}\n`;
            };

            do {
                indiceProduto = parseInt(prompt(`Digite o número referente ao produto que deseja excluir:\n${listaProdutos}`)) - 1;

                // Verifica se o índice é válido
                if (indiceProduto >= 0 && indiceProduto < produtos.length) {
                    produtos.splice(indiceProduto, 1)
                    alert("Produto Excluído!")
                    break
                }
            } while (true);
        }
     } else if (opcao === 5) {
        alert("Finalizando... Obrigado por usar o programa!");
        break;
    }
    
};