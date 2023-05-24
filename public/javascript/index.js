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
//TABLES
const table_result = document.querySelector("#table_result")
const tb_result_body = document.querySelector("#tb_result_body")


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
        .then(response => response.json())
        .then(result => {
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
            if (result.success) {
                if (result.data.length == 1) {
                    nota_data_entrada.innerHTML = "Data: " + result.data[0].data
                    nota_hora_entrada.innerHTML = "Hora: " + result.data[0].Hora
                    nota_matricula_entrada.innerHTML = "Matricula: " + result.data[0].matricula
                } else {
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
            if (result.success) {
                if (result.data.length == 1) {
                    nota_data_saida.innerHTML = "Data: " + result.data[0].data
                    nota_hora_saida.innerHTML = "Hora: " + result.data[0].Hora
                    nota_matricula_saida.innerHTML = "Matricula: " + result.data[0].matricula
                } else {
                    nota_hora_saida.innerHTML = "Sem Registro"
                }
                return
            }
            alert(result.msg)
        })
}



const getHistoric = (matricula) => {
    fetch(`/registro/result/historic?matricula=`+matricula, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                if (result.data.length != 0) {
                    table_result.setAttribute("class", "container-fluid")
                    let table_result_body = ""
                    for (i in result.data) {
                        table_result_body += `<tr>
                    <td>${result.data[i].matricula}</td>
                    <td>${result.data[i].nome}</td>
                    <td>${result.data[i].hora}</td>
                    <td>${result.data[i].action}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16" 
                    onclick="getDataAjustePonto(
                    ${result.data[i].id}
                    )">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>
                    </td>
                    </tr>`
                    }
                    tb_result_body.innerHTML = table_result_body
                }
                return
            }
            alert(result.msg)

        })
}


const getResultPonto = (matricula) => {
    getEntrada(matricula)
    getSaida(matricula)
    getHistoric(matricula)
}

