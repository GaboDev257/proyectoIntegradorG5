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
    body('email')
       .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
       .isEmail().withMessage('El formato de correo ingresado es inváido'),
    body('password')
       .notEmpty().withMessage('Tienes que escribir una contraseña').bail()
       .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
    body('confirm-password')
       .notEmpty().withMessage('Tienes que confirmar la contraseña').bail()
       .custom ((value,{req}) => {
          if (value != locals.password ) {
            return Promise.reject ('Las contraseñas no coinciden')
          }
        return true;

       }),
];



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