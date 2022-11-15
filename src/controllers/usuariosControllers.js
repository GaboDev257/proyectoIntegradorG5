const path = require('path');

const controlador = {
    register: (req,res) => {
        res.render( './users/register.ejs')
    },
    login: (req, res) => {
        res.render('./users/login.ejs')
    },
    profile: (req, res) => {
        res.render('./users/profile.ejs')
    }
    
}

module.exports = controlador