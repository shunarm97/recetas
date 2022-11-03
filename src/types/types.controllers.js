
const Types = require('../models/types.models')

const getAllTypes = async() => {
    const response = await Types.findAll()
    return response
}

const getTypeById = async (id) => {
    const response = await Types.findOne({
        where: {
            id : id
        }
    })
    return response
}


const createType = async(name) => {
    const response = await Types.create({
        name
    })
    return response
}


const deleteType = async(id) => {
    const response = await Types.destroy({
        where : {
            id : id
        }
    })
    return  response
}


module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    deleteType
}