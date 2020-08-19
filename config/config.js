


// Adicionar Valor 
function addValue(value){
    let res = document.getElementById("input").value;

    if(true){
        document.getElementById("input").value += value;
    }else{

    }
}

function resultado(){
    let conta = document.getElementById("input").value;
    let resultado = eval(conta)

    document.getElementById('input').value = '';
    document.getElementById('input').value = resultado;

    if(resultado == undefined){
        document.getElementById("input").value = "";
    }
}

function limpar(){
    document.getElementById('input').value = '';
}

function loopresultado(){
    while(true){
        let conta = document.getElementById("input").value;
    let resultado = eval(conta)

    document.getElementById('input').value = '';
    document.getElementById('input').value = resultado;

    if(resultado == undefined){
        document.getElementById("input").value = "";
    }
    }
}

loopresultado();