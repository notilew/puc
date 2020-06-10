const message = require('./message');

const tasks = [];

const createTask = (name) => {
    tasks.push({
        name: name.toLowerCase(),
        acomplished: false
    });

    message.showSuccessMessage('new task created successfully');
};

const readTask = () => {};

const updateTask = () => {};

const deleteTask = () => {};

module.exports.create = createTask;
module.exports.read = readTask;
module.exports.update = updateTask;
module.exports.delete = deleteTask;