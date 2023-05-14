const enabled = (id, name, matricula, lv_access)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/users/update/${id}/enabled`,{
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            resolve(true)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

const disabled = (id, name, matricula, lv_access)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/users/update/${id}/disabled`,{
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            resolve(true)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

const updateDisable = async (id, name, matricula, lv_access)=>{
    try{
        await disabled(id, name, matricula, lv_access)
        tableDisabled()
        tableEnabled()
        UpdateGraficoContas()
    }catch(err){
        console.log(err)
    }
}

const updateEnable = async (id, name, matricula, lv_access)=>{
    try{
        await enabled(id, name, matricula, lv_access)
        tableDisabled()
        tableEnabled()
        UpdateGraficoContas()
    }catch(err){
        console.log(err)
    }
}

atualizarUsers()