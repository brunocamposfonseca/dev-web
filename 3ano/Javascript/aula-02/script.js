var num = 1.90;
typeof(num);

num.toFixed(2);

num.toFixed(2).replace('.', ',');

var word = "Javascript";

word.length;

word.toUpperCase();
word.toLowerCase();

window.document.write(window.document.URL);

var p1 = window.document.getElementsByTagName('p')[0];
window.document.write('<br><br>' + p1.innerText);

document.getElementById("quarto-paragrafo").innerHTML = p1.innerText;

document.getElementById("teste").innerText = "Hello World";

var classes = document.getElementsByClassName("exemplo");
classes[1].innerHTML = "Hello World";

document.querySelector('p').style.backgroundColor = "red";
document.querySelector('p#quarto-paragrafo').style.backgroundColor = "blue";

function calcular(){
    var numero1 = document.getElementById("Numero1").value;
    var numero2 = document.getElementById("Numero2").value;

    var numero1 = Number.parseInt(numero1);
    var numero2 = Number.parseInt(numero2);

    
    var resultado = numero1 + numero2;

    document.getElementById("resultado").innerText = resultado
}