const tableDisabled = ()=>{
    fetch('/users/usersdata', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            let data;
            for (i in result) {
                if(result[i].active == "disabled"){
                    data += `
        <tr>
        <td>${result[i].name}</td>
        <td>${result[i].matricula}</td>
        <td>${result[i].email}</td>
        <td>${result[i].lv_access}</td>
        <td class="col-1">${result[i].dt_insert}</td>
        <td class="col-1">
        <button onclick="updateEnable(
            '${result[i].id}',
            '${result[i].name}',
            '${result[i].matricula}',
            '${result[i].lv_access}'
        )" class="bg-success" style="color:white" >ATIVAR</button>
        </td>
        </tr>`
    }
 }
            if ( $.fn.DataTable.isDataTable('#table_users_disabled') ) {
                $('#table_users_disabled').DataTable().destroy();
              }
              $('#table_users_disabled tbody').empty();
              $('#table_users_disabled > tbody:last').append(data);
              $('#table_users_disabled').dataTable({
                    autoWidth:false, 
                    info:false, 
                    JQueryUI:true, 
                    ordering:false, 
                    paging:false, 
                    scrollY:"500px", 
                    scrollCollapse:true
              });
        })
}

const tableEnabled = ()=>{
    fetch('/users/usersdata', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            let data;
            for (i in result) {
                if(result[i].active == "enabled"){
                    data += `
        <tr>
        <td>${result[i].name}</td>
        <td>${result[i].matricula}</td>
        <td>${result[i].email}</td>
        <td>${result[i].lv_access}</td>
        <td class="col-1">${result[i].dt_insert}</td>
        <td class="col-1">
        <button onclick="updateDisable(
            '${result[i].id}',
            '${result[i].name}',
            '${result[i].matricula}',
            '${result[i].lv_access}'
        )" class="bg-danger" style="color:white" >DESATIVAR</button>
        </td>
        </tr>`
    }
 }
            if ( $.fn.DataTable.isDataTable('#table_users_enabled') ) {
                $('#table_users_enabled').DataTable().destroy();
              }
              $('#table_users_enabled tbody').empty();
              $('#table_users_enabled > tbody:last').append(data);
              $('#table_users_enabled').dataTable({
                    autoWidth:false, 
                    info:false, 
                    JQueryUI:true, 
                    ordering:false, 
                    paging:false, 
                    scrollY:"500px", 
                    scrollCollapse:true
              });
        })
}


tableDisabled()
tableEnabled()






