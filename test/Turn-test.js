const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const assert = chai.assert;

const Turn = require('../src/Turn');

describe('Turn class', () => {
    let turn;
    let card;
    beforeEach('instantiate turn', () => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        turn = new Turn('object', card);
    })

    it('should be a function', () => {
        assert.isFunction(Turn)
      });

    it('should be an instance of Turn', () => {
        assert.instanceOf(turn, Turn)
    })

    it('should take two arguments', () => {
        assert.equal(turn.guess, 'object')
        assert.equal(turn.card, card)
    })

    it('should return the players guess', () => {
        assert.equal(turn.returnGuess(), 'object') 
    })

    it('should return the players card', () => {
        assert.equal(turn.returnCard(), card)
    })

    it('should know if players guess is correct', () => {
        assert.equal(turn.evaluateGuess('object'), true)
    })

    it('should know if a players guess is incorrect', () => {
        assert.equal(turn.evaluateGuess('array'), false)
    })

    it('should display if a players guess is correct', () => {
        assert.equal(turn.giveFeedback('object'), 'correct!')
    })

    it('should display if a players guess is incorrect', () => {
        assert.equal(turn.giveFeedback('array'), 'incorrect!')
    })
});