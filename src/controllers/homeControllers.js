const db = require('../database/models');

const homeControllers = {
    'index': (req, res) => {
        db.product.findAll({
            include: ['category']
        })
            .then(product => {
                res.render('home.ejs', {productos:product})
            })
    },
};

module.exports = homeControllers;