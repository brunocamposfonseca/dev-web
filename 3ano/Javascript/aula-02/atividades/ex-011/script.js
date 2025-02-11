function cal(){
    var num = window.document.getElementById("num").value;
    var res = window.document.getElementById("res");
    var val
    if(num%2 == 1){
        val = "Impar"
    } else {
        val = "Par"
    }

    res.innerText = val
}