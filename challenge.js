document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const cards = document.querySelectorAll('.challenge-card');

    // 1. Проверяем, было ли успешно пройдено испытание "Вратарь"
    const isGoalkeeperCompleted = localStorage.getItem('goalkeeper_completed') === 'true';

    if (isGoalkeeperCompleted) {
        const gkCard = document.getElementById('cardGoalkeeper');
        if (gkCard) {
            gkCard.classList.add('is-completed'); 
            const img = gkCard.querySelector('.card-img');
            if (img) {
                img.src = './imgs/Goalkeeper_Green.png'; 
            }
        }
    }

    // 2. Логика выбора карточек
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Если карточка помечена как пройденная — полностью её игнорируем
            if (card.classList.contains('is-completed')) {
                return;
            }

            const isAlreadySelected = card.classList.contains('is-selected');

            // Сбрасываем все карточки в дефолт (кроме уже пройденных)
            cards.forEach(c => {
                if (!c.classList.contains('is-completed')) {
                    c.classList.remove('is-selected');
                    const img = c.querySelector('.card-img');
                    if (img) img.src = c.getAttribute('data-black');
                }
            });

            // Если карточка не была активна — активируем её
            if (!isAlreadySelected) {
                card.classList.add('is-selected');
                const currentImg = card.querySelector('.card-img');
                if (currentImg) currentImg.src = card.getAttribute('data-yellow');

                if (playBtn) {
                    if (card.id === 'cardGoalkeeper') {
                        playBtn.setAttribute('href', 'goalkeeper.html');
                    } else if (card.id === 'cardBombardier') {
                        playBtn.setAttribute('href', 'bombardier.html');
                    } else if (card.id === 'cardSniper') {
                        playBtn.setAttribute('href', 'sniper.html');
                    }
                    
                    playBtn.classList.remove('disabled');
                }
            } 
            // Если кликнули повторно по активной — снимаем выделение
            else {
                if (playBtn) {
                    playBtn.removeAttribute('href');
                    playBtn.classList.add('disabled');
                }
            }
        });
    });

    // Защита от клика по заблокированной кнопке "Начать"
    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            if (playBtn.classList.contains('disabled')) {
                e.preventDefault();
            }
        });
    }
});