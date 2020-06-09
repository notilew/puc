const _ = require('lodash');

const arr01 = [1, 2, 3, 4, 1, 6];

const arr02 = _.chunk(arr01, 3); // retorna uma novo com uma quantidade de elementos informada
console.log(arr02);

const arr03 = _.difference(arr02[0], arr02[1]) // retorna os elementos diferentes do array da esquerda
console.log(arr03);

console.log(_.indexOf(arr01, 2)); // retorna a posição de um elemento caso ele exista