const express = require('express');
const router = express.Router();
const Contenedor = require('../contenedor')

const contenedorMessages = new Contenedor('messages.json')

let products = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'E-commerce',chatH1: 'Chat'});
});

router.get('/messages', function(req, res, next) {
  res.render('messages', {messages:contenedorMessages.getAll()});
});

module.exports = router;
