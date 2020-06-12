const fs = require('fs');

let pessoa = {
    nome: 'wellington',
    sobrenome: 'felix',
    idade: 31
};

fs.writeFileSync('src/assets/files/pessoa.json', JSON.stringify(pessoa));

const arquivo = fs.readFileSync('src/assets/files/pessoa.json');

pessoa = JSON.parse(arquivo.toString());
pessoa.nome = 'palloma';
pessoa.sobrenome = 'miranda';
pessoa.idade = 28;

fs.writeFileSync('src/assets/files/pessoa.json', JSON.stringify(pessoa));

console.log(arquivo.toString());