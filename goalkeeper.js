document.addEventListener('DOMContentLoaded', () => {
    const sectors = document.querySelectorAll('.goal-sector');
    const letsGoBtn = document.getElementById('letsGoBtn');
    const winScreen = document.getElementById('winScreen');
    const loseScreen = document.getElementById('loseScreen');
    let selectedSector = null;

    sectors.forEach(sector => {
        sector.addEventListener('click', () => {
            if (sector.classList.contains('is-selected')) {
                sector.classList.remove('is-selected');
                selectedSector = null;
                letsGoBtn.classList.add('disabled');
                letsGoBtn.removeAttribute('href');
            } else {
                sectors.forEach(s => s.classList.remove('is-selected'));
                
                sector.classList.add('is-selected');
                selectedSector = sector.getAttribute('data-sector');
                
                letsGoBtn.classList.remove('disabled');
                letsGoBtn.setAttribute('href', '#'); 
            }
        });
    });

    letsGoBtn.addEventListener('click', (e) => {
        if (letsGoBtn.classList.contains('disabled')) {
            e.preventDefault();
            return;
        }

        // Проверка условий победы и поражения
        if (selectedSector === 'left' || selectedSector === 'center') {
            winScreen.classList.add('is-active');
            
            // Записываем временный флаг победы
            localStorage.setItem('goalkeeper_completed', 'true');
            
        } else if (selectedSector === 'right') {
            loseScreen.classList.add('is-active');
        }
    });
});