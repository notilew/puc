const fs = require('fs');
const path = require('path');

const pathFiles = path.resolve('src', 'assets', 'files');

const writeTask = (task) => {
    fs.writeFileSync(path.resolve(pathFiles, 'task-list.json'), JSON.stringify(task));
};

const readTasks = () => {
    try {
        return JSON.parse(fs.readFileSync(path.resolve(pathFiles, 'task-list.json')).toString());
    } catch(e) {
        return [];
    }
};

module.exports.writeTask = writeTask;
module.exports.readTasks = readTasks;