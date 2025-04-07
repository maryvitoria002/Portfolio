<?php 
$senha_correta = "Webber";

if (isset($_POST['senha'])) {
    $senha_digitada = $_POST['senha'];

    if ($senha_digitada === $senha_correta) {
        header("Location: home.php");
    } else {
        header("Location: index.php");
    }
} else {
    header("Location: index.php");
}
