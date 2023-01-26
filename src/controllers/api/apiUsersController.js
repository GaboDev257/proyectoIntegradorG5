const db = require('../../database/models');
const { Op } = require("sequelize")
const fs = require('fs');
const path = require('path');



module.exports = {
    allUsers: (req, res) => {
        db.user.findAll({ order: ['id'] })
            .then(users => {
                if (users) {
                    res.status(200).json(
                        {
                            meta: {
                                url: req.originalUrl,
                                status: 200,
                                count: users.length
                            },
                            data: users
                        }
                    );
                } else {
                    res.status(400).json({ error: 'No results found' });
                }
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({ error: 'Could not connect to database' });;
            })
    },
}