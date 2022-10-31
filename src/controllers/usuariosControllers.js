const path = require('path');

const controlador = {
    register: (req,res) => {
        res.render( './register.ejs')
    },
    login: (req, res) => {
        res.render('./login.ejs')
    },
    profile: (req, res) => {
        res.render('./profile.ejs')
    }
    
}

module.exports = controlador