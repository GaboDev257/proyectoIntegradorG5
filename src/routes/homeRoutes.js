const homeControllers = require('../controllers/homeControllers.js');

const express = require('express');
const router = express.Router();

router.get('/', homeControllers.home); 


module.exports = router; 