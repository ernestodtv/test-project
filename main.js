function input(elem) {
    var input = elem.value;
    var resultado = document.getElementById("resultado");
    if (elem.className.includes("numero")) {
        if (!resultado.innerHTML.includes("=")) {
            resultado.innerHTML += input;
        } else {
            resultado.innerHTML = input;
        }
    } else if (elem.className.includes("simbolo")) {
        if (resultado.innerHTML.charAt(resultado.innerHTML.length - 1) === "+" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
            // Do nothing
        } else {
            resultado.innerHTML += input;
        }
    }
}

function getResult() {
    var res = document.getElementById("resultado");
    if (res.innerHTML.includes("+")) {
        if (res.innerHTML.charAt(res.innerHTML.length - 1) === "+" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
            //Do nothing
        } else {
            var numbers = res.innerHTML.split("+");
            var sum = 0;
    
            for (var i = 0; i < numbers.length; i++) {
                numbers[i] = Number(numbers[i]);
                sum += numbers[i];
            }
    
            res.innerHTML = res.innerHTML + " = " + sum;
        }

    } else if (res.innerHTML.includes("-")) {
        if (res.innerHTML.charAt(res.innerHTML.length - 1) === "-" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
            //Do nothing
        } else {
            var numbers = res.innerHTML.split("-");
            var resta;
    
            for (var i = 0; i < numbers.length; i++) {
                numbers[i] = Number(numbers[i]);
                resta = numbers[0];
                resta -= numbers[i];
            }
    
            res.innerHTML = res.innerHTML + " = " + resta;
        }

    } else if (res.innerHTML.includes("*")) {
        if (res.innerHTML.charAt(res.innerHTML.length - 1) === "*" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
            //Do nothing
        } else {
            var numbers = res.innerHTML.split("*");
            var mult;
    
            for (var i = 0; i < numbers.length; i++) {
                numbers[i] = Number(numbers[i]);
                mult = numbers[0];
                mult *= numbers[i];
            }
    
            res.innerHTML = res.innerHTML + " = " + mult;
        }

    } else if (res.innerHTML.includes("/")) {
        if (res.innerHTML.charAt(res.innerHTML.length - 1) === "/" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
            //Do nothing
        } else {
            var numbers = res.innerHTML.split("/");
            var div;
    
            for (var i = 0; i < numbers.length; i++) {
                numbers[i] = Number(numbers[i]);
                div = numbers[0];
                div /= numbers[i];
            }
    
            res.innerHTML = res.innerHTML + " = " + div;
        }

    }
}


function clearResult() {
    document.getElementById("resultado").innerHTML = "";
}
