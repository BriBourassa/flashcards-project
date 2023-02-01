const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('deck', () => {

    let deck;
    let cards;
    beforeEach('turn', () => {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        cards = [card1, card2, card3]
        deck = new Deck(cards)
    })

    it('should count the cards', () => {
        assert.equal(deck.countCards(), 3)
    })



});




