function insert (num) {
    var numero = document.getElementById('resultado') .innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function clean () {
    document.getElementById('resultado').innerHTML = ''
}


function back(){
    var resultado =  document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultadoElement = document.getElementById('resultado')
    var resultado = resultadoElement.innerHTML.trim()
    var ultimoCaractereNumerico = /\d$/.test(resultado)

    if(ultimoCaractereNumerico){
        resultadoElement.innerHTML = eval(resultado).toFixed(2);
    } 
    else{
        alert('Errrooooooooooou!')
        limpar()
    }
}
