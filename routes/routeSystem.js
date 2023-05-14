const express = require('express')
const route = express()
const { users , usersData , usersupdate } = require('../controller/controllerSystem')
const { apiGraficoContas } = require('../controller/ControllerGraficos')
const { authenticate , authenticateFull } = require('../controller/authenticate')

route.get('/users',authenticateFull, users)
route.get('/users/usersdata', usersData)
route.get('/users/update/:id/:action',authenticateFull, usersupdate)
route.get('/users/graficos/contas',authenticateFull, apiGraficoContas)


module.exports = route