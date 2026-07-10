document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const links = dropdown.querySelectorAll('.dropdown__link');

        valueElement.addEventListener('click', (e) => {
            if (e.target.closest('.dropdown') === dropdown) {
                listElement.classList.toggle('dropdown__list_active');
            }
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                listElement.classList.remove('dropdown__list_active');
            }
        });

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const selectedText = link.textContent.trim();

                valueElement.textContent = selectedText;

                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
});
