const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Ingredients = require('./ingredients.models')
const Recipes = require('./recipes.models')

const RecipesIngredients = db.define('recipes_ingredients', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    amount :{
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'repice_id',
        references: {
            key: 'id',
            model: Recipes
        }
    },
    ingredientId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'ingredient_id',  
        references: {
            key: 'id',
            model: Ingredients
        }  
    }

})


module.exports = RecipesIngredients