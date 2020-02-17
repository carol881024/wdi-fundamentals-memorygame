console.log("Up and running!");
//create objects for each card
var cards = [

{	card: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
{	card: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	card: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	card: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}
	else {
		console.log("Sorry, try again");
	}
}

//function when the user flips a card.
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
    console.log(cards[cardId].card);
	//add card to array of cards 
	cardsInPlay.push(cards[cardId].card);
	//show card's image
	this.setAttribute('src', cards[cardId].cardImage);
	//check if two cards played
	if (cardsInPlay.length === 2) {
		checkForMatch();};
		//Empty cards in play array for next try
		cardInPlay = [];
	}

	var createBoard = function() {
		for (let i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		//Set the src attribute to display the back of card image
		cardElement.setAttribute('src', 'images/back.png');
		
		//Set the data-id attribute with value of index of the card array
		cardElement.setAttribute('data-id', i);
		//add event listener when user clicks on a card
		cardElement.addEventListener('click', flipCard);
		//append the card to the board
		document.getElementById('game-board').appendChild(cardElement);
	}
};
//call the createBoard function to create the board
createBoard();
