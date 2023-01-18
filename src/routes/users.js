const usersController = require('../controllers/usersController')

const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
//const { check } = require('express-validator');
const { body } = require('express-validator');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = 'img' + '-' + file.originalname;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
}); 

const uploadFile = multer({ storage: multerDiskStorage });

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('last_name').notEmpty().withMessage('Tienes que escribir un apeliido'),
    body('user_name').notEmpty().withMessage('Tienes que elegir un usuario'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirm-password').notEmpty().withMessage('Tienes que confirmar la contraseña'),
];


/*let validaciones = [
	check('name').notEmpty().withMessage('Complete campo')
];  */


/*** LOGIN USER ***/
router.get('/login', usersController.login)

/*** CREATE ONE USER ***/ 
router.get('/register', usersController.create) 
router.post('/register', validations ,usersController.store); 

/*** DETAIL PROFILE ***/ 
router.get('/profile', usersController.profile); 

/*** EDIT ONE PROFILE  ***/
router.get('/editProfile', usersController.edit); 
router.put('/editProfile/:id', uploadFile.single('imagenUsuario'), usersController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', usersController.destroy); 

module.exports = router 