const path = require('path');

const controlador = {

  carrito:  (req,res)  => {
    res.render( './shoppingCart.ejs')
  },

}

module.exports = controlador;