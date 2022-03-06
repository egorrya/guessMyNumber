'use strict';

const minNumber = 1;
const maxNumber = 20;
const secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Print a number from 1 to 20';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won!';
  } else {
    document.querySelector('.message').textContent = "You're wrong. Try again";
  }
});
