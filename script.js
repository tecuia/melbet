// Инициализация главного экрана
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('Кнопка "Начать" активна. Логика запуска...');
        });
    }
});