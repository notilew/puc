const User = require('../models/users.model');
const express = require('express');

const router = new express.Router();

router.post('/users', async (request, response) => {
    const user = new User(request.body);

    try {
        await user.save();

        return response.status(201).json(user);
    } catch (error) {
        return response.status(400).json(error);
    }
});

router.get('/users', async (request, response) => {
    try {
        const users = await User.find({});

        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.get('/users/:id', async (request, response) => {
    const id = request.params.id;

    try {
        const user = await User.findById(id);

        if (!user) return response.status(404).json({ message: 'Usuário não Encontrado!' });

        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.put('/users/:id', async (request, response) => {
    const keys = Object.keys(request.body);
    const allowed = ['name', 'age', 'password', 'email'];
    const isValid = keys.every(key => allowed.includes(key));

    if (!isValid) return response.status(400).json({ message: 'Esses campos não podem ser atualizados!' });

    try {
        const user = await User
            .findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true });

        if (!user) return response.status(400).json({ message: 'Usuário não existe!' });

        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
});

router.delete('/users/:id', async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);

        if (!user) return response.status(400).json({ message: 'Usuário não existe!' });

        return response.status(204).json(user);
    } catch (error) {
        return response.status(500).json(error);
    }
});

module.exports = router;