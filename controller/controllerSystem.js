
const db = require('../database/connection')

const getDataUsers = ()=>{
    return new Promise((resolve, reject)=>{
  try{ 
        let query = `select 
        id,
        email,
        name,
        active,
        case
        when lv_access = '1' then 'USER' 
        end as lv_access,
        matricula,
        dt_insert 
        from control_point.control_users where lv_access != '3' order by active`

            db.query(query, (err, result)=>{
                if(!err){
                        resolve({
                            success: true,
                            data: result
                        })
                }else{
                    reject({
                        success: false,
                        msg: "erro:GetDataUsers\n" + err 
                    })
                }

            })
        }catch(err){
            reject({
                success: false,
                msg: "erro:GetDataUsers\n" + err 
            })
        }
    })
}


const users = (req, res)=>{
    res.render("System/users",{
        email : req.session.email,
        name : req.session.name,
        lv_access : req.session.lv_access,
        title : "CONTROLE DE USUARIOS"
    })
}


const update = (id, action) =>{
    
    try{
        return new Promise((resolve, reject)=>{  
        let queryDisable = `update control_point.control_users set active = 'disabled' where id = '${id}'`
        let queryEnabled = `update control_point.control_users set active = 'enabled' where id = '${id}'`
        
        if(action == "enabled"){
            db.query(queryEnabled, (err)=>{
                if(!err)
                resolve({
                    success: true,
                    msg: "ITEM ATUALIZADO COM SUCESSO"
                })
                else
                reject({
                    success: false,
                    msg: "ERRO:\n"+err
                })
            })
        }else if(action == "disabled"){
            db.query(queryDisable, (err)=>{
                if(!err)
                resolve({
                    success: true,
                    msg: "ITEM ATUALIZADO COM SUCESSO"
                })
                else
                reject({
                    success: false,
                    msg: "ERRO:\n"+err
                })
            })
        }
    })
}catch(err){
    reject({
        success: false,
        msg: "ERRO:\n"+err
    })
}
        
}

const usersupdate = async (req, res)=>{
    try{
        let result = await update(req.params.id, req.params.action)
        res.send(result)
    }catch(err){
        res.json(err)
    }
}


const usersData = async (req, res)=>{
    try{
        let result = await getDataUsers()
        res.json(result.data)
    }catch(err){
        res.json(err)
    }
}


module.exports = {
    users,
    usersData,
    usersupdate
}