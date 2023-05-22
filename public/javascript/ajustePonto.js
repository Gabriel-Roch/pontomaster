const modal_ajuste_ponto = document.querySelector("#modal_ajuste_ponto")
const open_modal_ajuste = document.querySelector("#open_modal_ajuste")

//inputs
const title_ajuste = document.querySelector("#title_ajuste")
const ajuste_matricula = document.querySelector("#ajuste_matricula")
const ajuste_action = document.querySelector("#ajuste_action")
const input_origin_date = document.querySelector("#input_origin_date")

//HIDDEN INPUTS
const hiddem_ajuste_old_date  = document.querySelector("#hiddem_ajuste_old_date")
const hidden_ajuste_id = document.querySelector("#hidden_ajuste_id")
const hidden_ajuste_nome = document.querySelector("#hidden_ajuste_nome")
const hidden_ajuste_matricula = document.querySelector("#hidden_ajuste_matricula")
const hidden_ajuste_action = document.querySelector("#hidden_ajuste_action")


//forms
const form_ajuste_ponto = document.querySelector("#form_ajuste_ponto")

const getDataAjustePonto = (id, matricula)=>{
    fetch(`/ajuste/solicitarajuste?id=${id}`,{
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.success === true){
            input_new_date.value = ""
            title_ajuste.innerHTML = "Ajuste de Ponto: " + result.data[0].nome
            ajuste_action.innerHTML = "Tipo: " + result.data[0].action
            ajuste_matricula.innerHTML = "Matricula: " + result.data[0].matricula
            input_origin_date.value = result.data[0].data
            input_new_date.value = result.data[0].data
            open_modal_ajuste.click()
            //hidden inputs
            hidden_ajuste_id.value = id
            hiddem_ajuste_old_date.value = result.data[0].dt_insert
            hidden_ajuste_nome.value = result.data[0].nome
            hidden_ajuste_matricula.value = result.data[0].matricula
            hidden_ajuste_action.value = result.data[0].action
            return
        }
        alert(result.msg)
    })
}


form_ajuste_ponto.addEventListener("submit", (e)=>{
    e.preventDefault()
    const frm_data = new FormData(form_ajuste_ponto)
    const data = Object.fromEntries(frm_data)
    fetch('/ajuste/cadastrarajuste',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.success === true){
            alert(result.msg)
            location.reload()
            return
        }
            alert(result.msg)
    })
})