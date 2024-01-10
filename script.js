'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const winner = document.querySelector('.winner');

let activePlayer, currentScore, scores, playing;

diceEl.classList.add('hidden');

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const reset = () => {
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  winner.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
};

reset();

//Dice roll button function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Rolling the dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Displaing dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check for rolled dice
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (currentScore !== 0) {
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      //check for winner
      if (scores[activePlayer] >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');

        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');

        winner.classList.remove('hidden');
        winner.textContent = `Player ${activePlayer + 1} has won !`;
      } else {
        //switch to next player
        switchPlayer();
      }
    }
  }
});

btnNew.addEventListener('click', reset);
