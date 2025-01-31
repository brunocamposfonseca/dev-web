<?php 
    if($_POST['name'] == "aluno" && $_POST['pass'] == "sesi"){
        echo "Autenticado com sucesso!! <br> <a href='/'>Voltar</a>";
    } else {
        echo "Email ou senha inválida, por favor volte a página de login e tente novamente... <br> <a href='/'></a>";
    }
?>