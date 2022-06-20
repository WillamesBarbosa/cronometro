function iniciarContagem(){
    tempo = setInterval(function(){    
        let tempo = document.getElementById('telaMilissegundos').innerHTML;
        let somaMilissegundo = parseFloat(tempo) + 1;
        document.getElementById('telaMilissegundos').innerHTML = somaMilissegundo;

        if(somaMilissegundo == 100){
            somaMilissegundo = 0;
            document.getElementById('telaMilissegundos').innerHTML = somaMilissegundo;

            let segundo = document.getElementById('telaSegundo').innerHTML;
            let somaSegundo = parseInt(segundo) + 1;
            document.getElementById('telaSegundo').innerHTML = somaSegundo;

            if(somaSegundo == 60){
                somaSegundo = 0;
                document.getElementById('telaSegundo').innerHTML = somaSegundo;
                
                let minuto = document.getElementById('telaMinuto').innerHTML;
                let somaMinuto = parseInt(minuto) + 1;
                document.getElementById('telaMinuto').innerHTML = somaMinuto;
                
                if(somaMinuto == 60){
                    somaMinuto = 0;
                    document.getElementById('telaMinuto').innerHTML = somaMinuto;
        
                    let hora = document.getElementById('telaHora').innerHTML;
                    let somaHora = parseInt(hora) + 1;
                    document.getElementById('telaHora').innerHTML = somaHora;
                }
            }
        }
        

    }, 0010);
}

function pararContagem(){
    clearInterval(tempo);
}
