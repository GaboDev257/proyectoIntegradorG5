const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


/* Páginas de productos */

router.get("/lastProduct", apiProductsController.lastProduct);
router.get("/", apiProductsController.allProducts); 

module.exports = router;