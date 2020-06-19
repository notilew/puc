const request = require('request');

const uri = 'https://api.worldtradingdata.com/api/v1/stock';
const token = 'gpHXq0g5nPxuUixC5gVeruIoWVaxJgMDMkfM1VdOtkrPsv4sDBpJeB8NDlk0';

const getQuote = (symbol, callback) => {
    if (!symbol) throw new Error('É necessário enviar o código de cotação!');

    const url = `${uri}?symbol=${symbol}&api_token=${token}`;

    request(url, (error, response) => {
        if (error) throw new Error(error.message);

        const parse = JSON.parse(response.body);

        if (!parse.hasOwnProperty('data')) throw new Error(parse.Message);

        const quote = { symbol: '', description: '', price: 0.0 };
        
        parse.data.forEach(data => {
            quote.symbol = data.symbol;
            quote.description = data.name;
            quote.price = data.price;
            quote.priceOpen = data.price_open;
            quote.dayHigh = data.day_high;
            quote.dayLow = data.day_low;
        });

        callback(quote);
    });
};

module.exports = getQuote;