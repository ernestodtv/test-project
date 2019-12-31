


function input(elem) {
    var input = elem.value;
    var resultado = document.getElementById("resultado");

    if(elem.className === "numero") {
        resultado.innerHTML += input;
    } else if (elem.className === "simbolo") {

        if(resultado.innerHTML.charAt(resultado.innerHTML.length - 1) === "+" || resultado.innerHTML === "") {
            // Do nothing
        } else {

            resultado.innerHTML += input;
            
        }
    }
    
    
}

function getResult() {
    console.log(document.getElementById("resultado").innerHTML);

}