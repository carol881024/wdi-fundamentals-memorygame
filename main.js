console.log("Up and running!");
alert("Hello, friends.")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo)
console.log("User flipped" + cardTwo);
//Check to see if two cards have been played
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}