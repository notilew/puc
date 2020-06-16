const yargs = require('yargs');
const task = require('./src/core/task');

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
    handler: (argv) => {
        task.createTask(argv);
    }
});

yargs.command({
    command: 'read',
    describe: 'lista todas as tarefas da lista de tarefas',
    builder: {
        id: {
            describe: 'id da tarefa',
            type: 'number',
            demandaOption: false
        }
    },
    handler: (argv) => {
        task.readTask(argv.name);
    }
});

yargs.command({
    command: 'update',
    describe: 'atualiza uma tarefa da lista de tarefas',
    builder: {
        name: {
            describe: 'nome da tarefa',
            type: 'string',
            demandOption: true
        },
        description: {
            descrive: 'descrição da tarefa',
            type: 'string',
            demandOption: false
        },
        acomplished: {
            describe: 'status da tarefa',
            type: 'boolean',
            demandOption: false
        }
    },
    handler: (argv) => {
        task.updateTask(argv.name, argv.description, argv.acomplished);
    }
});

yargs.command({
    command: 'delete',
    describe: 'deleta uma tarefa da lista de tarefas',
    builder: {
        name: {
            describe: 'nome da tarefa',
            type: 'string',
            demandOption: true
        },
    },
    handler: (argv) => {
        task.deleteTask(argv.name);
    }
});

yargs.parse();