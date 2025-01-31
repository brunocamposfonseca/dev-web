let c = parseFloat(prompt("Digite o capital inicial:"));
let i = parseFloat(prompt("Digite a taxa de juros(em porcentagem):"));
let t = parseInt(prompt("Digite o tempo que será investido(em meses):"));

let m = c * ((1+(i/100))**t)

alert(`O montante final será de: ${m.toFixed(2)}`)

