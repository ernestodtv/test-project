


function input(elem) {
    var input = elem.value;
    var resultado = document.getElementById("resultado");

    if(elem.className === "numero") {
        resultado.innerHTML += input;
    } else if (elem.className === "simbolo") {
        console.log('último caracter', resultado.innerHTML.substring(resultado.length - 1, resultado.length))
        if(resultado.innerHTML.substring(resultado.length - 1) === "+" || resultado.innerHTML === "") {
        } else {
            console.log('resultado')
            resultado.innerHTML += input;
        }
    }
    
    
}

function getResult() {
    console.log(document.getElementById("resultado").innerHTML);

}