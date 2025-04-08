<?php 
    $titulo = "Tela de bloqueio | Mary";
    $linkcss = "./css/index.css";
    include_once ("./components/head.php");

    // Sessão
    session_start();
    if (isset($_SESSION['logado']) && $_SESSION['logado'] == true) {
        header('Location: home.php'); // Se n tiver colocado a senha redireciona para cá
        exit();
    }
?>

<body>
    <main>
        <div class="tela-bloqueio">
            <img src="./img/eubemestilosa.jpg">
            <h2>Mary Vitória</h2>
            <form action="checar_senha.php" method="POST">
                <div class="senha-div">
                    <input type="password" name="senha" placeholder="PIN" required autofocus>
                    <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <button onclick="showPass()" id="esqueci">Esqueci minha senha</button>
            </form> 
        </div>

    </main>

    <script>
        count = 0
        dicas = [
            "É o melhor professor",
            "Dá aula de psw pro 2º ano",
            "É só o primeiro nome",
            "AFF, é Webber",
        ]
        showPass = () => {
            alert("Dica: " + dicas[count]);
            count += 1;
            if (count == dicas.length) {
                count = 0;
            }
        }
    </script>
</body>