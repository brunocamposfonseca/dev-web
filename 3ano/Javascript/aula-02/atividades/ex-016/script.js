const btn = document.querySelector("#btn")
const res = window.document.getElementById("res")
let count = 0

btn.addEventListener("click", (event) => {
    count += 1;
    res.innerText = count
})