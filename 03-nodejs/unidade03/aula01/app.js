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