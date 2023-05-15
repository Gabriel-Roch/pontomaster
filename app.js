const express = require("express");
const session = require('express-session');
const bodyparse = require('body-parser')
const app = express();
const dotenv = require("dotenv")

// -----------------------------------CONSIFS-------------------------------------------
dotenv.config()
app.use(bodyparse.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname));
app.use(session({ secret: 'anythdshdosiauhdasoadasing', resave: true, saveUninitialized: true, maxAge: 360000 }));
// ----------------------------------REQUIRE ROUTES-------------------------------------
const index = require('./routes/routeIndex')
const login = require('./routes/routeAuth')
const system = require('./routes/routeSystem')
const registroPonto = require('./routes/RouteRegistro')
// ----------------------------------USE ROUTES-----------------------------------------
app.use(index)
app.use(login)
app.use(system)
app.use(registroPonto)
// ---------------------------------LISTEN SERVER---------------------------------------

app.use(function(req, res, next) {
    res.render('notfound', { url: req.url })
});

app.listen(`${process.env.PORT_APPLICATION}`,()=>{
    console.log("SERVE IS RUNNING")
})