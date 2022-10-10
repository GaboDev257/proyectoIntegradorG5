const usuariosRoutes = require ('./routes/usuariosRoutes')
const productosRoutes = require ('./routes/productosRoutes')
const homeRoutes = require('./routes/homeRoutes');
const carritoRoutes = require ('./routes/carritoRoutes');


const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

<<<<<<< HEAD
app.use('/users', usuariosRoutes)
app.use('/products', productosRoutes)
app.use('/shoppingCart', carritoRoutes);
=======
>>>>>>> 65c0119b8b8b9073c5bf4170a71438e08d98d09f
app.use('/', homeRoutes); 
app.use('/users', usuariosRoutes);
app.use('/products', productosRoutes);
app.use('/shoppingCart', carritoRoutes);



app.listen(3000, () => (
    console.log('Servidor lanzado en puerto 3000')
));
