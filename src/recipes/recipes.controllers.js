
const uuid = require('uuid')

const Recipes = require('../models/recipes.models')

const getAllRecipes = async() => {
    const response = await Recipes.findAll()
    return response
}

const getRescipeById = async(id) => {
    const response = await Recipes.findOne({
        where : {
            id : id
        }
    })
    return response
}

const createRecipe = async(data) => {
    const response  = await Recipes.create({
        id : uuid.v4(),
        title: data.title,
        description : data.description,
        urlImg: data.urlImg,
        time : data.time,
        portions : data.portions,
        userId : data.userId,
        categoryId: data.categoryId,
        origin : data.origin,
        likes : data.likes 
    })
    return  response
}

const updateRecipe = async(id, data) => {
    const response = await Recipes.update(data, {
        where : {
            id : id
        }
    })
    return response
}

const deleteRecipe = async(id) => {
    const response = await Recipes.destroy({
        where : {
            id : id
        }
    })
    return response
}

module.exports = {
    getAllRecipes,
    getRescipeById,
    updateRecipe,
    deleteRecipe,
    createRecipe
}