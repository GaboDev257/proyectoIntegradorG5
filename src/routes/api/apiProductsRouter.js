const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


/* Páginas de productos */

router.post("/lastProduct", apiProductsController.lastProduct);
router.post("/:id", apiProductsController.productsAll); 
router.get("/", apiProductsController.productsAll); 

module.exports = router;