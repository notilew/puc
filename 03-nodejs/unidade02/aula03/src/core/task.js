const chalk = require('chalk');
const taskList = require('./task-list');

const validateDuplicateTask = (newTask, tasks) => {
    let isDuplicateTask = false;
    const duplicateTask = tasks.find(task => task.name === newTask.name);

    if (duplicateTask) isDuplicateTask = true;

    return isDuplicateTask;
};

const createTask = (argv) => {
    const task = { name: argv.name, description: argv.description, acomplished: false };
    const tasks = taskList.readTasks();

    if (!validateDuplicateTask(task, tasks)) {
        tasks.push(task);
        taskList.writeTask(tasks);

        console.log(chalk.bgGreen.white.bold('Tarefa criada salva com sucesso'));
    } else {
        console.log(chalk.bgCyan.white.bold('Tarefa duplicada! Não pode ser salva no arquivo.'));
    }
};

const readTask = (name) => {
    const tasks = taskList.readTasks();

    if (name) {
        const task = tasks.filter(task => task.name === name);

        console.log(task);
    } else {
        console.log(tasks);
    }
};

const updateTask = (name, description, acomplished) => {
    const tasks = taskList.readTasks();
    const task = tasks.map(task => {
        if (task.name === name) {
            task.name = name;
            task.description = description;
            task.acomplished = acomplished;
        }

        return task;
    });
    
    taskList.writeTask(task)
};

const deleteTask = (name) => {
    const tasks = taskList.readTasks();
    const filteredTasks = tasks.filter(task => task.name !== name);

    taskList.writeTask(filteredTasks);
};

module.exports.createTask = createTask;
module.exports.readTask = readTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;