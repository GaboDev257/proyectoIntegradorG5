const usersController = require('../controllers/usersController')

const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = 'img' + '-' + file.originalname;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
}); 


/*** LOGIN USER ***/
router.get('/login', usersController.login)

/*** CREATE ONE USER ***/ 
router.get('/register', usersController.register) 
router.post('/register', uploadFile.single('imagenUsuario'), usuariosController.store); 

/*** EDIT ONE PROFILE ***/ 
router.get('/profile/:id', usersController.profile); 
router.put('/profile/:id', usersController.update); 


module.exports = router 