let cards = [
    "CLUB-1.svg",
    "CLUB-2.svg",
    "CLUB-3.svg",
    "CLUB-4.svg",
    "CLUB-5.svg",
    "CLUB-6.svg",
    "CLUB-7.svg",
    "CLUB-8.svg",
    "CLUB-9.svg",
    "CLUB-10.svg",
    "CLUB-11-JACK.svg",
    "CLUB-12-QUEEN.svg",
    "CLUB-13-KING.svg",
    "DIAMOND-1.svg",
    "DIAMOND-2.svg",
    "DIAMOND-3.svg",
    "DIAMOND-4.svg",
    "DIAMOND-5.svg",
    "DIAMOND-6.svg",
    "DIAMOND-7.svg",
    "DIAMOND-8.svg",
    "DIAMOND-9.svg",
    "DIAMOND-10.svg",
    "DIAMOND-11-JACK.svg",
    "DIAMOND-12-QUEEN.svg",
    "DIAMOND-13-KING.svg",
    "HEART-1.svg",
    "HEART-2.svg",
    "HEART-3.svg",
    "HEART-4.svg",
    "HEART-5.svg",
    "HEART-6.svg",
    "HEART-7.svg",
    "HEART-8.svg",
    "HEART-9.svg",
    "HEART-10.svg",
    "HEART-11-JACK.svg",
    "HEART-12-QUEEN.svg",
    "HEART-13-KING.svg",
    "SPADE-1.svg",
    "SPADE-2.svg",
    "SPADE-3.svg",
    "SPADE-4.svg",
    "SPADE-5.svg",
    "SPADE-6.svg",
    "SPADE-7.svg",
    "SPADE-8.svg",
    "SPADE-9.svg",
    "SPADE-10.svg",
    "SPADE-11-JACK.svg",
    "SPADE-12-QUEEN.svg",
    "SPADE-13-KING.svg",
    "JOKER-1.svg",
    "JOKER-2.svg",
    "JOKER-3.svg"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawCard() {
    document.getElementById("text").style.display = "none";
    document.getElementById("card").style.display = "";
    document.getElementById("drawn").style.display = "";
    document.getElementById("drawnCardsText").style.display = "";
    // get array lenght
    let cardsLength = cards.length;
    if (cardsLength == 0) {
        document.getElementById("card").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("text").style.display = "";
        document.getElementById("text").innerHTML = "Alle Karten gezogen!";
        return;
    }
    // get random number
    let randomNumber = Math.floor(Math.random() * cardsLength);
    // get random card
    let randomCard = cards[randomNumber];
    // remove card from array
    cards.splice(randomNumber, 1);
    // insert card in doc
    let card = document.getElementById("card");
    card.src = `./cards/${randomCard}`
    let drawn = document.getElementById("drawn");
    let li = document.createElement("li");
    // get card name
    let cardName = randomCard.split(".")[0];
    // transform card name to german
    let cardPartial = cardName.split("-");
    let cardType = cardPartial[0];
    let cardNumber = cardPartial[1];
    switch (cardType) {
        case "CLUB":
            cardType = "Kreuz";
            break;
        case "DIAMOND":
            cardType = "Karo";
            break;
        case "HEART":
            cardType = "Herz";
            break;
        case "SPADE":
            cardType = "Pik";
            break;
        case "JOKER":
            cardType = "Joker";
            break;
    }
    switch (cardNumber) {
        case "1":
            cardNumber = "Ass";
            break;
        case "11":
            cardNumber = "Bube";
            break;
        case "12":
            cardNumber = "Dame";
            break;
        case "13":
            cardNumber = "König";
            break;
    }
    cardName = `${cardType} ${cardNumber}`;
    let textchild = document.createTextNode(cardName);
    li.insertBefore(textchild, li.childNodes[0]);
    drawn.insertBefore(li, drawn.childNodes[0]);
    
}

// run on load
window.onload = function() {
    shuffleArray(cards);
};