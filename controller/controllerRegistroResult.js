const db = require('../database/connection')
const { dateFormatada , dateHoraFormatada } = require('./controlleDate')

const getEntrada = (data) => {
    return new Promise((resolve, reject) => {
        try {

            const {
                matricula
            } = data

            let query = `select 
            matricula, 
            nome, 
            DATE_FORMAT(dt_insert, '%d/%m/%Y') AS data,
            DATE_FORMAT(dt_insert, '%H:%i') as Hora
            FROM 
            control_point.control_register_ponto 
            where matricula = ? and dt_insert like '%${dateFormatada()}%' and action = 'entrada'`

            db.query(query, [
                matricula
            ], (err, result)=>{
                if(!err){
                    resolve({
                        success: true,
                        data: result
                    })
                }else{
                    reject({
                        success: false,
                        msg: "ERRO:DATABASE\n"+err
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO AO CARREGAR REGISTRO DOS PONTOS, CONTATE O ADMNISTRADOR DO SISTEMA"
            })
        }
    })
}

const getSaida = (data) => {
    return new Promise((resolve, reject) => {
        try {

            const {
                matricula
            } = data

            let query = `select 
            matricula, 
            nome, 
            DATE_FORMAT(dt_insert, '%d/%m/%Y') AS data,
            DATE_FORMAT(dt_insert, '%H:%i') as Hora
            FROM 
            control_point.control_register_ponto 
            where matricula = ? and dt_insert like '%${dateFormatada()}%' and action = 'saida'`

            db.query(query, [
                matricula
            ], (err, result)=>{
                if(!err){
                    resolve({
                        success: true,
                        data: result
                    })
                }else{
                    reject({
                        success: false,
                        msg: "ERRO:DATABASE\n"+err
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO AO CARREGAR REGISTRO DOS PONTOS, CONTATE O ADMNISTRADOR DO SISTEMA"
            })
        }
    })
}


const getRegistroResultEntrada = async (req, res) => {
    try{
        let resultEntrada = await getEntrada(req.query)
        res.json(resultEntrada)
    }catch(err){
        res.json(err)
    }
    
}

const getRegistroResultSaida = async (req, res) => {
    try{
        let resultSaida = await getSaida(req.query)
        res.json(resultSaida)
    }catch(err){
        res.json(err)
    }
}


module.exports = {
    getRegistroResultEntrada,
    getRegistroResultSaida
}