function cal(){
    var num1 = Number.parseFloat(window.document.getElementById("num1").value);
    var num2 = Number.parseFloat(window.document.getElementById("num2").value);
    var num3 = Number.parseFloat(window.document.getElementById("num3").value);
    var res = window.document.getElementById("res");

    var validade = ''
    var tipo = ''

    if(num1 + num2 > num3){
        validade = "Válido"
    } else {
        validade = "Inválido"
    }

    if((num1 + num2 + num3) / 3 == num1){
        tipo = "Equilátero"
    } else if(num1 == num2){
        tipo = "Isósceles"
    } else if (num1 != num2){
        tipo = "Escaleno"
    }

    if (num1**2 + num2**2 == num3**2){
        tipo = "Retângulo"
    }

    console.log(num1 ** 2 + num2 ** 2)

    res.innerText = `O triângulo ${tipo} ${tipo != "Retângulo" ? 'é validade' : ''}`;
}