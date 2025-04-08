<?php 
    $titulo = "Área de trabalho | Mary";
    $linkcss = "./css/home.css";
    include_once ("./components/head.php");
?>

<body>
    <main>
        <div class="topinho">
            <h1 class="copyright">&copy; Portfolio de Mary Vitória</h1>
        </div>

        <div class="conteudo">
            <div class="apps">
                <!-- Fila de pastas, usando o grid layout -->
                <div class="column">
                    <div class="app" id="projetos">
                        <img src="./img/folder.png" alt="Projetos" class="pasta">
                        <p>Projetos</p>
                    </div>
                    <div class="app" id="resumo">
                        <img src="./img/file.png" alt="Resumo" class="arquivo">
                        <p>Resumo</p>
                    </div>
                    <div class="app" id="experiencia">
                        <img src="./img/folder.png" alt="Experiência" class="pasta">
                        <p>Experiência</p>
                    </div>
                </div>

                <div class="column">
                    <div class="app" id="contato">
                        <img src="./img/folder.png" alt="Contato" class="pasta">
                        <p>Contato</p>
                    </div>
                    <div class="app" id="habilidades">
                        <img src="./img/folder.png" alt="Habilidades" class="pasta">
                        <p>Habilidades</p>
                    </div>
                </div>
            </div>

            <!-- Wallpaper -->
            <div class="fotowallpaper">
                <img src="./img/euaff.png" alt="Imagem de fundo">
            </div>
        </div>

        <!-- Barra de Tarefas -->
        <div class="barraTarefas">
            <div class="estrela">
                <i class="fa-solid fa-star" style="color:rgb(255, 255, 255);"></i>
                <div class="estrela-menu">
                    <div class="menu-item" id="suspender">
                        <i class="fa-solid fa-moon"></i>
                        <span>Suspender</span>
                    </div>
                    <div class="menu-item" id="reiniciar">
                        <i class="fa-solid fa-sync"></i>
                        <span>Reiniciar</span>
                    </div>
                    <div class="menu-item" id="desligar">
                        <i class="fa-solid fa-power-off"></i>
                        <span>Desligar</span>
                    </div>
                </div>
            </div>
            <div class="relogio">
                <div class="relogio-container">
                    <span id="hora"></span>
                    <span id="data"></span>
                </div>
            </div>
        </div>
    
    </main>

    <script src="js/appAnimation.js"></script>
    <script src="js/systemMenu.js"></script>
</body>
