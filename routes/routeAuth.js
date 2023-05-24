const express = require('express')
const route = express()
const { login , loginauthetication , logout } = require('../controller/controllerLogin')
const { createAccount , registration } = require('../controller/controllerCreateAccount.js')
const { getEmpresas } = require('../controller/controllerEmpresas')

route.get('/login', login)
route.get('/createaccount', createAccount)
route.get('/empresas', getEmpresas )
route.post('/registration', registration)
route.post('/loginauthetication', loginauthetication)
route.get('/logout', logout)


module.exports = route