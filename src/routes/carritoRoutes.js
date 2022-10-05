const carritoController = require ('../controllers/carritoController');

const express = require('express');
const router = express.Router();

router.get('/shoppingCart', carritoController.carrito)

module.exports = router;