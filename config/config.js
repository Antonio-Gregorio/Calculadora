
// Adicionar Valor 
function addValue(value){
    document.querySelector('input#input').value += value;
}

function resultado(){
let conta = document.querySelector("input#input").value;
let resultado = eval(conta)

document.querySelector('input#input').value = '';
document.querySelector('input#input').value = resultado;

if(resultado == undefined){
    document.querySelector("input#input").value = "";
}
}

function limpar(){
document.querySelector('input#input').value = '';
}

function loopresultado(){
while(true){
    let conta = document.querySelector('input#input').value;
let resultado = eval(conta)

document.querySelector('input#input').value = '';
document.querySelector('input#input').value = resultado;

if(resultado == undefined){
    document.querySelector('input#input').value = "";
}
}
}

