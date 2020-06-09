const fs = require('fs');

const path = './files/log.txt';

const createLog = (param) => {
    if (param) {
        fs.access(path, fs.constants.F_OK, (err) => {
            const date = new Date();
            const row = `${date} -> ${param}\n`;

            if (err) {
                fs.writeFileSync(path, row);
            } else {
                fs.appendFileSync(path, row);
            }
        });
    }
};

module.exports = createLog;