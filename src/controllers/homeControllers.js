const path = require('path');

const controlador = {
    home: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
    },
}


module.exports = controlador; 