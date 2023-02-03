const path = require('path');

const controlador = {

  carrito:  (req,res)  => {

    res.render( './shoppingCart.ejs')
  },
  carritoProducto: async (req, res) => {
    let prodCarrito = await apiServices.productByPk(req);
    res.json(prodCarrito);
  }

}

module.exports = controlador;