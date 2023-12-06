const input = require("readline-sync");

function Contarletras(nome: string){
    return nome.length.toString();
}

let nome: string = input.question("digite o nome:");

nome = Contarletras (nome);
console.log (nome);