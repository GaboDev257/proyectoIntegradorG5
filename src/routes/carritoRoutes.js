const carritoController = require ('../controllers/carritoController');

const express = require('express');
const router = express.Router();

router.get('/', carritoController.carrito)
router.get('/list/:id', carritoController.carritoProducto);



module.exports = router;