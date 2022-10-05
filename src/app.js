

const homeRoutes = require('./routes/homeRoutes.js');

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3000, () => (
    console.log('Servidor lanzado en puerto 3000')
));

app.use('/', homeRoutes); 

app.get('/login', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/login/login.html'))
));
app.get('/register', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/register/register.html'))
));
app.get('/shoppingCart', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/shoppingCart/shoppingCart.html'))
));
app.get('/ProductDescription', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/ProductDescription/productDescription.html'))
));


