/**
 * caso não exista o arquivo, deve-se criá-lo com um conteúdo.
 * caso contrário, manter o conteúdo do arquivo e adicionar um novo conteúdo
 */

const fs = require('fs');

const file = './files/name-list.txt';

fs.open(file, 'r+', (err, fd) => {
    if (err) {
        fs.writeFileSync(file, 'primeira linha\n');
    } else {
        fs.appendFileSync(file, 'segunda linha\n');
    }
});