const express = require('express')
const route = express()
const { users , usersData } = require('../controller/controllerSystem')
const { authenticate , authenticateFull } = require('../controller/authenticate')

route.get('/users',authenticateFull, users)
route.get('/users/usersdata',authenticateFull, usersData)


module.exports = route