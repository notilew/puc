/**
 * criar uma função que recebe um parâmetro
 * caso não exista, criar um arquivo chamado log.txt e adicionar o conteúdo enviado por parâmetro
 * caso exista, adicionar o conteúdo enviado por parâmetro em uma nova linha
 * adicionar em cada linha no log.txt a data e hora que foi gravado o conteúdo
 */

const createLog = require('./module');

createLog('outro pum');