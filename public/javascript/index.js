const nome_entrada = document.querySelector("#nome_entrada")
const nome_saida = document.querySelector("#nome_saida")
const matricula_entrada = document.querySelector("#matricula_entrada")
const matricula_saida = document.querySelector("#matricula_saida")

const RegistroEntrada = (nome, matricula)=>{
    nome_entrada.innerHTML = "Nome: "+nome
    matricula_entrada.innerHTML = "Matricula: "+matricula
}

const RegistroSaida = (nome, matricula)=>{
    nome_saida.innerHTML = "Nome: "+nome
    matricula_saida.innerHTML = "Matricula: "+matricula
}

const registrar = (name, matricula, action)=>{
     let data = {
        name: name,
        matricula: matricula,
        action: action
    }
    fetch('/registro/ponto',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    location.reload()
}
