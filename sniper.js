document.addEventListener('DOMContentLoaded', () => {
    const letsGoBtn = document.getElementById('letsGoBtn');
    const winScreen = document.getElementById('winScreen');
    const loseScreen = document.getElementById('loseScreen');
    const gameArea = document.querySelector('.sniper-game-area');

    let canvas, ctx;
    let animationId = null;
    let isMoving = false;
    let gameActive = false;
    
    let progress = 0;
    const ballRadius = 12;
    let speed = 0.003;
    
    let startX, startY, endX, endY;
    
    function setupCanvas() {
        if (!gameArea) return;
        
        gameArea.innerHTML = '';
        canvas = document.createElement('canvas');
        canvas.width = 1600;
        canvas.height = 500;
        canvas.style.width = '100%';
        canvas.style.maxWidth = '1200px';
        canvas.style.height = 'auto';
        canvas.style.position = 'relative';
        canvas.style.zIndex = '2';
        canvas.style.backgroundColor = 'transparent';
        canvas.style.overflow = 'visible';
        
        gameArea.appendChild(canvas);
        ctx = canvas.getContext('2d');
        
        startX = 5;
        startY = 200;
        endX = canvas.width - 50; 
        endY = 230;
        
        drawField();
        drawBall();
    }
    
    function drawField() {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(canvas.width / 4, 100, endX, endY);
        ctx.strokeStyle = '#FDBA01';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    function getBallPosition() {
        const t = Math.min(progress, 1);
        const controlX = canvas.width / 4;
        const controlY = 100;
        
        const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
        const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
        
        return { x, y };
    }
    
    function drawBall() {
        if (!ctx) return;
        
        drawField();
        
        const pos = getBallPosition();
        
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
    }
    
    function animateBall() {
        if (!isMoving) return;
        
        progress += speed;
        
        if (progress >= 1) {
            progress = 1;
            isMoving = false;
            gameActive = false;
            cancelAnimationFrame(animationId);
            drawBall();
            
            if (winScreen) {
                winScreen.classList.add('is-active');
            }
            localStorage.setItem('sniperComplete', 'true');
            letsGoBtn.textContent = 'Поехали';
            return;
        }
        
        drawBall();
        animationId = requestAnimationFrame(animateBall);
    }
    
    function takeShot() {
        if (!isMoving) return;
        if (!gameActive) return;
        
        isMoving = false;
        gameActive = false;
        cancelAnimationFrame(animationId);
        
        if (loseScreen) {
            loseScreen.classList.add('is-active');
        }
        
        letsGoBtn.textContent = 'Поехали';
    }
    
    function startGame() {
        if (isMoving) return;
        
        progress = 0;
        gameActive = true;
        isMoving = true;
        
        drawBall();
        letsGoBtn.textContent = 'Поехали';
        animateBall();
    }
    
    setupCanvas();
    
    if (letsGoBtn) {
        letsGoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (!isMoving) {
                startGame();
            } else if (gameActive) {
                takeShot();
            }
        });
    }
    
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry && navigationEntry.type === 'reload') {
        localStorage.removeItem('sniperComplete');
    }
});