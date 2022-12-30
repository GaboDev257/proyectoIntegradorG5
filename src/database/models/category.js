function categoryData (sequelize, Datatypes) {
    let alias = 'category';
    let cols = {
        id: {
            type: Datatypes.BIGINT(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        timestamps: false,
    }
    const category = sequelize.define(alias, cols, config);

    category.associate = function(models) {
        category.hasMany(models.product, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "products", // El nombre del modelo pero en plural
            foreignKey: "category_id"
        })
    }

    return category
};

module.exports = categoryData;