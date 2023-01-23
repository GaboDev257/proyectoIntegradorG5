const path = require('path');
const db = require('../database/models');
//const { validationResult } = require('express-validator')

const Products = db.product;
const Categories = db.category;
const Users = db.user;

const controller = {
	// Show all products
	index: (req, res) => {
        db.product.findAll({
            include: ['category'],
        })
            .then(product => {
                res.render('products/products.ejs', {productos:product})
            })
    },

	// Detail from one product
	detail: (req, res) => {
        db.product.findByPk(req.params.id,
            {
                include : ['category']
            })
            .then(product => {
                res.render('products/productDescription.ejs',{detalleProducto: product});
            });
    },


	// Form to create
	create: (req, res) => {
		let promCategories = Categories.findAll();
        let promUsers = Users.findAll();
        
        Promise
        .all([promCategories, promUsers])
        .then(([allCategories, allUsers]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'products/newProductForm.ejs'), {allCategories,allUsers})})
        .catch(error => res.send(error));
	},
	
	// Create -  Method to store
	store: (req,res) => {

		let nombreImagen = req.file.filename;

        Products.create(
            {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                create_date: new Date(),
				image: nombreImagen,
                category_id: req.body.category_id,
				user_id: '2'
            }
        )
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error))
    },
	

	// Update - Form to edit
	edit: (req, res) => {
		let promProducts = Products.findByPk(req.params.id, {include : ['category']});
		let promCategories = Categories.findAll();
        let promUsers = Users.findAll();
        
        Promise
        .all([promProducts, promCategories, promUsers])
        .then(([product, allCategories, allUsers]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'products/editProduct.ejs'), {ProductoaEditar:product, allCategories, allUsers})})
        .catch(error => res.send(error));
	},

	// Update - Method to update
	update: (req,res) => {
        let productId = Products.findByPk(req.params.id, {include : ['category']});

        Products.update(
            {
                name: req.body.name,
                price: req.body.price,
                category_id: req.body.category_id,
				description: req.body.description,
                update_date: new Date(),
            },
            {
                where: {id:productId}
            })
        .then(()=> {
            return res.redirect('/')})            
        .catch(error => res.send(error))
    },

	// Delete - Delete one product from DB
	destroy: (req,res) => {
        let productId = req.params.id;

    Products.destroy(
		{where: {id: productId}, force: true}
		) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    }
	
};

module.exports = controller;