const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controlador = {
	// ALL USERS

	// LOGIN USER
	login: (req, res) => {
        res.render('users/login')
    },

	// DETAIL PROFILE
	profile: (req, res) => {
		
	/*	let idURL = req.params.id;
		let usuarioEncontrado;

		for (let p of users){
			if (p.id==idURL){
				usuarioEncontrado=p;
				break;
			}
		} */

		res.render('users/profile' /*,{detallePerfil: usuarioEncontrado}*/);

	},


    // Form to register
    register: (req,res) => {
        res.render( 'users/register')
	},

    // Create -  Method to store
    store: (req, res) => {

		let errors = validationResult(req);
		console.log("errors ", errors)

		if ( errors.isEmpty() ) {

			idNuevo=0;

		for (let u of users){
			if (idNuevo<u.id){
				idNuevo=u.id;
			}
		}

		idNuevo++;

		/*let nombreImagen = req.file.filename;*/


		let usuarioNuevo =  {
			id: idNuevo,
            name: req.body.name,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            birthDate: req.body.birthDate,
			/*image: nombreImagen*/
		};

		users.push(usuarioNuevo);

		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' '));

		res.redirect('users/login');

		
		}
		else{
			res.render('users/register', {errors: errors.array() } ); 
		}
	
		
	},
    

    
}

module.exports = controlador;
