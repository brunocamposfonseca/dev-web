function cal(){
    var num1 = Number.parseFloat(window.document.getElementById("num1").value);
    var num2 = Number.parseInt(window.document.getElementById("num2").value);
    var op = window.document.getElementById("op").value;

    var res = window.document.getElementById("res");
    var val

    switch (op) {
        case '+':
            val = num1 + num2
            break;
        case '-':
            val = num1 - num2
            break;
        case '/':
            val = num1 / num2
            break;
        case '*':
            val = num1 * num2
            break;
        default:
            break;
    }
    res.innerText = val
}