
const router = require('express').Router()

const typesServices = require('./types.services')
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')



require('../middlewares/auth.middleware')(passport)

router.route('/')
        .get(typesServices.getAllTypes)
        .post(
            passport.authenticate('jwt', {session: false}),
            adminValidate,
            typesServices.createType)
        
router.route('/:id')
        .get(typesServices.getTypeById)
        .delete(
            passport.authenticate('jwt', {session: false}),
            adminValidate,
            typesServices.deleteType)


module.exports = router