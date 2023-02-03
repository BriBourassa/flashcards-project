const Turn = require("./Turn")

class Round{
    constructor(deckObj){
        this.deck = deckObj
        this.currentCard = null
        this.turns = 0
        this.incorrectGuesses = []
        this.turnInstance = null
    }

    returnCurrentCard(){
        this.currentCard = this.deck.cards[this.turns]
        return this.currentCard
    }
    takeTurn(guess){
        this.returnCurrentCard()
        console.log(this.currentCard)
        this.turnInstance = new Turn(guess, this.currentCard)
        this.turns++

        if(!this.turnInstance.evaluateGuess()){
            this.incorrectGuesses.push(this.currentCard.id)
        } 
        console.log(this.currentCard)
        // this.returnCurrentCard()
        
        return this.turnInstance.giveFeedback()
    }

};



module.exports = Round