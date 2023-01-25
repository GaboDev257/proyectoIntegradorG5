const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');


/* Páginas de productos */

router.get("/", apiUsersController.allUsers); 

module.exports = router;