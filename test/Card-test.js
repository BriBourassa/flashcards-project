const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');

describe('Card', () => {
  let card;
  beforeEach(function () {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  })

  it('should be a function', () => {
    assert.isFunction(Card)
  });

  it('should be an instance of Card', () => {
    assert.instanceOf(card, Card)
  }); 

  it('should store a question', () => {
    assert.equal(card.question, 'What allows you to define a set of related information using key-value pairs?')
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});