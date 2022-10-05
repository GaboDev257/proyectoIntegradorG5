
const usuariosRoutes = require ('./routes/usuariosRoutes')
const productosRoutes = require ('./routes/productosRoutes')
const homeRoutes = require('./routes/homeRoutes.js');
const carritoRoutes = require ('./routes/carritoRoutes');



const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


app.use('/users', usuariosRoutes)
app.use('/products', productosRoutes)
=======
app.use('/shoppingCart', carritoRoutes);
app.use('/', homeRoutes); 


app.listen(3000, () => (
    console.log('Servidor lanzado en puerto 3000')
));
