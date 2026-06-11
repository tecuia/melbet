document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // ЛОГИКА ГЛАВНОГО ЭКРАНА PROMO 
    // ==========================================================================
    const promoContainer = document.querySelector('.promo-container');
    const startBtn = document.getElementById('startBtn');
    const claimBonusBtn = document.getElementById('claimBonusBtn');

    if (promoContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const isFinalScreen = urlParams.get('final') === 'true';

        if (isFinalScreen) {
            promoContainer.classList.add('is-final');
        }
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Переход к выбору испытаний...');
        });
    }

    if (claimBonusBtn) {
        claimBonusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Клик по кнопке забрать бонус. Сбрасываем прогресс игр для нового круга...');
            
            localStorage.removeItem('goalkeeper_completed');
            localStorage.removeItem('bombardierComplete');
            localStorage.removeItem('sniperComplete');

            window.location.href = 'https://tracker.partnersmelbet.ru/link?btag=95908025_498565';
        });
    }

    // ==========================================================================
    // ЛОГИКА ЭКРАНА ВЫБОРА ИСПЫТАНИЙ 
    // ==========================================================================
    const playBtn = document.getElementById('playBtn');
    const cards = document.querySelectorAll('.challenge-card');

    // Проверяем, что мы находимся именно на экране выбора карточек
    if (cards.length > 0) {
        
        // КЛЮЧЕВОЙ ФИКС: Проверяем, была ли страница перезагружена (F5 / Reload)
        // Если это перезагрузка — очищаем прогресс для удобства тестирования
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry && navigationEntry.type === 'reload') {
            localStorage.removeItem('goalkeeper_completed');
            localStorage.removeItem('bombardierComplete');
            localStorage.removeItem('sniperComplete');
        }
        
        // 1. Проверяем статус прохождения испытания "Вратарь"
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

        // 2. Проверяем статус прохождения испытания "Бомбардир"
        const isBombardierCompleted = localStorage.getItem('bombardierComplete') === 'true';

        if (isBombardierCompleted) {
            const bmbCard = document.getElementById('cardBombardier');
            if (bmbCard) {
                bmbCard.classList.add('is-completed'); 
                const img = bmbCard.querySelector('.card-img');
                if (img) {
                    img.src = './imgs/Bombardier_Green.png'; 
                }
            }
        }

                // 3. Проверяем статус прохождения испытания "Снайпер"
        const isSniperCompleted = localStorage.getItem('sniperComplete') === 'true';

        if (isSniperCompleted) {
            const snCard = document.getElementById('cardSniper');
            if (snCard) {
                snCard.classList.add('is-completed');
                const img = snCard.querySelector('.card-img');
                if (img) {
                    img.src = './imgs/Sniper_Green.png';
                }
            }
        }

        // 4. Логика интерактивного переключения карточек
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // Если карточка уже пройдена — полностью её игнорируем
                if (card.classList.contains('is-completed')) {
                    return;
                }

                const isAlreadySelected = card.classList.contains('is-selected');

                // Сбрасываем другие незавершенные карточки в дефолт
                cards.forEach(c => {
                    if (!c.classList.contains('is-completed')) {
                        c.classList.remove('is-selected');
                        const img = c.querySelector('.card-img');
                        if (img) img.src = c.getAttribute('data-black');
                    }
                });

                // Если карточка не была выбрана — выбираем её
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
                // Кликнули повторно по активной — снимаем выделение
                else {
                    if (playBtn) {
                        playBtn.removeAttribute('href');
                        playBtn.classList.add('disabled');
                    }
                }
            });
        });
    }

    // Защита от клика по заблокированной кнопке "Начать"
    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            if (playBtn.classList.contains('disabled')) {
                e.preventDefault();
            }
        });
    }
});