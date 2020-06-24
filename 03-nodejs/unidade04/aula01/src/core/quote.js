const request = require('request');

const search = (symbol, callback) => {
    if (!symbol) callback(null, { message: 'asset code has not been sent!' });

    const uri = 'http://api.marketstack.com/v1/eod';
    const token = 'f96c08ef78269e2e3b6f89975f39d5e6';
    const url = `${uri}?access_key=${token}&symbols=${symbol}`;

    request(url, (error, response) => {
        if (error) callback(null, { message: error.message });

        const parse = JSON.parse(response.body);

        if (!parse.hasOwnProperty('data')) callback(null, { message: parse.Message });

        const quote = {};

        parse.data.forEach(data => {
            quote.symbol = data.symbol;
            quote.description = data.exchange;
            quote.price = data.close;
            quote.priceOpen = data.open;
            quote.dayHigh = data.high;
            quote.dayLow = data.low;
        });

        callback(quote, null);
    });
};

module.exports = search;