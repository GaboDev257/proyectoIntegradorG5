const path = require('path');

const controlador = {
    product: (req,res) => {
        res.render('./productDescription.ejs')
    },
    
}

module.exports = controlador