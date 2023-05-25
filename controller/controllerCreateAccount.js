const db = require('../database/connection')
const { hash } = require('bcrypt')
const { randomInt } = require('crypto')

const verifyPassword = (data) => {
    return new Promise((resolve, reject) => {
        const {
            senha,
            confirme_senha
        } = data

        if (senha == confirme_senha) {
            resolve(true)
        } else {
            reject({
                success: false,
                msg: "SENHAS NÃO CONFEREM"
            })
        }
    })
}

const verifyEmail = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const {
                email,
            } = data

            let query = `SELECT COUNT(email) as cont FROM control_point.control_users WHERE email = ?`;

            db.query(query, [email], (err, result) => {
                if (!err) {
                    if (result[0].cont == 0) {
                        resolve({
                            success: true
                        })
                    } else {
                        reject({
                            success: false,
                            msg: "EMAIL JÁ CADASTRADO"
                        })
                    }
                } else {
                    reject({
                        success: false,
                        erro: "ERRO DATABASE verifyEmail"
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "verifyEmail:" + err + "\nERRO NO SISTEMA, CONTATE O ADMINISTRADOR"
            })
        }
    })
}

const verifyMatricula = (data)=>{
    return new Promise((resolve, reject) => {
        try {
            const {
                matricula,
            } = data

            let query = `SELECT COUNT(matricula) as cont FROM control_point.control_users WHERE matricula = ?`;

            db.query(query, [matricula], (err, result) => {
                if (!err) {
                    if (result[0].cont == 0) {
                        resolve({
                            success: true
                        })
                    } else {
                        reject({
                            success: false,
                            msg: "MATRICULA JÁ CADASTRADA"
                        })
                    }
                } else {
                    reject({
                        success: false,
                        erro: "ERRO DATABASE verifyMatricula"
                    })
                }
            })
        } catch (err) {
            reject({
                success: false,
                msg: "verifyMatricula:" + err + "\nERRO NO SISTEMA, CONTATE O ADMINISTRADOR"
            })
        }
    })
}

const createAccountDatabase = (data) => {
    return new Promise((resolve, reject) => {
        try {
            hash(data.senha, randomInt(10, 16)).then(response=>response)
            .then(senhacrypto=>{
               
            const {
                email,
                nome,
                matricula,
                telefone
            } = data

            let query = "INSERT INTO control_point.control_users (email, `name`, `password`, matricula) VALUES (?,?,?,?)";
            
            db.query(query, [
                email,
                nome,
                senhacrypto,
                matricula
            ], (err) => {
                if (!err) {
                    resolve({
                        success: true,
                        msg: "CONTA CRIADA"
                    })
                } else {
                    reject({
                        success: false,
                        msg: "createAccountDatabase:" + err + "\nERRO NO SISTEMA, CONTATE O ADMINISTRADOR"
                    })
                }
            })
        })
        } catch (err) {
            reject({
                success: false,
                msg: "createAccountDatabase:" + err + "\nERRO NO SISTEMA, CONTATE O ADMINISTRADOR"
            })
        }
    })
}

const registration = async (req, res) => {
    try {
        await verifyPassword(req.body)
        await verifyMatricula(req.body)
        await verifyEmail(req.body)
        let createAccount = await createAccountDatabase(req.body)
        res.json(createAccount)
    } catch (err) {
        res.json(err)
    }
}

const createAccount = (req, res) => {
    res.render('createAccount',{
        title: "CRIAR CONTA"
    })
}

module.exports = {
    createAccount,
    registration
}