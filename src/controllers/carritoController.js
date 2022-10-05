const path = require('path');

const controlador = {

  carrito:  (req,res)  => {
        res.sendFile(path.resolve(__dirname, '../views/shoppingCart/shoppingCart.html'))
  },

}

module.exports = controlador;