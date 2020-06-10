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

const showInformationMessage = (message) => {
    if (messageValidate(message)) console.log(chalk.bgCyan.white.bold(message));
};

const showWarningMessage = (message) => {
    if (messageValidate(message)) console.log(chalk.bgYellow.white.bold(message));
};

const showDangerMessage = (message) => {
    if (messageValidate(message)) console.log(chalk.bgRed.white.bold(message));
};

module.exports.showSuccessMessage = showSuccessMessage;
module.exports.showInformationMessage = showInformationMessage;
module.exports.showWarningMessage = showWarningMessage;
module.exports.showDangerMessage = showDangerMessage;