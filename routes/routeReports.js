const express = require('express')
const route = express()
const { authenticate , authenticateFull  } = require('../controller/authenticate')
const { registrar , categorias } =require('../controller/controllerReport')

route.post('/report/registrar',authenticate, registrar)
route.get('/report/caregorias', authenticate, categorias)


module.exports = route