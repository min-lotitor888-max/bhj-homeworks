document.addEventListener('DOMContentLoaded', () => {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    let kills = 0;
    let misses = 0;
    const maxKills = 10;
    const maxMisses = 5;

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    function updateStats() {
        deadCounter.textContent = kills;
        lostCounter.textContent = misses;
    }

    function checkGameOver() {
        if (kills >= maxKills) {
            alert('Поздравляем! Вы убили 10 кротов и победили!');
            resetGame();
        } else if (misses >= maxMisses) {
            alert('Игра окончена! Вы промахнулись 5 раз.');
            resetGame();
        }
    }

    function resetGame() {
        kills = 0;
        misses = 0;
        updateStats();

        for (let i = 1; i <= 9; i++) {
            const hole = getHole(i);
            hole.classList.remove('hole_has-mole');
        }
        getHole(1).classList.add('hole_has-mole');
    }

    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);

        hole.addEventListener('click', () => {
            if (hole.classList.contains('hole_has-mole')) {
                kills++;

                hole.classList.remove('hole_has-mole');

                const randomHoleIndex = Math.floor(Math.random() * 9) + 1;
                const newHole = getHole(randomHoleIndex);

                newHole.classList.add('hole_has-mole');

            } else {

                misses++;
            }

            updateStats();

            checkGameOver();
        });
    }
});
