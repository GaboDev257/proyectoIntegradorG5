const fs = require('fs');
const { reset } = require('nodemon');
const path = require('path');
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Show all products
	index: (req, res) => {
		res.render('products',{productos: products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		
		const idProducto = req.params.id;
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}
		res.render('productDescription',{detalleProducto: productoEncontrado});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('newProductForm');
	},
	
	// Create -  Method to store
	store: (req, res) => {

		let errors = validationResult(req);
		res.send(errors);
	if ( errors.isEmpty() ) {
		
	
		res.render('newProductForm', {errors: errors.array() } );
		
	}
	else{
		res.render('newProductForm', {errors: errors.array() } );
	}
	},

	// Update - Form to edit
	edit: (req, res) => {

		let idProducto = req.params.id;	

		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}

		//const productoEnDetalle = products.find(element => element.id == req.params.id); // mejora

		res.render('editProduct',{detalleProducto: productoEncontrado});
	},
	// Update - Method to update
	update: (req, res) => {

		let valoresNuevos = req.body;
		let idProducto = req.params.id;	


		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){

				products[i].name = valoresNuevos.name;
				products[i].price = valoresNuevos.price;
				products[i].discount = valoresNuevos.discount;
				products[i].category = valoresNuevos.category;
				products[i].description = valoresNuevos.description;

				var productoEncontrado = products[i];

				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));

		res.render('productDescription',{detalleProducto: productoEncontrado})
		
	},

	// Delete - Delete one product from DB
	erase : (req, res) => {

		let idProducto = req.params.id;	
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var nombreImagen=products[i].image;
				products.splice(i,1);
				break;
			}
		}
		
	    fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		fs.unlinkSync(path.join(__dirname,'../../public/img/products/'+nombreImagen));
		res.render('home',{productos: products});

		}
	
};

module.exports = controller;