const getQuote = require('./src/core/quote');

getQuote('egie3.sa', (data) => {
    console.log(data);
});