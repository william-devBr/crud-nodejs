const { Router } = require('express');
const route = Router();
const movimentoController = require('../controllers/movimentoController');

route.get('/movimentos/:id?',movimentoController.movimentos);

route.post('/criar',movimentoController.criar)

route.put('/atualizar/:id', movimentoController.atualizar)

route.delete('/apagar/:id', movimentoController.apagar)


module.exports = route;