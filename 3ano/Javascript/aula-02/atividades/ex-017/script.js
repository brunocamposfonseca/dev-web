document.addEventListener("DOMContentLoaded", (event) => {
    window.document.body.innerHTML = '<div id="div"><h1 id="msg">Hello World</h1></div>';
    let div = window.document.getElementById("div");
    let msg = window.document.getElementById("msg");

    div.style.width = "600px";
    div.style.height = "600px";
    div.style.backgroundColor = "black";

    msg.style.color = "white";
    msg.style.fontSize = "20px";
    msg.style.fontFamily = "Arial";
})