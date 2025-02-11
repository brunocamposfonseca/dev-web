function logar(){
    var name = window.document.getElementById("name").value;
    var pass = window.document.getElementById("pass").value;
    var res = window.document.getElementById("res");

    if(name == 'admin' && pass == '12345'){
        res.innerText = 'Bem vindo!'
    }else {
        res.innerText = 'Login errado...'
    }
}