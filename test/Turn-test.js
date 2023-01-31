const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Turn = require('../src/Turn');

describe('Turn class', () => {
    let turn;
    beforeEach('instantiate turn', () => {
        turn = new Turn('guess', 'card');
    })

    it('should be a function', () => {
        // expect(Turn).to.be.a('function');
        assert.isFunction(Turn)
      });

    it('should be an instance of Turn', () => {
        assert.instanceOf(turn, Turn)
    })

    it('should take two arguments', () => {
        assert.equal(turn.guess, 'guess')
        assert.equal(turn.card, 'card')
    })

    it('should return the players guess', () => {
        assert.equal(turn.returnGuess(), 'guess') 
    })

    it('should return the players card', () => {
        assert.equal(turn.returnCard(), 'card')
    })

    it('should know if players guess is correct', () => {
        assert.equal(turn.evaluateGuess(), true)
    })

    it('should know if a players guess is incorrect', () => {
        assert.equal(turn.evaluateGuess('guess'), false)
    })

    it('should display if a players guess is correct', () => {
        assert.equal(turn.giveFeedback(), 'correct!')
    })
})