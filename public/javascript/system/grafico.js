const UpdateGraficoContas = ()=>{
    fetch('/users/graficos/contas')
    .then(response => response.json())
    .then(result => {
        let total = ""
        let data = ""
        if(result.length  == 2){
             data = result
             total = result[0].y + result[1].y
        }else{
            data = [
                { name : `${result[0].name}`, y : result[0].y}
            ]
            total = result[0].y
        }
        Highcharts.chart('grafico', {
            chart: {
                type: 'pie',
                width: 400,
                height: 300
            },
            title: {
                text: `TOTAL: ${total}`
            },
            series: [{
                name: 'Quantidade',
                data: data.map(item => [item.name, item.y])
            }]
        });
    })
}

UpdateGraficoContas()


