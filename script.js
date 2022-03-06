const number = document.querySelector('.number');
const body = document.querySelector('body');
const scoreClass = document.querySelector('.score');
const again = document.querySelector('.again');

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const minNumber = 1;
const maxNumber = 20;

let secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // if there's wrong input
  if (!guess || guess < minNumber || guess > maxNumber) {
    displayMessage('Print a number from 1 to 20');

    // if player won
  } else if (guess === secretNumber) {
    displayMessage('You won!');
    number.textContent = secretNumber;

    number.style.width = '30rem';
    body.style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score -= 1;
      scoreClass.textContent = score;
    } else {
      displayMessage('You lost');
      scoreClass.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  secretNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  document.querySelector('.guess').value = '';

  score = 20;
  scoreClass.textContent = score;

  displayMessage('Start guessing...');
  number.textContent = '?';

  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
});
