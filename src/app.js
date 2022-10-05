const usuariosRoutes = require ('./routes/usuariosRoutes')
const productosRoutes = require ('./routes/productosRoutes')

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3000, () => (
    console.log('Servidor lanzado en puerto 3000')
));

app.use('/users', usuariosRoutes)
app.use('/products', productosRoutes)


