const path = require('path');

const controlador = {
    home: (req, res) => {
    res.render('./home');
    },
}


module.exports = controlador; 