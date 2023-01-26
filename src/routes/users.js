const usersController = require('../controllers/usersController')

const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const {User} = require('../database/models/user');

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
       .notEmpty().withMessage('Tienes que escribir un correo electronico')
       .isEmail().withMessage('El formato de correo ingresado es inváido'),
    body('password')
       .notEmpty().withMessage('Tienes que escribir una contraseña')
       .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
    body('confirmpassword')
       .notEmpty().withMessage('Tienes que confirmar la contraseña')
       .custom((value, { req }) => {
        // console.log(value);
        // console.log(req.body);
        if(value === req.body.password){
        return true
        }else{
        return false
        }
    })
    .withMessage('Las contraseñas no coinciden')

];


const validations2 = [
    body('email')
       .notEmpty().withMessage('Tienes que escribir un correo electronico')
       .isEmail().withMessage('El formato de correo ingresado es inváido'),
    body('clave')
       .notEmpty().withMessage('Tienes que escribir una contraseña')
       .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

];


/*** LOGIN USER ***/
router.get('/login', usersController.login)
router.post('/login', validations2 ,usersController.validationLogin)
router.post('/login', usersController.validationLogin)


/*** CREATE ONE USER ***/ 
router.get('/register', usersController.create) 
router.post('/register', validations ,usersController.processRegister); 

/*** DETAIL PROFILE ***/ 
router.get('/profile', usersController.profile); 

/*** EDIT ONE PROFILE  ***/
router.get('/editProfile', usersController.edit); 
router.put('/editProfile/:id', uploadFile.single('imagenUsuario'), usersController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', usersController.destroy); 

module.exports = router 