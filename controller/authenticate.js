const authenticate = (req, res, next)=>{
    if(req.session.email && req.session.active == "enabled")
    next()
    else
    res.render('login',{
        title: "LOGIN"
    })
}

const authenticateFull = (req, res, next)=>{
    if(req.session.email && req.session.lv_access == 2 && req.session.active == "enabled" )
    next()
    else
    res.render('login',{
        title: "LOGIN"
    })
}

module.exports = {
    authenticate,
    authenticateFull
}