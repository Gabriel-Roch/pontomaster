const report_categorias = document.querySelector("#report_categorias")
const form_report = document.querySelector("#form_report")

const getCategoria = () =>{
    fetch("/report/caregorias",{
        method: 'GET',
        headers : {
            "Content-Type": "application/json"
        }
    })
    .then(response=>response.json())
    .then(result=>{
        let categorias = ""
        for(i in result.data){
           categorias += `<option value="${result.data[i].categoria}">${result.data[i].categoria}</option>`
        }
        report_categorias.innerHTML = categorias
    })
}

form_report.addEventListener("submit", (e)=>{
    e.preventDefault()
    const frm_data = new FormData(form_report)
    const data = Object.fromEntries(frm_data)
    fetch('/report/registrar',{
        method: 'POST',
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

