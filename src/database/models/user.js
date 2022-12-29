function userData (sequelize, dataTypes) {
    let alias = 'user';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
        //created_at: dataTypes.TIMESTAMP,
        //updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        user_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        birth_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        /*image_user: {
            type: dataTypes.STRING,
            allowNull: false
        },*/
    };
    let config = {
        timestamps: true,
    }
    const user = sequelize.define(alias, cols, config); 

    user.associate = function (models) {
        user.hasMany(models.product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "products",
            foreignKey: 'user_id',
        })
    }

    return user
};

module.exports = userData; 