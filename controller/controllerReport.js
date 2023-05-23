const db = require('../database/connection')

const getCategorias = () => {
    return new Promise((resolve, reject) => {
        try {

            let query = `SELECT * FROM control_point.control_master_reports;`

            db.query(query, (err, result) => {
                if (!err) {
                    resolve({
                        success: true,
                        data: result
                    })
                } else {
                    reject({
                        success: false,
                        msg: "ERRO: DATABASE getCategorias\n" + err
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO AO CARREGAR CATEGORIAS\n" + err
            })
        }
    })
}

const insertReport = (data) => {
    return new Promise((resolve, reject) => {
        try {

            const {
                report_categoria,
                report_remark,
                hidden_report_name,
                hidden_report_matricula
            } = data

            let query = `insert into control_point.control_data_reports 
            (nome_solicitante, matricula_solicitante, categoria, remark)
            values
            (?,?,?,?)`

            db.query(query, [
                hidden_report_name,
                hidden_report_matricula,
                report_categoria,
                report_remark,
            ], (err) => {
                if (!err) {
                    resolve({
                        success: true,
                        msg: "TICKERT CRIADO COM SUCESSO"
                    })
                } else {
                    reject({
                        success: false,
                        msg: "ERRO: DATABASE insertReport\n" + err
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO AO REGISTRAR TICKET"
            })
        }
    })
}


const registrar = async (req, res) => {
    try{
        let resultRegistro = await insertReport(req.body)
        res.json(resultRegistro)
    }catch(err){
        res.json(err)
    }
}


const categorias = async (req, res) => {
    try {
        let resultCategoria = await getCategorias()
        res.json(resultCategoria)
    } catch (err) {
        res.json(err)
    }
}


module.exports = {
    registrar,
    categorias
}