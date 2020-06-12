const yargs = require('yargs');
const task = require('./core/modules/task');

yargs.version('1.0.0');

yargs.command({
    command: 'create',
    describe: 'create a new task into the list',
    handler: task.create(yargs.argv.name)
});

yargs.command({
    command: 'read',
    describe: 'read a task or all tasks into the list',
    handler: task.read
});

yargs.command({
    command: 'update',
    describe: 'update a task into the list',
    handler: task.update
});

yargs.command({
    command: 'delete',
    describe: 'delete a task into the list',
    handler: task.delete
});

yargs.parse();