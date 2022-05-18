'use strict';

/* document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 1;
console.log((document.querySelector('.guess').value = 15));
console.log(document.querySelector('.guess').value);
console.log((document.querySelector('.guess').value = 13));
 */

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let numberStyleContent = function (width, content) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = content;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (
    //when there is no input
    !guess
  ) {
    displayMessage('❌ No number');
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('✔ Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberStyleContent('30rem', secretNumber);
    if (score > hightScore)
      document.querySelector('.highscore').textContent = score;
  }
  //geuss too hight
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' ⬆ Too Hight' : '⬇ Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💔 You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  numberStyleContent('15rem', '?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
