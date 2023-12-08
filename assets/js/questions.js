// var questionArray = [
//     ['Arrays in JavaScript can be used to store ________.', ['numbers and strings', 'other arrays', 'booleans', 'all of the above']],
//     ['The condition in an if/else statement is enclosed within _________.', ['quotes', 'curly brackets', 'parentheses', 'square brackets']],
//     ['String values must be enclosed within ________ when being assigned to variables.', ['commas', 'curly brackets', 'quotes', 'parentheses']],
//     ['A very useful tool used during development and debugging for printing content to the debugger is:', ['JavaScript', 'terminal/bash', 'for loops', 'console.log']],
//     ['Commonly used data types DO NOT include:', ['strings', 'booleans', 'alerts', 'numbers']],
// ];

// Test questions array
var questionsArray = [
  {
    question: "Arrays in JavaScript can be used to store ________.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
];

// Function to update the question and choices on the page
function updateQuestion() {
  var currentQuestion = questionsArray[0];
  document.getElementById("question-title").textContent =
    currentQuestion.question;
  document.getElementById("choices").innerText =
    currentQuestion.choices;
}
