
const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const categoriesServices = require('./categories.services')


require('../middlewares/auth.middleware')(passport)

router.route('/')
        .get(categoriesServices.getAllCategories)
        .post(
            passport.authenticate('jwt', {session: false}),
            adminValidate,
            categoriesServices.createCategory)  //* Proteger por el ADMIN

router.route('/:id')
        .get(categoriesServices.getCategoryById)
        .delete(
            passport.authenticate('jwt', {session: false}),
            adminValidate,
            categoriesServices.deleteCategory) //* Proteger por el ADMIN

module.exports = router