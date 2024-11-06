import { dobro } from "./funcoes.js";

let numero = parseInt(prompt("Informe um número inteiro!"));
let resultado = dobro(numero); // Armazena o valor retornado pela função

alert(`O dobro de ${numero} é ${resultado}`);
