const express = require('express')
const route = express()
const { registrarPonto } = require('../controller/ControllerRegistro')
const { authenticate , authenticateFull  } = require('../controller/authenticate')
const { getRegistroResultEntrada , getRegistroResultSaida } = require('../controller/controllerRegistroResult')

route.post('/registro/ponto',authenticate, registrarPonto)
route.get('/registro/result/entrada',authenticate, getRegistroResultEntrada )
route.get('/registro/result/saida',authenticate, getRegistroResultSaida)



module.exports = route