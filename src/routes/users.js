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

const uploadFile = multer({ storage: multerDiskStorage });


let validaciones = [
	check('name').notEmpty().withMessage('Complete campo')
];  


/*** LOGIN USER ***/
router.get('/login', usersController.login)

/*** CREATE ONE USER ***/ 
router.get('/register', usersController.register) 
router.post('/register', validaciones, usersController.store); 
/*router.post('/register', uploadFile.single('imagenUsuario'), usersController.store); */

/*** DETAIL PROFILE ***/ 
router.get('/profile/:id', usersController.profile); 

/*** EDIT ONE PROFILE  
router.get('/editProfile/:id', productsController.edit); 
router.put('/editProfile/:id', validaciones, productsController.update); ***/



module.exports = router 