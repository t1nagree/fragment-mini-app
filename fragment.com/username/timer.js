document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.querySelector(".tm-countdown-timer");
    const endTime = new Date(timerElement.getAttribute("datetime")).getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            timerElement.innerHTML = "<span>Time's up!</span>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            <span class="reel"><b class="digit timer-h0">${Math.floor(hours / 10)}</b><b class="digit timer-h1">${hours % 10}</b></span>
            <span class="reel"><b class="digit timer-m0">${Math.floor(minutes / 10)}</b><b class="digit timer-m1">${minutes % 10}</b></span>
            <span class="reel"><b class="digit timer-s0">${Math.floor(seconds / 10)}</b><b class="digit timer-s1">${seconds % 10}</b></span>
        `;
    }

    // Обновляем таймер каждую секунду
    setInterval(updateTimer, 1000);
    updateTimer();
});
