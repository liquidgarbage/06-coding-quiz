// start button event listener which starts timer and renders questions
// pressing start hides start screen and shows questions
// timer function which counts down from 60 seconds and ends quiz when it reaches 0
// second button event listener which checks answers, gives feedback, takes 10 seconds off timer in wrong,  and renders next question
//end of quiz event listener which renders final score(time) and initials input, saves high scores to local storage
//high scores button event listener which renders high scores from local storage

// Select the start button, start page, questions, and timer div
let startButton = document.getElementById('start');
let startPage = document.getElementById('start-screen');
let questions = document.getElementById('questions');
let timerDiv = document.getElementById('.timer');

// Timer function
let timer = 60;
let timerId = null;

// Function to start the timer
function startTimer() {
  timerId = setInterval(function() {
    timer--;
    timerDiv.textContent = timer;
    console.log(timer);
    if (timer === 0) {
      clearInterval(timerId);
      console.log('Timer has reached 0 and has been stopped.');
    }
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerId);
}

// Add an event listener to the start button
startButton.addEventListener('click', function() {
  if (timerId) {
    stopTimer();
  } else {
    startTimer();
    startPage.style.display = 'hide';
    questions.style.display = 'block';
  }
});