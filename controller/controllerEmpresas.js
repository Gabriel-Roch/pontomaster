const db = require("../database/connection")

const getDataEmpresa = () => {
    return new Promise((resolve, reject) => {
        try {

            let query = `SELECT 
    empresas
FROM
    control_point.control_data_empresas;`

            db.query(query, (err, result) => {
                if (!err) {
                    resolve({
                        success: true,
                        data: result
                    })
                } else {
                    reject({
                        success: false,
                        msg: "ERRO:DATABASE getDataEmpresa" + err
                    })
                }
            })

        } catch (err) {
            reject({
                success: false,
                msg: "ERRO: getDataEmpresa, Contate o administrador do sistema" + err
            })
        }
    })
}


const getEmpresas = async (req, res) => {
    try{
        let resultEmpresas = await getDataEmpresa()
        res.json(resultEmpresas)
    }catch(err){
        res.json(err)
    }
}

module.exports = {
    getEmpresas
}