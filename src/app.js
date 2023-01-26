const usersRouter = require ('./routes/users')
const productsRouter = require ('./routes/products')
const homeRoutes = require('./routes/homeRoutes');
const carritoRoutes = require ('./routes/carritoRoutes');
const apiProductsRouter = require('./routes/api/apiProductsRouter');
const apiUsersRouter = require('./routes/api/apiUsersRouter');

const cors = require ('cors');

const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
app.use(cors());

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', homeRoutes); 
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/shoppingCart', carritoRoutes);
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);

app.listen(process.env.PORT || 3001, function() {
    console.log('Servidor corriendo')
});




