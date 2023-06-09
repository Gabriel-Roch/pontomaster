const db = require('../database/connection')


const getDataGraficoContas = (req, res) => {
    return new Promise((resolve, reject) => {
        try {

            let query = `SELECT 
            CASE
                WHEN active = 'disabled' THEN 'Desativadas'
                ELSE 'Ativadas'
            END AS name,
            COUNT(*) AS y
        FROM
            control_point.control_users
        WHERE
            lv_access != 3
        GROUP BY active 	
        `;

            db.query(query, (err, result) => {
                if (!err) {
                    resolve({
                        success: true,
                        data: result
                    })
                } else {
                    reject({
                        success: false,
                        msg: err
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO: GETGRAFICOCONTAS\n" + err
            })
        }
    })
}

const apiGraficoContas = async (req, res) => {
    try{
        let result = await getDataGraficoContas()
        res.json(result.data)
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    apiGraficoContas
}