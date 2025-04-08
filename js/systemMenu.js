document.addEventListener('DOMContentLoaded', function() {
    const estrela = document.querySelector('.estrela');
    const estrelaMenu = document.querySelector('.estrela-menu');
    const suspender = document.getElementById('suspender');
    const reiniciar = document.getElementById('reiniciar');
    const desligar = document.getElementById('desligar');
    
    // Create animation screens
    const body = document.body;
    const suspendScreen = document.createElement('div');
    suspendScreen.className = 'animation-screen suspend-screen';
    suspendScreen.innerHTML = '<i class="fa-solid fa-moon" style="font-size: 5rem; color: white; margin-bottom: 20px;"></i><p style="color: white; font-size: 1.5rem;">Suspendendo...</p>';
    
    const restartScreen = document.createElement('div');
    restartScreen.className = 'animation-screen restart-screen';
    restartScreen.innerHTML = '<i class="fa-solid fa-sync fa-spin" style="font-size: 5rem; color: white; margin-bottom: 20px;"></i><p style="color: white; font-size: 1.5rem;">Reiniciando...</p>';
    
    const shutdownScreen = document.createElement('div');
    shutdownScreen.className = 'animation-screen shutdown-screen';
    shutdownScreen.innerHTML = '<i class="fa-solid fa-power-off" style="font-size: 5rem; color: white; margin-bottom: 20px;"></i><p style="color: white; font-size: 1.5rem;">Desligando...</p>';
    
    body.appendChild(suspendScreen);
    body.appendChild(restartScreen);
    body.appendChild(shutdownScreen);
    
    // Toggle menu
    estrela.addEventListener('click', function(e) {
        e.stopPropagation();
        estrelaMenu.classList.toggle('show');
    });
    
    // Close menu when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (estrelaMenu.classList.contains('show')) {
            estrelaMenu.classList.remove('show');
        }
    });
    
    // Suspend action
    suspender.addEventListener('click', function() {
        estrelaMenu.classList.remove('show');
        suspendScreen.style.display = 'flex';
        suspendScreen.style.animation = 'fadeIn 1s forwards';
        
        // Add mouse move event to return to home page
        document.addEventListener('mousemove', wakeFromSuspend);
    });
    
    function wakeFromSuspend() {
        suspendScreen.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            suspendScreen.style.display = 'none';
            document.removeEventListener('mousemove', wakeFromSuspend);
        }, 1000);
    }
    
    // Restart action
    reiniciar.addEventListener('click', function() {
        estrelaMenu.classList.remove('show');
        restartScreen.style.display = 'flex';
        restartScreen.style.animation = 'fadeIn 1s forwards';
        
        setTimeout(() => {
            restartScreen.style.animation = 'fadeOut 1s forwards';
            setTimeout(() => {
                restartScreen.style.display = 'none';
                location.reload();
            }, 1000);
        }, 3000);
    });
    
    // Shutdown action
    desligar.addEventListener('click', function() {
        estrelaMenu.classList.remove('show');
        shutdownScreen.style.display = 'flex';
        shutdownScreen.style.animation = 'fadeIn 1s forwards';
        
        setTimeout(() => {
            // Fade to black
            document.body.style.transition = 'opacity 2s';
            document.body.style.opacity = '0';
        }, 2000);
    });
});