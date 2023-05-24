const form = document.getElementById('form_cadastro');
const btn_cadastrar =  document.querySelector("#btn_cadastrar")
const input_empresa = document.querySelector("#empresa")


form.addEventListener('submit', (e) => {
    btn_cadastrar.disabled = true;
    btn_cadastrar.innerHTML = "Cadastrando"
    e.preventDefault()
    const frm_data = new FormData(form)
    const data = Object.fromEntries(frm_data)
    fetch('/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert(result.msg)
                document.location = '/login'
                return
            }
            alert(result.msg)
            btn_cadastrar.disabled = false;
            btn_cadastrar.innerHTML = "Cadastrar"
        })
})


const empresas = ()=>{
    fetch('/empresas',{
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response=>response.json())
    .then(result=>{
        let data_empresas = ""
        for(i in result.data){
            data_empresas += `
            <option value="${result.data[i].empresas}">${result.data[i].empresas}</option>`
        }
        input_empresa.innerHTML = data_empresas
    })
}


empresas()