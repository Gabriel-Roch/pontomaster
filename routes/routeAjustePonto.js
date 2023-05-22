const express = require('express')
const route = express()
const { authenticate , authenticateMid , authenticateFull  } = require('../controller/authenticate')
const { solicitarAjuste , cadastrarajuste  } = require('../controller/controllerAjustePonto')


route.get('/ajuste/solicitarajuste',authenticate, solicitarAjuste)
route.post('/ajuste/cadastrarajuste',authenticate, cadastrarajuste)


module.exports = route