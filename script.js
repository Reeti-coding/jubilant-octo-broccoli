document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');
    const birthdayText = document.getElementById('birthday-text');

    birthdayText.style.display = 'none';

    ball.addEventListener('animationend', function() {
        ball.style.display = 'none';
        birthdayText.style.display = 'block';
    });
});
