const { dateFormatada, dateHoraFormatada } = require('./controlleDate')
const db = require('../database/connection')

const VerifyRegistro = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                name,
                matricula,
                action
            } = data

            if (action == "entrada") {
                let queryVerifyPonto = `select count(*) as count FROM control_point.control_register_ponto where matricula = ? and dt_insert like '%${dateFormatada()}%' and action = 'entrada'`
                    db.query(queryVerifyPonto, [
                        matricula
                    ], (err, result) => {
                        if (!err) {
                            resolve({
                                success: true,
                                action: "entrada",
                                data: result[0].count
                            })
                        } else {
                            reject({
                                success: false,
                                msg: "ERRO:DATABASE\n" + err
                            })
                        }
                    })
            } else if (action == "saida") {
                let queryVerifyPonto = `select count(*) as count FROM control_point.control_register_ponto where matricula = ? and dt_insert like '%${dateFormatada()}%' and action = 'saida'`
                db.query(queryVerifyPonto, [
                    matricula
                ], (err, result) => {
                    if (!err) {
                        resolve({
                            success: true,
                            action: "saida",
                            data: result[0].count
                        })
                    } else {
                        reject({
                            success: false,
                            msg: "ERRO:DATABASE\n" + err
                        })
                    }
                })
            }

        } catch (err) {
            reject({
                success: false,
                msg: "ERRO: CONTATE O ADMINISTRADOR\n"+err
            })
        }
    })
}


const insertRegistro = (dados, body)=>{
    return new Promise((resolve, reject)=>{
        try{
            const {
                action,
                data
            } = dados

            const {
                name,
                matricula,
            } = body

            if(action == "entrada" && data == 0){
                let insertPonto = `insert into control_point.control_register_ponto (matricula, nome, action) values (?,?,?)`
                db.query(insertPonto,[
                    matricula,
                    name,
                    "entrada"
                ], (err)=>{
                    if(!err){
                        resolve({
                            success: true,
                            msg: "PONTO DE ENTRADA REGISTRADO COM SUCESSO"
                        })
                    }else{
                        reject({
                            success: false,
                            msg: "ERRO AO REGISTRAR PONTO DE ENTRADA"
                        })
                    }
                })
            }else if(action == "entrada" && data == 1){
                resolve({
                    success: true,
                    msg: "PONTO DE ENTRADA JÁ REGISTRADO"
                })
            }

            if(action == "saida" && data == 0){
                let insertPonto = `insert into control_point.control_register_ponto (matricula, nome, action) values (?,?,?)`
                db.query(insertPonto, [
                    matricula,
                    name,
                    "saida"
                ], (err)=>{
                    if(!err){
                        resolve({
                            success: true,
                            msg: "PONTO DE SAIDA REGISTRADO COM SUCESSO"
                        })
                    }else{
                        reject({
                            success: false,
                            msg: "ERRO AO REGISTRAR PONTO DE SAIDA"
                        })
                    }
                })
            }else if(action == "saida" && data == 1){
                resolve({
                    success: true,
                    msg: "PONTO DE SAIDA JÁ REGISTRADO"
                })
            }


        }catch(err){
            reject({
                success: false,
                msg: "ERRO, CONTATE O ADMINISTRADOR\n"+err
            })
        }
    })
}

const registrarPonto = async (req, res) => {
    try{
       let resultVerify = await VerifyRegistro(req.body)
       let resultFinal = await insertRegistro(resultVerify, req.body)
       res.json(resultFinal)
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    registrarPonto
}