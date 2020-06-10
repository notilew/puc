const utils = require('./utils');

if (process.argv.length === 3) {
    utils.showDefaultMessage('processando...');

    const option = process.argv[2];

    switch (option) {
        case 'create':
            utils.showSuccessMessage('criando tarefa!');
            break;

        case 'update':
            utils.showWarningMessage('atualizando tarefa!');
            break;

        case 'delete':
            utils.showDangerMessage('deletando tarefa!');
            break;

        default:
            utils.showDefaultMessage('opção inválida!');
            break;
    }
}