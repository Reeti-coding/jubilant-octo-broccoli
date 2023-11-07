document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');

    ball.addEventListener('animationend', function(event) {
        if (event.animationName === 'moveBall') {
            ball.style.animation = 'blast 0.2s linear forwards';
        } else if (event.animationName === 'blast') {
            triggerConfetti();
        }
    });
});

function triggerConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FFD700', '#FF4500', '#FF69B4']
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FFD700', '#FF4500', '#FF69B4']
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    }());
}
