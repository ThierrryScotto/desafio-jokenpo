// dependencies 
const chai   = require('chai');
const expect = chai.expect;

// fnuctions
const { play } = require('../src/index');

describe('01 - tests when playing Stone', function() {
  it('Draw must be returned as both plays are equal', function() {
    const result = play('stone', 'stone');

    expect(result.won).to.equal('Draw');
  });

  it('Player 1 must win because stone wins scissors', function() {
    const result = play('stone', 'scissors');

    expect(result.won).to.equal('Player 1');
  });

  it('Player 2 must win because paper wins stone', function() {
    const result = play('stone', 'paper');

    expect(result.won).to.equal('Player 2');
  });
});

describe('02 - tests when playing Paper', function() {
  it('Draw must be returned as both plays are equal', function() {
    const result = play('paper', 'paper');

    expect(result.won).to.equal('Draw');
  });

  it('Player 1 must win because papaer wins stone', function() {
    const result = play('paper', 'stone');

    expect(result.won).to.equal('Player 1');
  });

  it('Player 2 must win because scissors wins paper', function() {
    const result = play('paper', 'scissors');

    expect(result.won).to.equal('Player 2');
  });
});

describe('03 - test when playing Scissors', function() {
  it('Draw must be returned as both plays are equal', function() {
    const result = play('scissors', 'scissors');

    expect(result.won).to.equal('Draw');
  });

  it('Player 1 must win because scissors wins paper', function() {
    const result = play('scissors', 'paper');

    expect(result.won).to.equal('Player 1');
  });

  it('Player 2 must win because stone wins scissors', function() {
    const result = play('scissors', 'stone');

    expect(result.won).to.equal('Player 2');
  });
});

describe('04 - test when you enter invalid values', function() {
  it('You should return an error because test is not a move', function() {
    const result = play('test', 'scissors');

    expect(result.won).to.equal('Error');
  });

  it('You must return an error because 2 is not a move', function() {
    const result = play('scissors', '2');

    expect(result.won).to.equal('Error');
  });

  it('You must return an error because undefined is not a move', function() {
    const result = play('undefined', 'stone');

    expect(result.won).to.equal('Error');
  });

  it('You should return an error because you are sending an empty string', function() {
    const result = play('paper', '');

    expect(result.won).to.equal('Error');
  });
});