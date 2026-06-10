document.addEventListener('DOMContentLoaded', () => {
    const letsGoBtn = document.getElementById('letsGoBtn');
    const btnText = document.getElementById('btnText');
    const scaleArrow = document.getElementById('scaleArrow');
    const winScreen = document.getElementById('winScreen');
    const loseScreen = document.getElementById('loseScreen');

    let isMoving = false;
    
    let position = 80; 
    let direction = 1;      
    const speed = 1.3;      
    let animationFrameId = null;

    scaleArrow.style.top = `${position}%`;

    function animateScale() {
        if (!isMoving) return;

        position += speed * direction;

        if (position >= 94) {
            position = 94;
            direction = -1;
        } else if (position <= 0) {
            position = 0;
            direction = 1;
        }

        scaleArrow.style.top = `${position}%`;
        animationFrameId = requestAnimationFrame(animateScale);
    }

    if (letsGoBtn) {
        letsGoBtn.addEventListener('click', () => {
            if (!isMoving) {
                position = 80; 
                scaleArrow.style.top = `${position}%`;
                
                isMoving = true;
                btnText.textContent = 'Ударить!'; 
                animateScale();
            } else {
                isMoving = false;
                cancelAnimationFrame(animationFrameId); 

                // Логика победы
                if (position <= 50) {
                    if (winScreen) winScreen.classList.add('is-active');
                    localStorage.setItem('bombardierComplete', 'true');
                } else {
                    if (loseScreen) loseScreen.classList.add('is-active');
                }
            }
        });
    }
});