document.addEventListener('DOMContentLoaded', () => {


    function startMechanic(mechanic_id) {
        const mechanicFrame = document.getElementById(mechanic_id);
        mechanicFrame.src = mechanicFrame.getAttribute('data-src');
        mechanicFrame.classList.add('active');
    }

    function destroyMechanic(mechanic_id) {
        const mechanicFrame = document.getElementById(mechanic_id);
        mechanicFrame.src = '';
        mechanicFrame.classList.remove('active');
    }


    // ============================================================
    //  СОСТОЯНИЕ ПРИЛОЖЕНИЯ
    // ============================================================
    const state = {
        currentScreen: 'main',
        completedGames: {
            goalkeeper: false,
            bombardier: false,
            sniper: false
        },
        selectedGame: null,
        gameInstance: null,
    };

    // ============================================================
    //  ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
    // ============================================================
    function showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(id);
        if (!screen) return;
        screen.classList.remove('active');
        void screen.offsetWidth;
        
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                screen.classList.add('active');
            });
        });
        
        state.currentScreen = id;
    }

    function updateChallengeCards() {
        document.querySelectorAll('.challenge-card').forEach(card => {
            const game = card.dataset.game;
            const isCompleted = state.completedGames[game];
            const img = card.querySelector('.card-img');
            if (isCompleted) {
                card.classList.add('is-completed');
                if (img) img.src = card.dataset.green;
            } else {
                card.classList.remove('is-completed');
                if (img && !card.classList.contains('is-selected')) {
                    img.src = card.dataset.black;
                }
            }
        });
    }

    function resetChallengeSelection() {
        document.querySelectorAll('.challenge-card').forEach(c => {
            if (!c.classList.contains('is-completed')) {
                c.classList.remove('is-selected');
                const img = c.querySelector('.card-img');
                if (img) img.src = c.dataset.black;
            }
        });
        state.selectedGame = null;
        const btn = document.getElementById('btnPlay');
        btn.classList.add('disabled');
        btn.removeAttribute('data-game');
    }

    function goToChallenge() {
        showScreen('screen-challenge');
        updateChallengeCards();
        resetChallengeSelection();
    }

    function showResultScreen(data) {
        const resultScreen = document.getElementById('screen-result');
        document.getElementById('resultTitle').textContent = data.title;
        document.getElementById('resultSubtitle').innerHTML = data.subtitle;
        document.getElementById('resultImage').src = data.image;

        const smallTextEl = document.getElementById('resultSmallText');
        const bonusBtn = document.getElementById('resultBonusBtn');
        const otherBtn = document.getElementById('resultOtherBtn');
        const retryBtn = document.getElementById('resultRetryBtn');

        if (data.isWin) {
            smallTextEl.textContent = data.smallText || 'Тебе доступен бонус';
            smallTextEl.style.display = 'block';
        } else {
            smallTextEl.style.display = 'none';
        }

        bonusBtn.style.display = data.isWin ? 'flex' : 'none';
        otherBtn.style.display = 'flex';
        retryBtn.style.display = data.isWin ? 'none' : 'flex';

        const bg = resultScreen.querySelector('.result-background');
        bg.style.backgroundImage = data.isWin ? 'url("./imgs/win.jpg")' : 'url("./imgs/lose.jpg")';
        bg.classList.toggle('win-bg', data.isWin);
        bg.classList.toggle('lose-bg', !data.isWin);

        otherBtn.onclick = goToChallenge;
        retryBtn.onclick = () => {
            if (state.selectedGame) {
                initGame(state.selectedGame);
            }
        };

        showScreen('screen-result');
    }

    // ============================================================
    //  ИНИЦИАЛИЗАЦИЯ И ОЧИСТКА ИГР
    // ============================================================
    function initGame(gameId) {
        if (state.gameInstance && typeof state.gameInstance.cleanup === 'function') {
            state.gameInstance.cleanup();
        }
        state.gameInstance = null;

        const screenMap = {
            goalkeeper: 'screen-goalkeeper',
            bombardier: 'screen-bombardier',
            sniper: 'screen-sniper'
        };
        showScreen(screenMap[gameId]);

        switch (gameId) {
            case 'goalkeeper': state.gameInstance = initGoalkeeper(); break;
            case 'bombardier': state.gameInstance = initBombardier(); break;
            case 'sniper':     state.gameInstance = initSniper(); break;
        }
        state.selectedGame = gameId;
    }

    
    // ----- ИГРА ВРАТАРЬ -----
    function initGoalkeeper() {
        const sectors = document.querySelectorAll('.goal-sector');
        const goBtn = document.getElementById('gkGoBtn');
        let selectedSector = null;

        // function selectSector(sector) {
        //     if (sector.classList.contains('is-selected')) {
        //         sector.classList.remove('is-selected');
        //         selectedSector = null;
        //         goBtn.classList.add('disabled');
        //     } else {
        //         sectors.forEach(s => s.classList.remove('is-selected'));
        //         sector.classList.add('is-selected');
        //         selectedSector = sector.dataset.sector;
        //         goBtn.classList.remove('disabled');
        //     }
        // }

        // function handleClick(e) {
        //     const sector = e.currentTarget;
        //     selectSector(sector);
        // }

        // sectors.forEach(s => s.addEventListener('click', handleClick));

        startMechanic('mechanic_1');

        
        document.addEventListener('mechanicEnd', function(event) {
            const { success } = event.detail;
            
            console.log('📥 Получено событие mechanicEnd из iframe');
            console.log('  success:', success);
            console.log('  timestamp:', event.detail.timestamp);
            console.log('  текущая игра:', state.selectedGame);
            
            // Обрабатываем результат в зависимости от текущей игры
            if (state.selectedGame == 'goalkeeper') {
                
            if (success) {
                state.completedGames.goalkeeper = true;
                showResultScreen({
                    title: 'Сейв!',
                    subtitle: 'Ты повторил один из ключевых сейвов ЧМ-2010: Икер Касильяс отбил пенальти Оскара Кардосо в&nbsp;матче Испания — Парагвай и&nbsp;сохранил шансы сборной на&nbsp;будущий титул!',
                    smallText: 'Тебе доступен бонус',
                    image: './imgs/safe.png',
                    isWin: true
                });
            } else {
                showResultScreen({
                    title: 'Не угадал',
                    subtitle: 'Удар оказался точнее. Попробуй ещё раз или выбери другое испытание',
                    smallText: '',
                    image: './imgs/miss.png',
                    isWin: false
                });
            }


                destroyMechanic('mechanic_1')
            }
        });

        function cleanup() {
            sectors.forEach(s => s.removeEventListener('click', handleClick));
            // goBtn.removeEventListener('click', onGo);
            // goBtn.classList.add('disabled');
            sectors.forEach(s => s.classList.remove('is-selected'));
        }

        return { cleanup };
    }

     // ----- ИГРА БОМБАРДИР -----
    function initBombardier() {
        const goBtn = document.getElementById('bombGoBtn');
        const scaleArrow = document.getElementById('scaleArrow');
        let isMoving = false;
        let position = 80;
        let direction = 1;
        const speed = 1.3;
        let animationFrameId = null;

        
        startMechanic('mechanic_2');

        // function animateScale() {
        //     if (!isMoving) return;
        //     position += speed * direction;
        //     if (position >= 94) { position = 94; direction = -1; }
        //     else if (position <= 0) { position = 0; direction = 1; }
        //     scaleArrow.style.top = `${position}%`;
        //     animationFrameId = requestAnimationFrame(animateScale);
        // }

        
        
        document.addEventListener('mechanicEnd', function(event) {
            const { success } = event.detail;
            
            console.log('📥 Получено событие mechanicEnd из iframe');
            console.log('  success:', success);
            console.log('  timestamp:', event.detail.timestamp);
            console.log('  текущая игра:', state.selectedGame);
            
            // Обрабатываем результат в зависимости от текущей игры
            if (state.selectedGame == 'bombardier') {
                

                if(success) {
                    state.completedGames.bombardier = true;
                    showResultScreen({
                        title: 'Гол!',
                        subtitle: 'Ты повторил легендарный гол Робина ван Перси в матче Нидерланды — Испания на&nbsp;ЧМ-2014: дальняя передача, прыжок и&nbsp;точный удар головой в ворота',
                        smallText: 'Тебе доступен бонус',
                        image: './imgs/head.png',
                        isWin: true
                    });
                } else {

                    showResultScreen({
                        title: 'Момент упущен',
                        subtitle: 'Ты немного не попал в тайминг. Попробуй ещё раз или выбери другое испытание',
                        smallText: '',
                        image: './imgs/catch.png',
                        isWin: false
                    });
                }

                destroyMechanic('mechanic_2')
            }
        });
        function cleanup() {
            isMoving = false;
            cancelAnimationFrame(animationFrameId);
            // goBtn.removeEventListener('click', onClick);
            // goBtn.textContent = 'Поехали';
            // scaleArrow.style.top = '80%';
        }

        return { cleanup };
    }

    // ----- ИГРА СНАЙПЕР -----
    function initSniper() {
        const container = document.getElementById('sniperCanvasContainer');
        const goBtn = document.getElementById('sniperGoBtn');
        let canvas, ctx;
        let animationId = null;
        let isMoving = false;
        let gameActive = false;
        let progress = 0;
        const ballRadius = 12;
        let speed = 0.001;
        let startX, startY, endX, endY;
        const winZoneStart = 0.92;
        const winZoneEnd = 1.0;

      
        startMechanic('mechanic_3');


        document.addEventListener('mechanicEnd', function(event) {
            const { success } = event.detail;
            
            console.log('📥 Получено событие mechanicEnd из iframe');
            console.log('  success:', success);
            console.log('  timestamp:', event.detail.timestamp);
            console.log('  текущая игра:', state.selectedGame);
            
            // Обрабатываем результат в зависимости от текущей игры
            if (state.selectedGame == 'sniper') {
                
                if (success) {
                    state.completedGames.sniper = true;
                    showResultScreen({
                        title: 'Точно в цель!',
                        subtitle: 'Ты повторил легендарный удар Роналдиньо в матче Бразилия — Англия на&nbsp;ЧМ-2002: мяч с дальнего штрафного перелетел вратаря и оказался в воротах',
                        smallText: 'Тебе доступен бонус',
                        image: './imgs/goal.png',
                        isWin: true
                    });
                } else {
                    showResultScreen({
                        title: 'Не попал',
                        subtitle: 'Удар был близко, но точности не хватило. Попробуй ещё раз или выбери другое испытание',
                        smallText: '',
                        image: './imgs/block.png',
                        isWin: false
                    });
                }

                destroyMechanic('mechanic_3')
            }
        });



        function cleanup() {
            isMoving = false;
            gameActive = false;
            cancelAnimationFrame(animationId);
            // goBtn.removeEventListener('click', onClick);
            // goBtn.textContent = 'Поехали';
            // container.innerHTML = '';
        }

        return { cleanup };
    }

    // ============================================================
    //  ОБРАБОТЧИКИ НАВИГАЦИИ
    // ============================================================

    document.getElementById('btnStart').addEventListener('click', goToChallenge);

    document.getElementById('btnClaimBonus').addEventListener('click', () => {
        Object.keys(state.completedGames).forEach(key => {
            state.completedGames[key] = false;
        });
        window.location.href = 'https://tracker.partnersmelbet.ru/link?btag=95908025_498565';
    });

    document.querySelectorAll('.challenge-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('is-completed')) return;

            const isSelected = card.classList.contains('is-selected');
            document.querySelectorAll('.challenge-card:not(.is-completed)').forEach(c => {
                if (c !== card) {
                    c.classList.remove('is-selected');
                    const img = c.querySelector('.card-img');
                    if (img) img.src = c.dataset.black;
                }
            });

            if (!isSelected) {
                card.classList.add('is-selected');
                const img = card.querySelector('.card-img');
                if (img) img.src = card.dataset.yellow;
                const btn = document.getElementById('btnPlay');
                btn.classList.remove('disabled');
                btn.dataset.game = card.dataset.game;
            } else {
                card.classList.remove('is-selected');
                const img = card.querySelector('.card-img');
                if (img) img.src = card.dataset.black;
                const btn = document.getElementById('btnPlay');
                btn.classList.add('disabled');
                delete btn.dataset.game;
            }
        });
    });

    document.getElementById('btnPlay').addEventListener('click', function(e) {
        if (this.classList.contains('disabled')) return;
        const game = this.dataset.game;
        if (game) {
            initGame(game);
        }
    });

    document.getElementById('resultBonusBtn').addEventListener('click', function() {
        const mainScreen = document.getElementById('screen-main');
        mainScreen.classList.add('is-final');
        showScreen('screen-main');
    });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('final') === 'true') {
        const mainScreen = document.getElementById('screen-main');
        mainScreen.classList.add('is-final');
        // Не показываем сразу — даём время на применение начальных стилей
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                showScreen('screen-main');
            });
        });
    }

    // ============================================================
    //  КАРУСЕЛЬ ИНДИКАТОРЫ 
    // ============================================================
    const cardsContainer = document.getElementById('cardsContainer');
    const points = document.querySelectorAll('.point');
    const cards = document.querySelectorAll('.challenge-card');

    let currentActiveIndex = 0;

    function updateActivePoint(index) {
        if (index === currentActiveIndex) return;
        points.forEach((p, i) => {
            p.classList.toggle('active', i === index);
        });
        currentActiveIndex = index;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = Array.from(cards).indexOf(card);
                if (index !== -1) {
                    updateActivePoint(index);
                }
            }
        });
    }, {
        root: cardsContainer,
        rootMargin: '0px',
        threshold: 0.5
    });

    cards.forEach(card => observer.observe(card));

    points.forEach((point, index) => {
        point.addEventListener('click', () => {
            cardsContainer.scrollTo({
                left: index * (342 + 8),
                behavior: 'smooth'
            });
            updateActivePoint(index);
        });
    });

    window.addEventListener('resize', () => {
        setTimeout(() => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const containerRect = cardsContainer.getBoundingClientRect();
                const isVisible = rect.left >= containerRect.left && rect.right <= containerRect.right;
                if (isVisible) {
                    const index = Array.from(cards).indexOf(card);
                    updateActivePoint(index);
                }
            });
        }, 200);
    });

    function refreshIndicators() {
        setTimeout(() => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const containerRect = cardsContainer.getBoundingClientRect();
                const isVisible = rect.left >= containerRect.left && rect.right <= containerRect.right;
                if (isVisible) {
                    const index = Array.from(cards).indexOf(card);
                    updateActivePoint(index);
                }
            });
        }, 100);
    }

    const originalGoToChallenge = goToChallenge;
    goToChallenge = function() {
        originalGoToChallenge();
        refreshIndicators();
    };

    setTimeout(refreshIndicators, 200);

    // ============================================================
    //  СТАРТ ПРИЛОЖЕНИЯ
    // ============================================================
    showScreen('screen-main');
});