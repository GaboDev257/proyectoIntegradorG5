const usuariosControllers = require('./../controllers/usuariosControllers')

const express = require ('express');
const router = express.Router();

router.get('/register', usuariosControllers.register)
router.get('/login', usuariosControllers.login)


module.exports = router 