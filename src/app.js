const carritoRoutes = require ('./routes/carritoRoutes');

const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath))

app.use('/shoppingCart', carritoRoutes);


app.use('/', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/home.html'))
));


app.use('/login', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/login/login.html'))
));
app.use('/register', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/register/register.html'))
));




app.use('/ProductDescription', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/ProductDescription/productDescription.html'))
));

app.listen(3000, () => (
    console.log('Servidor lanzado en puerto 3000')
));
