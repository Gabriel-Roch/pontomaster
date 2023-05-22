const db = require("../database/connection")


const getDataPonto = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                id
            } = data

            let query = `SELECT
            id,
            matricula,
            nome,
            DATE_FORMAT(dt_insert, '%Y-%m-%dT%H:%i') as data,
            DATE_FORMAT(dt_insert, '%Y-%m-%dT%H:%i') as dt_insert,
            action
			FROM control_point.control_register_ponto 
            where id = ?`

            db.query(query, [
                id
            ], (err, result) => {
                if (!err) {
                    if (result.length != 0) {
                        resolve({
                            success: true,
                            data: result
                        })
                    } else {
                        reject({
                            success: false,
                            msg: "REGISTRO NÃO ENCONTRADO"
                        })
                    }
                } else {
                    reject({
                        success: false,
                        msg: "ERRO DATABASE \n" + err
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO, getDataPonto\n" + err
            })
        }
    })
}


const insertAjuste = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                ajuste_new_date,
                ajuste_remark,
                hidden_ajuste_old_date,
                hidden_ajuste_id,
                hidden_ajuste_nome,
                hidden_ajuste_matricula,
                hidden_ajuste_action
            } = data

            let query = `insert into control_point.control_data_ajustes 
            (id_ajuste, matricula, tipo, old_date, new_date, remark, solicitante_nome)
            values
            (?,?,?,?,?,?,?)`;

            db.query(query, [
                hidden_ajuste_id,
                hidden_ajuste_matricula,
                hidden_ajuste_action,
                hidden_ajuste_old_date,
                ajuste_new_date,
                ajuste_remark,
                hidden_ajuste_nome
            ], (err) => {
                if (!err) {
                    resolve({
                        success: true,
                        msg: "AJUSTE SOLICITADO COM SUCESSO"
                    })
                } else {
                    reject({
                        success: false,
                        msg: "ERRO: DATABASE\n" + err
                    })
                }
            })

        } catch (err) {
            reject({
                success: false,
                msg: "ERRO AO REGISTRAR AJUSTE DE PONTO\n" + err
            })
        }
    })
}


const solicitarAjuste = async (req, res) => {
    try {
        let resultDataPonto = await getDataPonto(req.query)
        res.json(resultDataPonto)
    } catch (err) {
        res.json(err)
    }
}


const cadastrarajuste = async (req, res) => {
    try {
        let resultInsert = await insertAjuste(req.body)
        res.json(resultInsert)
    } catch (err) {
        res.json(err)
    }
}


module.exports = {
    solicitarAjuste,
    cadastrarajuste
}