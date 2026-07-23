document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const threshold = 50;

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > threshold) {
                el.classList.add('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});
