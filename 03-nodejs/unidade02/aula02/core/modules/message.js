const chalk = require('chalk');

const messageValidate = (message) => {
    let isValid = false;

    if (message && typeof message === 'string') {
        isValid = true;
    }

    return isValid;
};

const showSuccessMessage = (message) => {
    if (messageValidate(message)) console.log(chalk.bgGreen.white.bold(message));
};

module.exports.showSuccessMessage = showSuccessMessage;