'use strict'

function checkWinner(player1, player2) {
  if (player1 === player2) {
    return { won: "Draw", message: `(player1) ${player1} X ${player2} (player2)` };
  }

  let concatP1P2 = `${player1.trim()} x ${player2.trim()}`;

  const winner = {
    "paper x scissors" : { won: "Player 2", message: `(player1) ${player1} X ${player2} (player2)` },
    "scissors x paper" : { won: "Player 1", message: `(player1) ${player1} X ${player2} (player2)` },
    "stone x paper"    : { won: "Player 2", message: `(player1) ${player1} X ${player2} (player2)` },
    "paper x stone"    : { won: "Player 1", message: `(player1) ${player1} X ${player2} (player2)` },
    "scissors x stone" : { won: "Player 2", message: `(player1) ${player1} X ${player2} (player2)` },
    "stone x scissors" : { won: "Player 1", message: `(player1) ${player1} X ${player2} (player2)` },
  }

  const result = winner[concatP1P2];

  if (!result) {
    return { won: "Error", message: 'Invalid values' };
  };

  return result;  
}

module.exports = { 
  checkWinner
}