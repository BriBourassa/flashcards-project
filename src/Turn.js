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
evaluateGuess(){
    if(this.guess === card.correctAnswer){
        return true
    }
    return false
}
giveFeedback(){
    if(this.evaluateGuess()){
        console.log('correct!')
    }
    console.log('incorrect!')
}
};

module.exports = Turn