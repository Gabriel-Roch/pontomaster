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
        when lv_access = '2' then 'ADMIN'
        end as lv_access,
        matricula,
        dt_insert 
        from control_point.control_users order by dt_insert desc`

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
    usersData
}