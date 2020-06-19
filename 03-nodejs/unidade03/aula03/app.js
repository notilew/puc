const yargs = require('yargs');
const quote = require('./quote');

yargs.version('1.0.0');

yargs.command({
    command: 'search',
    describe: 'busca informações do ativo no world trading data',
    builder: {
        code: {
            describe: 'código do ativo na bolsa de valores',
            type: 'string',
            demandOption: true
        }
    },
    handler: (args) => {
        const { code } = args;

        quote(code);
    }
});

yargs.parse();