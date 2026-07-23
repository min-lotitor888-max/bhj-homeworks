document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    if (!book) return;

    const fontSizeButtons = document.querySelectorAll('.font-size');

    fontSizeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            fontSizeButtons.forEach(b => b.classList.remove('font-size_active'));
            btn.classList.add('font-size_active');

            book.classList.remove('book_fs-small', 'book_fs-big');

            const size = btn.getAttribute('data-size');
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });

    // Повышенный уровень: цвет текста
    const textColorButtons = document.querySelectorAll('[data-text-color]');

    textColorButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('[data-text-color]').forEach(b =>
                b.classList.remove('color_active')
            );
            btn.classList.add('color_active');

            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            const color = btn.getAttribute('data-text-color');
            if (color) {
                book.classList.add(`book_color-${color}`);
            }
        });
    });

    // Повышенный уровень: цвет фона
    const bgColorButtons = document.querySelectorAll('[data-bg-color]');

    bgColorButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('[data-bg-color]').forEach(b =>
                b.classList.remove('color_active')
            );
            btn.classList.add('color_active');

            book.classList.remove('book_bg-white', 'book_bg-gray', 'book_bg-black');

            const bg = btn.getAttribute('data-bg-color');
            if (bg) {
                book.classList.add(`book_bg-${bg}`);
            }
        });
    });
});
