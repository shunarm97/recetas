const { DataTypes } = require('sequelize');


const db = require('../utils/database');
const Users = require('./users.models');
const Categories =  require('./categories.models')

const Recipes = db.define('recipes', {
    id : {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 5
        }
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg : {
        type : DataTypes.STRING,
        validate : {
            isUrl: true
        },
        field: 'url_img'
    },
    time : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portions : {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    //? reglas de sequeliza de las llaves foraneas
    //? debe contener la tabla a la que se hace referencia en singular
    //? debe debe terminar en el subfijo Id
    userId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    categoryId : {
        type : DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    },
    origin : {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})



module.exports= Recipes