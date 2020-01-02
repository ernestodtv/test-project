function input(elem) {
    var input = elem.value;
    var resultado = document.getElementById("resultado");

    if (elem.className === "numero") {
        if (!resultado.innerHTML.includes("=")) {
            resultado.innerHTML += input
        } else {
            resultado.innerHTML = input
        }
    } else if (elem.className === "simbolo") {
        if (resultado.innerHTML.charAt(resultado.innerHTML.length - 1) === "+" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
            // Do nothing
        } else {
            resultado.innerHTML += input
        }
    }
}

function getResult() {
    var res = document.getElementById("resultado")
    if (res.innerHTML.charAt(res.innerHTML.length - 1) === "+" || resultado.innerHTML === "" || resultado.innerHTML.includes("=")) {
        //Do nothing
    } else {
        var numbers = res.innerHTML.split("+")
        var sum = 0

        for (var i = 0; i < numbers.length; i++) {
            numbers[i] = Number(numbers[i])
            sum += numbers[i]
        }

        res.innerHTML = res.innerHTML + " = " + sum

    }
}

function clearResult() {
    document.getElementById("resultado").innerHTML = ""
}