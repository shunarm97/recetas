

const recipesControllers = require('./recipes.controllers')


const getAllRecipes = (req, res) => {
    recipesControllers.getAllRecipes()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getRescipeById = (req, res) => {
    const id = req.params.recipe_id
    recipesControllers.getRescipeById(id)
    .then((response) => {
        if(response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({message: `invalid Id: ${id}`})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const createRecipe = (req, res) => {
    const userId = req.user.id
    const {
        title,
        description,
        urlImg,
        time,
        portions,
        categoryId,
        origin
    } = req.body
    if(title && description && time && portions, categoryId) {
        recipesControllers.createRecipe({
            title, description, urlImg, time, portions, categoryId,origin,userId
        })
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((err) => {
            res.status(404).json({message: err.message})
        })
    } else {
        res.status(400).josn({
            message: 'invalid data',
            field: {
                title: 'string',
                description: 'string',
                time: 'number',
                portions: 'number',
                categoryId: 'number'
            }
        })
    }
}


const patchRecipe = (req, res) => {
    const {
        title,
        description,
        urlImg,
        time,
        portions,
        categoryId,
        origin
    } = req.body
    const id = req.params.recipe_id
    recipesControllers.updateRecipe(id, {
        title,
        description,
        urlImg,
        time,
        portions,
        categoryId,
        origin
    })
    .then((response) => {
        if(response[0]) {
            res.status(200).json({message:`Recipes with id ${id} edited succesfully`})
        } else {
            res.status(404).json({message: `invalid id : ${id}`})
        }

    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
} 

const deleteRecipe = (req, res) => {
    const id = req.params.recipe_id
    recipesControllers.deleteRecipe(id)
    .then((response) =>{
        if(response) {
            res.status(204).json()
        } else {
            res.status(404).json({message:'invalid id'})
        }
    })
    .catch(() => {
        res.status(400).json({message: err.message})
    })
}


const getUserRecipes = (req, res) => {
    const userId = req.user.id
    recipesControllers.getMyRecipes(userId) 
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
} 

module.exports = {
    getAllRecipes,
    getRescipeById,
    createRecipe,
    patchRecipe,
    deleteRecipe,
    getUserRecipes

}

