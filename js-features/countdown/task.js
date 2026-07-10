document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');

    const fileUrl = 'https://netology.ru/';

    let totalSeconds = parseInt(timerElement.textContent, 10);

    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        const hh = String(h).padStart(2, '0');
        const mm = String(m).padStart(2, '0');
        const ss = String(s).padStart(2, '0');

        return `${hh}:${mm}:${ss}`;
    }

    function updateTimer() {
        if (totalSeconds <= 0) {
            alert('Вы победили в конкурсе!');

            window.location.href = fileUrl;

            clearInterval(timerInterval);
            return;
        }

        timerElement.textContent = formatTime(totalSeconds);
        totalSeconds--;
    }

    timerElement.textContent = formatTime(totalSeconds);
    const timerInterval = setInterval(updateTimer, 1000);
});
