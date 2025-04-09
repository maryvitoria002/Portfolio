//Aqui eu vou falar sobre mim. eu sou...


<?php 
    $titulo = "Sobre mim | Mary";
    $linkcss = "./css/index.css";
    include_once ("./components/head.php");
?>

<body>
<div class="bb-gray"></div>
    <section class="container">
        <div class="row" id="section-iam">
            <div class="grid-5">
                <div>
                    <h6 class="uppercase color-gradient">Eu sou</h6>
                </div>
                <div>
                    <h3 class="mt-1">
                        Freelancer brasileira, Designer & Desenvolvedora bem aesthetic
                    </h3>
                </div>
                <div>
                    <p style="max-width: 300px;">
                        Adoro aprender coisas novas, me adapto rápido e sempre estou estudando e precisando de seu dinheiro!
                    </p>
                </div>
                
            </div>
            <div class="grid-2 flex-start-end">
                <h6 class="uppercase color-gradient">E eu sei</h6>
            </div>
            <div class="grid-5 relative">
                <h2 class="text-presentation-design">Design</h2>
                <h2 class="text-presentation-code">Code</h2>
                <h2 class="text-presentation-motion">Motion</h2>
                <h2 class="text-presentation-3d">3D</h2>

                <img src="./img/bolinhas.png">
            </div>
        </div>
    </section>
</body>

