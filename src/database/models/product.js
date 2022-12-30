function productData (sequelize, Datatypes) {
    let alias = 'product'; // esto debería estar en singular
    let cols = {
        id: {
            type: Datatypes.BIGINT(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING(500),
            allowNull: false
        },
        price: {
            type: Datatypes.DECIMAL(3, 1),
            allowNull: false
        },
        description: {
            type: Datatypes.STRING(600),
            allowNull: false
        },
        image: {
            type: Datatypes.STRING(500),
            allowNull: false
        },
        create_date: {
            type: Datatypes.DATE,
            allowNull: false
        },
        update_date: {
            type: Datatypes.DATE,
            allowNull: true
        },
        category_id: Datatypes.BIGINT(10),
        user_id: Datatypes.BIGINT(10)
    };
    let config = {
        timestamps: false,
    }
    const product = sequelize.define(alias,cols,config);

    product.associate = function (models) {
        product.belongsTo(models.category, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category",
            foreignKey: "category_id"
        })

        /*product.belongsTo(models.user, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "user",
            foreignKey: 'user_id',
        })*/
    }

    return product
};

module.exports = productData; 