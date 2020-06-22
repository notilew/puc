const path = require('path');
const hbs = require('hbs');
const express = require('express');

const app = express();

/**
 * setando a view engine para renderizar arquivos hbs
 * para acessar os arquivos hbs dinâmicos: através de rotas definidas no express
 */
app.set('view engine', 'hbs');

/**
 * setando diretório templates como padrão para renderizar arquivos hbs
 */
app.set('views', path.join(__dirname, '.', 'templates', 'views'));

/**
 * registrando diretório onde ficará armazenado os partials com exntesão hbs
 */
hbs.registerPartials(path.join(__dirname, '.', 'templates', 'partials'));

/**
 * informando para o express o path de um diretório que será utilizado para retornar arquivos estáticos
 * para acessar os arquivos estáticos: localhost:3000/nome-arquivo.html
 */
app.use(express.static(path.join(__dirname, '..', 'public')));

/**
 * definindo rota para acessar dinamicamente a index.hbs
 */
app.get('/', (request, response) => {
    response.render('index.hbs', {
        title: 'bem-vindo a página principal',
        author: 'wellington felix'
    });
});

/**
 * definindo rota para acessar dinamicamente a about.hbs
 */
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        title: 'bem-vindo a página de sobre',
        author: 'wellington felix'
    });
});

/**
 * definindo rota para acessar dinamicamente a help.hbs
 */
app.get('/help', (request, response) => {
    response.render('help.hbs', {
        title: 'bem-vindo a página de ajuda',
        author: 'wellington felix'
    });
});

app.get('/cotacoes', (request, response) => {
    const quotes = new Array();
    const quote = {
        symbol: 'egie3',
        priceOpen: 55.50,
        dayHigh: 56.10,
        dayLow: 54.25
    }

    quotes.push(quote);
    quotes.push(quote);

    response.status(200).json(quotes);
});

app.listen(3000, () => {
    console.log('Servidor Online na Porta 3000!');
});