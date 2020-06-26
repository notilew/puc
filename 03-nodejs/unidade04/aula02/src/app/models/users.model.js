const validator = require('validator');
const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: false,
        default: 0,
        validate (value) {
            if (value < 0) throw new Error('A idade deve ser um valor positivo!');
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate (value) {
            if (value.toLowerCase().includes('senha')) throw new Error('A palavra "senha" é inválida!');
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate (value) {
            if (!validator.isEmail(value)) throw new Error('E-mail inválido!');
        }
    }
});

module.exports = User;