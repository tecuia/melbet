document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const cards = document.querySelectorAll('.challenge-card');

    // 1. Проверяем флаг прохождения испытания "Вратарь"
    const isGoalkeeperCompleted = localStorage.getItem('goalkeeper_completed') === 'true';

    if (isGoalkeeperCompleted) {
        // КЛЮЧЕВОЙ ФИКС: Сразу удаляем флаг из памяти. 
        // При первой загрузке карточка станет зеленой, но при обновлении страницы (F5) она сбросится.
        localStorage.removeItem('goalkeeper_completed');
        
        const gkCard = document.getElementById('cardGoalkeeper');
        if (gkCard) {
            gkCard.classList.add('is-completed'); // Добавляем класс пройденного состояния
            const img = gkCard.querySelector('.card-img');
            if (img) {
                img.src = './imgs/Goalkeeper_Green.png'; // Подменяем картинку на зеленую
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

                // Подставляем адрес страницы в зависимости от ID карточки
                if (playBtn) {
                    if (card.id === 'cardGoalkeeper') {
                        playBtn.setAttribute('href', 'goalkeeper.html');
                    } else if (card.id === 'cardBombardier') {
                        playBtn.setAttribute('href', 'bombardier.html');
                    } else if (card.id === 'cardSniper') {
                        playBtn.setAttribute('href', 'sniper.html');
                    }
                    
                    // Активируем кнопку "Начать"
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