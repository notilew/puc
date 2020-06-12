const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.0.0');

yargs.command({
    command: 'create',
    describe: 'cria uma nova tarefa na lista de tarefas',
    builder: {
        name: {
            describe: 'nome da tarefa',
            type: 'string',
            demandOption: true
        },
        description: {
            descrive: 'descrição da tarefa',
            type: 'string',
            demandOption: true
        },
        acomplished: {
            describe: 'status da tarefa',
            type: 'boolean',
            demandOption: false
        }
    },
    handler: function(argv) {
        const task = {
            name: argv.name,
            description: argv.description,
            acomplished: false
        }

        const taskJSON = JSON.stringify(task);

        fs.appendFileSync('src/assets/files/tasks.json', taskJSON);
    }
});

/* yargs.command({
    command: 'read',
    describe: 'lista todas as tarefas da lista de tarefas',
    builder: { },
    handler:
});

yargs.command({
    command: 'update',
    describe: 'atualiza uma tarefa da lista de tarefas',
    builder: { },
    handler:
});

yargs.command({
    command: 'delete',
    describe: 'deleta uma tarefa da lista de tarefas',
    builder: { },
    handler:
}); */

yargs.parse();