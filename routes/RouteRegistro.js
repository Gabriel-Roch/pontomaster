const express = require('express')
const route = express()
const { registrarPonto } = require('../controller/ControllerRegistro')
const { authenticate , authenticateFull  } = require('../controller/authenticate')

route.post('/registro/ponto',authenticate, registrarPonto)



module.exports = route