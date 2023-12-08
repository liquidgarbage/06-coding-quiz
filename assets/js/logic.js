// start button event listener which starts timer and renders questions
// pressing start hides start screen and shows questions
// timer function which counts down from 60 seconds and ends quiz when it reaches 0
// second button event listener which checks answers, gives feedback, takes 10 seconds off timer in wrong,  and renders next question
//end of quiz event listener which renders final score(time) and initials input, saves high scores to local storage
//high scores button event listener which renders high scores from local storage

// Select the start button, start page, questions, and timer div
const startButton = document.getElementById("start");
const startPage = document.getElementById("start-screen");
const questions = document.getElementById("questions")
const choices = document.getElementById("choices");
const timerDiv = document.getElementById("timer");

// Timer function
let timer = 60;
// timer function which counts down from 60 seconds and ends quiz when it reaches 0

// Add an event listener to the start button
startButton.addEventListener("click", function () {
  startPage.style.display = "none";
  questions.style.display = "block";
  choices.style.display = "block";  
  updateQuestion();
}); 
