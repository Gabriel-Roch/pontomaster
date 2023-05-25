const express = require('express')
const route = express()
const { alterarSenha } = require('../controller/controllerAlterarSenha')
const { authenticate , authenticateFull  } = require('../controller/authenticate')

route.put('/alterarsenha',authenticate, alterarSenha)



module.exports = route