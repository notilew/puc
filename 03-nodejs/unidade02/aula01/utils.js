const chalk = require('chalk');

const showSuccessMessage = (message) => {
    if (message && typeof message === 'string') {
        console.log(chalk.green.bold.inverse(message));
    }
};

const showWarningMessage = (message) => {
    if (message && typeof message === 'string') {
        console.log(chalk.yellow.bold.inverse(message));
    }
};

const showDangerMessage = (message) => {
    if (message && typeof message === 'string') {
        console.log(chalk.red.bold.inverse(message));
    }
};

const showDefaultMessage = (message) => {
    if (message && typeof message === 'string') {
        console.log(chalk.white.bold.inverse(message));
    }
};

module.exports.showSuccessMessage = showSuccessMessage;
module.exports.showWarningMessage = showWarningMessage;
module.exports.showDangerMessage = showDangerMessage;
module.exports.showDefaultMessage = showDefaultMessage;