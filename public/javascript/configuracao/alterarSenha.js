const form_alterar_password = document.querySelector("#form_alterar_password")

form_alterar_password.addEventListener("submit", (e)=>{
    e.preventDefault()
    const frm_Data = new FormData(form_alterar_password)
    const data = Object.fromEntries(frm_Data)
    fetch("/alterarsenha",{
        method: "PUT",
        body:  JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.success){
            alert(result.msg)
            return
        }

        alert(result.msg)
    })
})
