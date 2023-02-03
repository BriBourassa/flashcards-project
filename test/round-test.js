const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('round class', () => {

let deck;
let cards;
let round;
beforeEach('round', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    cards = [card1, card2, card3]
    deck = new Deck(cards)
    round = new Round(deck)
})



it('should return the current card', () => {
    assert.deepEqual(round.returnCurrentCard(), { id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
})



it('should update turn count', () => {
    assert.equal(round.turns, 0)
    round.takeTurn()
    assert.equal(round.turns, 1)
})

it('should evaluate guesses', () => {
    
    assert.equal(round.takeTurn('sea otter'), 'correct!')
    console.log(round.turns)
})


})


