const Categories = require('../models/categories.models') 

//? Ver todas las categoria
//? Ver una categoria en especifico
//? crear categoria
//? eliminar categoria


const getAllCategories = async () => {
    const response = await Categories.findAll()
    return response
}


const getCategoryById = async (id) => {
    const response = await Categories.findOne({
        where: {
            id :id
        }
    })
    return response
}

const createCategory = async(name) => {
    const response = await Categories.create({
        name
    })
    return response
}

const deleteCategory = async(id) => {
    const response = Categories.destroy({
        where: {
            id : id
        }
    })
    return response
}


module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}