// Author: Guiyu (Zoey) Zhao

//require file
var fs = require('fs');

// Instructions
// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.

function BasicCard(front, back){
    this.front = front;
    this.back = back;
    this.cardInfo = function(front, back){
        console.log("\n{front: '" + this.front + "'," + 
            "\nback: '" + this.back + "'},");
    }
};

// define a Node module that exports a constructor for creating basic flashcards, 
module.exports = BasicCard;

//Test Below

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

firstPresident.cardInfo();

// var cardArray = [];
// cardArray.push(BasicCard);

console.log(firstPresident);

// "Who was the first president of the United States?"
console.log("front: " + firstPresident.front); 

// "George Washington"
console.log("back: " + firstPresident.back); 


//Export results into a file
var exportedCard = "\n{front: '" + firstPresident.front + "'," + 
"\nback: '" + firstPresident.back + "'},";

fs.appendFile('CardInfo.md', exportedCard, 'utf8', (err) => {
    if (err) throw err;
    console.log('The new card info was appended to file!');
  });