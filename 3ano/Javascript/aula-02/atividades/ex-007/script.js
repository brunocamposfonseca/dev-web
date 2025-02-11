function verif(){
    var num = Number.parseInt(window.document.getElementById("num").value)
    var res = window.document.getElementById("res");

    if(num < 0){
        res.innerText = 'Negativo'
    }else if(num > 0){
        res.innerText = 'Positivo'
    } else {
        res.innerText = 'Zero'
    }
}