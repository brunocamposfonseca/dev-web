function genio(){
    var num = Number(document.getElementById('num').value);
    var res = window.document.getElementById('res');
    console.log("CLICOU, HEY!");
    console.log(num)
    let resp = (num%2) == 1 ? "impar" : "par"
    res.innerText = resp
}