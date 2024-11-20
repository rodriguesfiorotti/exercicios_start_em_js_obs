
// Criada a variável do Objeto:
let pessoa = {

    // declarando valores/propriedades do objeto:
    idade: 28,
    nome: "Isaac",

    // declarando objetos dentro de objetos:
    endereco: { rua: "Rua Tal", numero: "14"}
}

console.log(pessoa.nome);           //exibe o valor da propriedade nome do objeto pessoa: "Isaac".
console.log(pessoa.endereco);       //exibe o valor da propriedade endereço do objeto pessoa: "{rua: "Rua Tal", numero: "14" }".
console.log(pessoa.endereco.rua);   //exibe o valor da propriedade rua do objeto endereço, que está dentro do objeto pessoa: "Rua Tal".

// Manipulando o objeto:
pessoa.nome = "Lucas";  //alteramos o valor da propriedade nome.

// Exibindo que o novo valor em nome foi aplicado sem alterar os demais valores:
console.log(pessoa);

// Incliuindo propriedades no objeto:
pessoa.telefone = "11223344559";
console.log(pessoa);  // Veremos que foi incluída a propriedade de telefone no objeto pessoa que antes não existia.

// Ainda é posível adicionar funções dentro dessas propriedades:
pessoa.ola = function () {
    alert("Olá, Mundo!")
}

console.log(pessoa);
pessoa.ola();  // chama a função.

// O legal de declarar funções dentro dos objetos é que ele terá acesso as outras propriedades do objeto.
pessoa.ola = function () {
    alert(`Olá, Mundo! Aqui é o ${this.nome}!`); // utilizamos o this para referenciar algo dentro do próprio objeto.
}

pessoa.ola();

pessoa.nome = "Leonardo";
pessoa.ola();

// Com isso podemos fazer coisas de forma mais simples como:

let calculadora = {
    x: 5,
    y: 9,
    somar: function () {
        alert(this.x + this.y)
    }
}

calculadora.somar();
calculadora.x = 50;  // Alterando o valor de x
calculadora.somar();