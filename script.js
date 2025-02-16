function startTimer() {
    let timeLeft = 10;
    let timerDisplay = document.getElementById("timer");

    let countdown = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}
