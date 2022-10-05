const productosControllers = require('./../controllers/productosControllers')

const express = require ('express');
const router = express.Router();

router.get('/productDescription', productosControllers.register)



module.exports = router 