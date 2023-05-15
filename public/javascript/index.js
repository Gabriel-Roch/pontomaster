//LABEL
const nome_entrada = document.querySelector("#nome_entrada")
const nome_saida = document.querySelector("#nome_saida")
const matricula_entrada = document.querySelector("#matricula_entrada")
const matricula_saida = document.querySelector("#matricula_saida")
//VALORES ENTRADA
const nota_data_entrada = document.querySelector("#nota_data_entrada")
const nota_hora_entrada = document.querySelector("#nota_hora_entrada")
const nota_matricula_entrada = document.querySelector("#nota_matricula_entrada")
//NOTA SAIDA
const nota_data_saida = document.querySelector("#nota_data_saida")
const nota_hora_saida = document.querySelector("#nota_hora_saida")
const nota_matricula_saida = document.querySelector("#nota_matricula_saida")


const RegistroEntrada = (nome, matricula) => {
    nome_entrada.innerHTML = "Nome: " + nome
    matricula_entrada.innerHTML = "Matricula: " + matricula
}


const RegistroSaida = (nome, matricula) => {
    nome_saida.innerHTML = "Nome: " + nome
    matricula_saida.innerHTML = "Matricula: " + matricula
}


const registrar = (name, matricula, action) => {
    let data = {
        name: name,
        matricula: matricula,
        action: action
    }
    fetch('/registro/ponto', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(result=>{
        alert(result.msg)
        location.reload()
    })
    
}


const getEntrada = (matricula) => {
    fetch(`/registro/result/entrada?matricula=${matricula}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            if(result.success){
                if(result.data.length == 1){
                    nota_data_entrada.innerHTML = "Data: "+result.data[0].data
                    nota_hora_entrada.innerHTML = "Hora: "+result.data[0].Hora
                    nota_matricula_entrada.innerHTML = "Matricula: "+result.data[0].matricula
                }else{
                    nota_hora_entrada.innerHTML = "Sem Registro"
                }
                return
            }
            alert(result.msg)
        })
}


const getSaida = (matricula) => {
    fetch(`/registro/result/saida?matricula=${matricula}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            if(result.success){
                if(result.data.length == 1){
                    nota_data_saida.innerHTML = "Data: "+result.data[0].data
                    nota_hora_saida.innerHTML = "Hora: "+result.data[0].Hora
                    nota_matricula_saida.innerHTML = "Matricula: "+result.data[0].matricula
                }else{
                    nota_hora_saida.innerHTML = "Sem Registro"
                }
                return
            }
            alert(result.alert)
        })
}


const getResultPonto = (matricula) => {
    getEntrada(matricula)
    getSaida(matricula)
}
