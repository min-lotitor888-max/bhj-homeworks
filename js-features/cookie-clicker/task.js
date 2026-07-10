document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('clicker__counter');
    const cookieElement = document.getElementById('cookie');

    let clicks = 0;
    let isBig = true;

    const bigSize = 200;
    const smallSize = 160;

    cookieElement.addEventListener('click', () => {
        clicks++;
        counterElement.textContent = clicks;

        if (isBig) {
            cookieElement.width = smallSize;
            cookieElement.height = smallSize;
        } else {
            cookieElement.width = bigSize;
            cookieElement.height = bigSize;
        }

        isBig = !isBig;
    });
});
