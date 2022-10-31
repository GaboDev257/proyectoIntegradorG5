const path = require('path');

const controlador = {
    product: (req,res) => {
        res.render('./products/productDescription.ejs')
    },
    
}

module.exports = controlador