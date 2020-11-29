'use strict'
const { checkWinner } = require('./helpers/checkWinner');

function play(player1Move, player2Move) {
  return checkWinner(player1Move, player2Move);
};

module.exports = {
  play
}