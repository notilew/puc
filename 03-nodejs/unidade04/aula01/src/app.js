const path = require('path');
const hbs = require('hbs');
const search = require('./core/quote');
const express = require('express');

const PORT = process.env.PORT || 3000;

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
    return response.render('index', {
        title: 'welcome to the home page',
        author: 'wellington felix'
    });
});

/**
 * definindo rota para acessar dinamicamente a about.hbs
 */
app.get('/about', (request, response) => {
    return response.render('about', {
        title: 'welcome to the about page',
        author: 'wellington felix'
    });
});

/**
 * definindo rota para acessar dinamicamente a help.hbs
 */
app.get('/help', (request, response) => {
    return response.render('help', {
        title: 'welcome to the help page',
        author: 'wellington felix'
    });
});

/**
 * definindo rota para acessar dinamicamente a página de cotação
 */
app.get('/quote', (request, response) => {
    const code = request.query.symbol;

    search(code, (quote, error) => {
        if (error) return response.status(400).json({ message: error.message });

        return response.status(200).send(quote);
    });
});

/**
 * definindo rota para acessar dinamicamente a página 404
 */
app.get('*', (request, response) => {
    return response.status(404).render('404', {
        title: 'Erro 404',
        message: 'Page Not Found!',
        author: 'wellington felix'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor Online na Porta ${PORT}!`);
});