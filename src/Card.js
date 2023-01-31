class Card{
    constructor(id, question, option, correctAnswer){
        this.id = id;
        this.question = question;
        this.answers = option;
        this.correctAnswer = correctAnswer
    }
};

module.exports = Card