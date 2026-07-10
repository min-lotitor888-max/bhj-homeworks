document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tabs').forEach(container => {
        const tabs = Array.from(container.querySelectorAll('.tab'));
        const contents = container.querySelectorAll('.tab__content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const index = tabs.indexOf(tab);

                container.querySelector('.tab_active')?.classList.remove('tab_active');
                container.querySelector('.tab__content_active')?.classList.remove('tab__content_active');

                tab.classList.add('tab_active');
                contents[index]?.classList.add('tab__content_active');
            });
        });
    });
});
