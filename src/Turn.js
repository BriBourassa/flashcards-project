class Turn{
    constructor(guess, card){
        this.guess = guess;
        this.card = card
    }

returnGuess(){
    return this.guess
}
returnCard(){
    return this.card
}
evaluateGuess(playerGuess){
    if(playerGuess === this.card.correctAnswer){
        return true
    } 
    return false 
}
giveFeedback(guess){
    if(this.evaluateGuess(guess)){
        console.log('correct!')
        return 'correct!'
    }
    console.log('incorrect!')
    return 'incorrect!'
}
};

module.exports = Turn