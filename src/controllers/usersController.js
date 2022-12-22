const path = require('path');
const { validationResult } = require('express-validator')
const fs = require ('fs');

const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controlador = {
	// LOGIN USER
	login: (req, res) => {
        res.render('./users/login.ejs')
    },

	// DETAIL PROFILE
    profile: (req, res) => {
        res.render('./users/profile.ejs')
    },

    // Form to create
    register: (req,res) => {
        res.render( './users/register')
	},

    // Create -  Method to store
    store: (req, res) => {

		let errors = validationResult(req);
		console.log("errors ", errors)

		if ( errors.isEmpty() ) {

			idNuevo=0;

		for (let s of users){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		let nombreImagen = req.file.filename;


		let usuarioNuevo =  {
			id: 1,
            name: "Juan",
            lastName: "Maldonado",
            userName: "juancito",
            email: "jcmaldonado@gmail.com",
            birthDate: "20/06/1990",
			image: nombreImagen
		};

		users.push(usuarioNuevo);

		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' '));

		res.redirect('/');

		
		}
		else{
			res.render('products/newProductForm', {errors: errors.array() } ); 
		}
	
		
	},
    

    
}

module.exports = controlador;
