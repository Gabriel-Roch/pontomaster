const db = require('../database/connection')


const getDataGraficoContas = (req, res) => {
    return new Promise((resolve, reject) => {
        try {

            let query = `SELECT 
            case 
            when active = "disabled" then  "Desativadas"
            else "Ativadas"
            end as name,
            count(*) as y
            FROM control_point.control_users where lv_access != 2 group by active `;

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