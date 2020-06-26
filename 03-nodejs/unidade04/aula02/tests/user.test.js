const User = require('../src/app/models/users.model');
const request = require('supertest');
const app = require('../app');

beforeAll(async () => {
    await User.deleteMany();
});

test('Teste do método GET dos usuários', async () => {
    await request(app).get('/users').expect(200);
});

test('Teste do método POST dos usuários', async () => {
    await request(app)
        .post('/users')
        .json({ name: 'teste', age: 10, password: '1234', email: 'teste@gmail.com' })
        .expect(201);
});

/* test('Primeiro Teste', () => {
    // exemplo de teste
    const valor01 = 10;
    const valor02 = 10;
    const soma = valor01 + valor02;

    expect(soma).toBe(20);
});

test('Primeiro Teste Assíncrono 1', (done) => {
    // exemplo de teste assíncrono
    const valor01 = 10;
    const valor02 = 10;
    const soma = valor01 + valor02;

    expect(soma).toBe(20);

    done();
});

test('Primeiro Teste Assíncrono 2', (done) => {
    // exemplo de teste assíncrono
    soma(1, 2).then(resultado => {
        expect(soma).toBe(20);
    });

    done();
});

test('Primeiro Teste Assíncrono 3', async (done) => {
    // exemplo de teste assíncrono
    const resultado = await soma(1, 2);

    expect(soma).toBe(20);

    done();
}); */