require('./src/app/db/mongoose');
const tasksRoutes = require('./src/app/routes/tasks.routes');
const usersRoutes = require('./src/app/routes/users.routes');
const express = require('express');

const app = express();

app.use(express.json());
app.use(tasksRoutes);
app.use(usersRoutes);

module.exports = app;