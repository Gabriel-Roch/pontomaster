const index = (req, res)=>{
    res.render('index',{
        email : req.session.email,
        name : req.session.name,
        lv_access : req.session.lv_access,
        matricula : req.session.matricula,
        title: "HOME"
    });
}

module.exports = {
    index
}