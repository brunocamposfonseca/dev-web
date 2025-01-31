console.log("hello world!");

window.alert("Hello world!");
alert("Hello world!");

var msg = window.confirm("Confirme");
console.log(msg);

var testePrompt = prompt("Digite seu nombre");
console.log(testePrompt);

var n1 = prompt("Digite o primeiro número:");
var n2 = prompt("Digite outro número:");
alert("A soma dos números é " + (n1 + n2 ));
console.log(typeof(n1) + typeof(n2));

var num1 = Number.parseInt(window.prompt("Digite o primeiro número:"));
var num2 = Number.parseInt(window.prompt("Digite outro número:"));
var res = num1 + num2;
alert("A soma dos números é " + res);
