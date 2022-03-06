'use strict';

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
    document.querySelector('.message').textContent =
      'Print a number from 1 to 20';

    // if player won
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }

    // if guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  document.querySelector('.guess').value = '';

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
