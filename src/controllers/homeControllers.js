const db = require('../database/models');

const homeControllers = {
    'index': (req, res) => {
        db.product.findAll({
            include: ['category']
        })
            .then(product => {
                res.render('home.ejs', {product})
            })
    },
};

module.exports = homeControllers;