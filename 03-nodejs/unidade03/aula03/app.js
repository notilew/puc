const yargs = require('yargs');
const quote = require('./quote');

yargs.version('1.0.0');

yargs.command({
    command: 'search',
    describe: 'busca informações do ativo no world trading data',
    builder: {
        symbol: {
            describe: 'código do ativo na bolsa de valores',
            type: 'string',
            demandOption: true
        }
    },
    handler: (args) => {
        const { symbol } = args;

        quote(symbol, (data) => {
            console.log(data);
        });
    }
});

yargs.parse();