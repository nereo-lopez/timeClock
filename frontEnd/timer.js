let intervalId;
let startTime;
let pausedTime = 0;
let isPaused = false;

document.getElementById('startTimer').addEventListener('click', function() {

    if (isPaused) {
        this.textContent = "Resume Shift";
    } else {
        this.textContent = "Shift started";
    }
    
    this.disabled = true;
    document.getElementById('pauseTimer').disabled = false;
    document.getElementById('stopTimer').disabled = false;

    if (!isPaused) {
        startTime = Date.now();
        pausedTime = 0;
    } else {
        startTime = Date.now() - pausedTime;
    }

    intervalId = setInterval(function() {
        let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').textContent = elapsedTime;
    }, 1000);
});

document.getElementById('pauseTimer').addEventListener('click', function() {

    clearInterval(intervalId);
    isPaused = true;
    pausedTime = Date.now() - startTime;

    document.getElementById('startTimer').textContent = "Resume Shift";
    document.getElementById('startTimer').disabled = false;

    this.disabled = true;
});

document.getElementById('stopTimer').addEventListener('click', function() {

    clearInterval(intervalId);
    document.getElementById('timer').textContent = 0;

    pausedTime = 0;
    isPaused = false;

    document.getElementById('startTimer').textContent = "Start Shift";
    document.getElementById('startTimer').disabled = false;
    document.getElementById('pauseTimer').disabled = true;
    document.getElementById('stopTimer').disabled = true;
});
