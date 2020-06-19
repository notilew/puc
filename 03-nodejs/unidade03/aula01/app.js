const request = require('request');

const url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=petr4.sa&api_token=gpHXq0g5nPxuUixC5gVeruIoWVaxJgMDMkfM1VdOtkrPsv4sDBpJeB8NDlk0';

request(url, (error, response) => {
    if (error) throw new Error(error.message);

    const body = JSON.parse(response.body);

    body.data.forEach(data => {
        console.log(`symbol: ${data.symbol}`);
        console.log(`name: ${data.name}`);
        console.log(`price: ${data.price}`);
    });
});


/**
 * Simulando função com um callback
 */
const getPrice = (symbol, callback) => {
    setTimeout(() => {
        const data = {
            symbol,
            price: 16.50
        };

        callback(data);
    }, 5000);
};

const data = getPrice('petr4', (data) => {
    console.log(data);
});

/**
 * Desafio
 */
const sum = (num01, num02, callback) => {
    setTimeout(() => {
        const result = num01 + num02;

        callback(result);
    }, 10000);
};

sum(10, 25, (result) => {
    console.log(`O resultado da soma é: ${result}`);
});