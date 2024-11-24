let produtos = [];
let opcao;

function gerarListaProdutos(produtos) {
    let lista = "Estoque Atual:\n";
    produtos.forEach((item, index) => {
        lista += `${index + 1}. ${item.nome}: ${item.quantidade}\n`;
    });
    return lista;
}

while (true) {
    opcao = parseInt(prompt("Escolha uma opção: \n1. Cadastrar Produto\n2. Listar itens cadastrados\n3. Alterar Quantidade\n4. Excluir Produto\n5. Finalizar Programa"));

    if (isNaN(opcao) || opcao < 1 || opcao > 5) {
        alert("Opção inválida! Tente novamente.");
        continue;
    };

    if (opcao === 1) {
        let nomeProduto;
        let quantidadeProduto;


        do {
            nomeProduto = prompt("Informe a descrição do Produto:").trim();
            if (nomeProduto === "") {
              alert("É preciso informar pelo menos 1 caractere válido para a descrição!");
            }
          } while (nomeProduto === "");

        do {
        quantidadeProduto = parseFloat(prompt("Informe a quantidade do Produto:"));
        if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
            alert("Quantidade inválida!");
            }
        } while (isNaN(quantidadeProduto) || quantidadeProduto <= 0);

        produtos.push({
            nome: nomeProduto,
            quantidade: quantidadeProduto
        });

        alert("O produto foi cadastrado com sucesso!");

    } else if (opcao === 2) {
        if (produtos.length === 0) {
            alert("Nenhum produto cadastrado ainda!");

          } else {
            alert(gerarListaProdutos(produtos));
        }
    } else if (opcao === 3) {
        

        if (produtos.length === 0) {
            alert("Nenhum produto cadastrado ainda!");
        } else {
            let indiceProduto;
            let listaProdutos;

            listaProdutos = gerarListaProdutos(produtos);

            do {
                indiceProduto = parseInt(prompt(`Digite o número referente ao produto que deseja editar:\n${listaProdutos}`), 10) - 1;

                if (indiceProduto >= 0 && indiceProduto < produtos.length) {

                    do {
                        let novaQuantidadeProduto = parseFloat(
                            prompt(`Produto Selecionado: ${produtos[indiceProduto].nome}.\nQuantidade atual: ${produtos[indiceProduto].quantidade}\nInforme a nova quantidade:`)
                        );

                        if (!isNaN(novaQuantidadeProduto) && novaQuantidadeProduto >= 0) {
                            produtos[indiceProduto].quantidade = novaQuantidadeProduto;
                            alert("Quantidade atualizada com sucesso!");
                            break; 
                        } else {
                            alert("Quantidade inválida! Informe uma quantidade válida.");
                        }
                        
                    } while (true);
                    break;

                } else {
                    alert("Índice inválido! Tente novamente.");
                }
            } while (true);

        }

    } else if (opcao === 4) {
        if (produtos.length === 0) {
            alert("Nenhum produto cadastrado ainda!");

        } else {
            let indiceProduto;
            let listaProdutos;
            let novaQuantidadeProduto;

            listaProdutos = gerarListaProdutos(produtos);

            do {
                indiceProduto = parseInt(prompt(`Digite o número referente ao produto que deseja excluir:\n${listaProdutos}`), 10) - 1;
                if (indiceProduto >= 0 && indiceProduto < produtos.length) {
                    alert(`O produto "${produtos[indiceProduto].nome}" com ${produtos[indiceProduto].quantidade} unidades foi excluído com sucesso!`);
                    produtos.splice(indiceProduto, 1);
                    break;
                } else {
                    alert("Informe um índice válido.");
                }
            } while (true);
        }
     } else if (opcao === 5) {
        alert("Finalizando... Obrigado por usar o programa!");
        break;
    }
    
};