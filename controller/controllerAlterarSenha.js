const { compare, hash } = require('bcrypt')
const { randomInt } = require('crypto')


const verifySenha = (data) => {
    return new Promise((resolve, reject) => {
        try {

            const {
                current_password,
                alterar_senha_matricula
            } = data

            let query = "select `password` from control_point.control_users where matricula = ?"

            db.query(query, [alterar_senha_matricula], (err, result) => {
                if (!err) {
                    compare(current_password, result[0].password)
                        .then(response => response)
                        .then(descryptpassword => {
                            if (descryptpassword == true) {
                                resolve(true)
                            } else {
                                reject({
                                    success: false,
                                    msg: "SENHA ATUAL NÃO CONFERE"
                                })
                            }
                        })
                } else {
                    reject({
                        success: false,
                        msg: "ERRO:DATABASE verifyAlteraçãoSenha" + err
                    })
                }
            })

        } catch (err) {
            reject({
                success: false,
                msg: "ERRO, VerifySenha: Contate o administrador" + err
            })
        }
    })
}

const confirmSenha = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                new_password,
                confirm_password,
            } = data

            if (new_password == confirm_password) {
                resolve(true)
            } else {
                reject({
                    success: false,
                    msg: "OS CAMPOS DE NOVA SENHA NÃO CONFEREM"
                })
            }

        } catch (err) {
            reject({
                success: false,
                msg: "ERRO, confirmSenha: Contate o administrador" + err
            })
        }
    })
}

const updateSenha = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                new_password,
                alterar_senha_matricula
            } = data

            let query = `UPDATE control_point.control_users SET password = ? WHERE matricula = ?`

            hash(new_password, randomInt(10, 16)).then(response => response)
                .then(senhacrypto => {
                    db.query(query, [
                        senhacrypto,
                        alterar_senha_matricula
                    ], (err) => {
                        if (!err) {
                            resolve({
                                success: true,
                                msg: "SENHA ALTERADA COM SUCESSO"
                            })
                        } else {
                            reject({
                                success: false,
                                msg: "ERRO: DATABASE updateSenha" + err
                            })
                        }
                    })
                })
        } catch (err) {
            reject({
                success: false,
                msg: "ERRO, updateSenha: Contate o administrador" + err
            })
        }
    })
}



const alterarSenha = async (req, res) => {
    try {
        await verifySenha(req.body)
        await confirmSenha(req.body)
        let resultUpdateSenha = await updateSenha(req.body)
        res.json(resultUpdateSenha)
    } catch (err) {
        res.json(err)
    }

}



module.exports = {
    alterarSenha
}