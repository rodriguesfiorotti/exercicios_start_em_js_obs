import { dobro, somar, subtrair } from "./funcoes.js";

let opcao_calculo = parseInt(prompt("Escolha uma opção: \n\nSomar: Digite 1\nSubtrair: Digite 2\n Descobrir o dobro de um número: Digite 3"));

switch(opcao_calculo) {
    case 1 :
        let sum1 = parseInt(prompt("Informe o primeiro número para o somatório"));
        let sum2 = parseInt(prompt("Informe o segundo número para o somatório"));
        alert(`${sum1} + ${sum2} = ${somar(sum1, sum2)}`);
        break;
    case 2 :
        let subt1 = parseInt(prompt("Informe o primeiro número para a subtração"));
        let subt2 = parseInt(prompt("Informe o segundo número para a subtração"));
        alert(`${subt1} - ${subt2} = ${subtrair(subt1, subt2)}`);
        break;
    case 3 :
        let numero = parseInt(prompt("Informe um número inteiro!"));
        let resultado = dobro(numero);
        alert(`O dobro de ${numero} é ${resultado}`);
        break;
}
