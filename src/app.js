//? Dependencies
const express = require('express');
const db = require('./utils/database')
const cors = require('cors')
//? initial configs
const app = express()

//? Files
const {port} = require('./config')

//* Routes
const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initmodels')
const categoriesRouter = require('./categories/categories.router')
const typesRouter = require('./types/types.router')

app.use(express.json())
app.use(cors())

db.authenticate()
    .then(() => {
        console.log('Data Base Ahutenticate')
    } )
    .catch(() => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Data Base Synced')
    })
    .catch((err) => {
        console.log(err)
          
    })

initModels()


app.get('/',(req,res) => {
        res.status(200).json({
            message: 'all OK!',
            users: `localhost:${port}/api/v1/users`
        })
    })
    

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/types', typesRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})