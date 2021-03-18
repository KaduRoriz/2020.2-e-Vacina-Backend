const express = require('express');
const routes = express.Router();

//controllers
const UserController = require('./controllers/UserController');

routes.get('/user/:id', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);   
routes.delete('/user/:id', UserController.delete);
module.exports = routes;