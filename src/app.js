const usersRouter = require ('./routes/users')
const productsRouter = require ('./routes/products')
const homeRoutes = require('./routes/homeRoutes');
const carritoRoutes = require ('./routes/carritoRoutes');


const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', homeRoutes); 
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/shoppingCart', carritoRoutes);



app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo')
});
