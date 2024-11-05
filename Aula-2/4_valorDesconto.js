let valor_produto = parseFloat(prompt("Qual o valor do produto?"));
let porcentagem_desconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
let valor_desconto = valor_produto * porcentagem_desconto / 100;

alert(`O valor de desconto será de ${valor_desconto} reais \n\n Será pago no produto ${valor_produto - valor_desconto} reais`);