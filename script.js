document.addEventListener('DOMContentLoaded', () => {
    const galaxy = document.querySelector('.space');

    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize the position and size of the stars
        const size = Math.random() * 4 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';

        galaxy.appendChild(star);
    }

});
