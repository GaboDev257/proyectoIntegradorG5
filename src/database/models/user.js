function userData (sequelize, dataTypes) {
    let alias = 'user';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
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
            type: dataTypes.DATE,
            allowNull: false
        },
        image_user: {
            type: dataTypes.STRING,
            allowNull: true
        },
        create_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        update_date: {
            type: dataTypes.DATE,
            allowNull: true
        },
    };
    let config = {
        timestamps: false,
    }
    const user = sequelize.define(alias, cols, config); 

    user.associate = function (models) {
        user.hasMany(models.product, { 
            as: "products",
            foreignKey: 'user_id',
        })
    }

    return user
};

module.exports = userData; 