function atualizarRelogio() {
    const agora = new Date();
    
    // Formata a data de forma mais compacta
    const options = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short'
    };
    const dataFormatada = agora.toLocaleDateString('pt-BR', options)
        .replace('.', ''); // Remove o ponto após a abreviação
    
    // Formata a hora
    const horaFormatada = agora.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Atualiza os elementos
    document.getElementById('hora').textContent = horaFormatada;
    document.getElementById('data').textContent = dataFormatada.toLowerCase();
}

// Atualiza imediatamente e depois a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('click', async () => {
                // Cria overlay com blur
        const overlay = document.createElement('div');
        overlay.classList.add('app-overlay');
        document.body.appendChild(overlay);
        
        // Força reflow para iniciar a transição
        overlay.offsetHeight;
        overlay.style.opacity = '1';

        // Cria a tela do app
        const appScreen = document.createElement('div');
        appScreen.classList.add('app-screen');
        
        // Adiciona uma barra de título com botão de fechar
        appScreen.innerHTML = `
            <div class="app-header">
                <h2>${app.id.charAt(0).toUpperCase() + app.id.slice(1)}</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="app-content"></div>
        `;
        document.body.appendChild(appScreen);

        try {
            // Carrega o conteúdo do arquivo PHP correspondente
            const response = await fetch(`${app.id}.php`);
            const html = await response.text();
            
            // Extrai o conteúdo entre <body> e </body>
            const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
            if (bodyContent && bodyContent[1]) {
                const content = bodyContent[1]
                    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '') // Remove header
                    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, ''); // Remove footer
                appScreen.querySelector('.app-content').innerHTML = content;
            }
        } catch (error) {
            appScreen.querySelector('.app-content').innerHTML = '<p>Erro ao carregar conteúdo</p>';
        }

        // Função para fechar com scroll restaurado
        const closeWindow = () => {
            document.body.style.overflow = 'auto';
            appScreen.classList.add('closing');
            overlay.style.opacity = '0';
            
            setTimeout(() => {
                appScreen.remove();
                overlay.remove();
            }, 300);
        };

        // Fecha a janela ao clicar no overlay ou no botão fechar
        overlay.addEventListener('click', closeWindow);
        appScreen.querySelector('.close-btn').addEventListener('click', closeWindow);
    });
});

