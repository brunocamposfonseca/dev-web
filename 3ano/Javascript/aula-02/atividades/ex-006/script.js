function verif(){
    var age = Number.parseInt(window.document.getElementById("age").value)
    var res = window.document.getElementById("res");

    if(age < 18){
        res.innerText = 'Você é menor de idade'
    }else{
        res.innerText = 'Você é maior de idade'
    }
}