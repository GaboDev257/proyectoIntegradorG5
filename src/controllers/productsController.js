const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products',{productos: products})
	},

	// Detail from one product
	detail: (req, res) => {
		
		const idProducto = req.params.id;
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}
		res.render('productDescription',{detalleProducto: productoEncontrado});
	},

	// Form to create
	create: (req, res) => {
		res.render('newProductForm');
	},
	
	// Create -  Method to store
	store: (req, res) => {

		let errors = validationResult(req);
		console.log("errors ", errors)

		if ( errors.isEmpty() ) {

			idNuevo=0;

		for (let s of products){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		let nombreImagen = req.file.filename;


		let productoNuevo =  {
			id:   idNuevo,
			name: req.body.name ,
			price: req.body.price,
			category: req.body.category,
			description: req.body.description,
			image: nombreImagen
		};

		products.push(productoNuevo);

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');

		
		}
		else{
			res.render('product-create-form', {errors: errors.array() } ); 
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