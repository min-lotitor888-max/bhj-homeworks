document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

        let activeIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));
        if (activeIndex === -1) activeIndex = 0;

        function showNext() {
            cases.forEach(el => {
                el.classList.remove('rotator__case_active');
                el.style.color = '';
            });

            activeIndex = (activeIndex + 1) % cases.length;
            const current = cases[activeIndex];

            current.classList.add('rotator__case_active');

            const color = current.getAttribute('data-color');
            if (color) {
                current.style.color = color;
            }

            const speedStr = current.getAttribute('data-speed');
            const speed = speedStr ? parseInt(speedStr, 10) : 1000;

            setTimeout(showNext, speed);
        }

        const initialActive = cases[activeIndex];
        const initialColor = initialActive.getAttribute('data-color');
        if (initialColor) {
            initialActive.style.color = initialColor;
        }

        const initialSpeedStr = initialActive.getAttribute('data-speed');
        const initialSpeed = initialSpeedStr ? parseInt(initialSpeedStr, 10) : 1000;

        setTimeout(showNext, initialSpeed);
    });
});
