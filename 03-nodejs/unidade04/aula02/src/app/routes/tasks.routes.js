const express = require('express');

const router = new express.Router();

router.post('/tasks', (request, response) => {});

router.get('/tasks', (request, response) => {});

router.get('/tasks/:id', (request, response) => {});

router.put('/tasks/:id', (request, response) => {});

router.delete('/tasks/:id', (request, response) => {});

module.exports = router;
