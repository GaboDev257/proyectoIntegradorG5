const usuariosRoutes = require ('./routes/usuariosRoutes')
const productsRouter = require ('./routes/productsRouter')
const homeRoutes = require('./routes/homeRoutes');
const carritoRoutes = require ('./routes/carritoRoutes');


const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.use(express.json());
//app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', homeRoutes); 
app.use('/users', usuariosRoutes);
app.use('/products', productsRouter);
app.use('/shoppingCart', carritoRoutes);



app.listen(3000, () => (
    console.log('Servidor lanzado en puerto 3000')
));
