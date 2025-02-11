function hi(){
    let nome = window.document.getElementById('nome');

    document.getElementById('hi').innerText = `Hi, ${nome.value}`;
}