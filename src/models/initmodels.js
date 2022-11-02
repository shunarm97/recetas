const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')




const initModels = () => {
    //? hasMany llave foranea dentro de parenctecis
    //? belongsTo llave foranea en primer parametro

    //* Users 1 : M Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

//! relaciones de muchos a muchos

     //* Users 1 : M UsersRecipes
     Users.hasMany(UsersRecipes)
     UsersRecipes.belongsTo(Users)

     //* Recipes 1 : M UsersRecipes
     Recipes.hasMany(UsersRecipes)
     UsersRecipes.belongsTo(Recipes)

         
    //* Users 1 : M UsersIngredients
     Users.hasMany(UsersIngredients)
     UsersIngredients.belongsTo(Users)

    //* Ingredients 1 : M UsersIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    //* Recipes 1 : M Categories
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //* Types 1 : M Ingredients 
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //* Recipes 1 : M RecipesIngredients
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    //* Ingredients 1 : M RecipesIngredients
    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    //* Recipes 1 : M Instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
}



module.exports = initModels