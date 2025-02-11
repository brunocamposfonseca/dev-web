function cal(){
    let numMax = 0
    var num1 = Number.parseFloat(window.document.getElementById("num1").value);
    var num2 = Number.parseFloat(window.document.getElementById("num2").value);
    var num3 = Number.parseFloat(window.document.getElementById("num3").value);
    var res = window.document.getElementById("res");

    var arr = [];
    arr.push(num1, num2, num3);

    arr.forEach(i => {
        if(i > numMax){
            numMax = i
        }
    });

    console.log(numMax)
    res.innerText = numMax
}