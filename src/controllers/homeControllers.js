const db = require('../database/models');

const homeControllers = {
    'index': (req, res) => {
        db.product.findAll({
            limit: 18,
            include: ['category']
        })
            .then(product => {
                res.render('home.ejs', {productos:product})
            })
    },
};

module.exports = homeControllers;