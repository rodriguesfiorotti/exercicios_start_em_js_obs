import _ from 'lodash';

let frase = "Esta é uma frase de Exemplo"
let fraseKebabCase = _.kebabCase(frase);
console.log(fraseKebabCase);

frase = "Titulo de livro"
fraseKebabCase = _.kebabCase(frase);
console.log(fraseKebabCase);

frase = "Titulo de sei la oque"
fraseKebabCase = _.kebabCase(frase);
console.log(fraseKebabCase);

