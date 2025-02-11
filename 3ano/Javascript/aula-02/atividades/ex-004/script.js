function acres(){
    var valor = Number.parseFloat(document.getElementById('valor').value);
    var porc = Number.parseFloat(document.getElementById('porc').value);
    var res = window.document.getElementById('res');

    var acres = ((porc / 100) * valor) + valor;

    res.innerText = acres
}