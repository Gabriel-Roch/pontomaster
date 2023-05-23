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
                        msg: "ERRO:DATABASE getEntrada\n"+err
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
                        msg: "ERRO:DATABASE getSaida\n"+err
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


const getHistoric = (data)=> {
    return new Promise((resolve, reject)=>{
        try{

            const {
                matricula
            } = data

            let queryHistoric = `SELECT
            id,
            matricula,
            nome,
            DATE_FORMAT(dt_insert, '%d/%m/%Y %H:%i:%s') as hora,
            action
            FROM control_point.control_register_ponto 
            where matricula = ? order by dt_insert desc limit 14`;

            db.query(queryHistoric,[
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
                        msg: "ERRO: DATABASE getHistoric\n"+err
                    })
                }
            })

        }catch(err){
            reject({
                success: false,
                msg: "ERRO:getHistoric\n"+err
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


const getRegistroHistoric = async (req, res)=>{
   try{
        let resultHistoric = await getHistoric(req.query)
        res.json(resultHistoric)
   }catch(err){
    res.json(err)
   }

}

module.exports = {
    getRegistroResultEntrada,
    getRegistroResultSaida,
    getRegistroHistoric
}