const correctAnswer = '4';



function checkAnswer () {
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  console.log (userAnswer);

  let textContent = document.getElementById('feedback');

  if (userAnswer == correctAnswer) {
    textContent.innerHTML = "Correct! Well done."
  } else if (userAnswer != correctAnswer) {
    textContent.innerHTML = "That's incorrect. Try again!"
  }

 console.log(textContent)
};

let button = document.getElementById('submit-answer');

button.addEventListener('click', checkAnswer);