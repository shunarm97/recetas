const {it , describe} = require('mocha')
const {assert} = require('chai')
const {getAllUsers} = require('../src/users/users.controllers')

const sumar  = (a, b) => a + b


describe('test de la funcion sumas', () => {
    it('deberia retornar 12 cuando retornamos 8 y 4', (done) => {
        const response = sumar(8,4)
        assert.equal(response, 12) 
        done()     
    })

    it ('deberia retornar 5 si le pasamos 3 y 2', (done) => {
        const response  = sumar(2, 3)
        assert.equal(response, 5)
        done()
    })
}) 

describe('test de controladores de usuarios', () => {
    it('deberia retornar todos los usuarios', (done) => {
        getAllUsers()
            .then(response => {
                assert.typeOf(response, 'array')
                done()
            })
    })
})