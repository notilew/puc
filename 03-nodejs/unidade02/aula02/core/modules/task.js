const fs = require('fs');
const path = require('path');
const message = require('./message');

const files = path.resolve('assets', 'files');

const createFile = () => {
    if (!fs.existsSync(path.resolve(files, 'tasks.txt')))
        fs.writeFile(path.resolve(files, 'tasks.txt'), '', (error) => {
            if (error) throw new Error(message.showDangerMessage(error.message));

            message.showInformationMessage('The tasks.txt file was created successfully');
        });
};

const writeFile = (task) => {
    if (task) {
        fs.writeFile(path.resolve(files, 'tasks.txt'), `${task.name} - ${task.acomplished}`, (error) => {
            if (error) throw new Error(message.showDangerMessage(error.message));

            message.showSuccessMessage('new task created successfully')
        });
    }
};

const createTask = (name) => {
    if (name) {
        const task = { name, acomplished: false };

        createFile();

        writeFile(task);
    }
};

const readTask = (key) => {
    if (key) {
        message.showSuccessMessage('listening a task...');
    }

    message.showSuccessMessage('listening all tasks')
};

const updateTask = () => { };

const deleteTask = () => { };

module.exports.create = createTask;
module.exports.read = readTask;
module.exports.update = updateTask;
module.exports.delete = deleteTask;