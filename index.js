let sum = 0;
let cards = []

let hasBlackJack = false;
let isAlive = false;

let message = "";

let player = {
    name: "Bilal",
    chips : 200
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": Rs." + player.chips;

//let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13)+1;

    if(randomNum > 10)
    {
        return 10;
    } 
    else if (randomNum === 1)
    {
        return 11
    }
    else
    {
        return randomNum;
    }
}



function startGame(){

    isAlive = true;
    let firstCard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstCard, secondcard];

    sum = firstCard + secondcard;
    renderGame();
}


function renderGame(){
    cardEl.textContent = "Cards: ";

    for(let i =0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: "  + sum;
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21)
    {
        message = "Wohoo! You've got BlackJack!";
        hasBlackJack = true;
    }
    else
    {
        message = "You're out of the Game!";
        isAlive = false;
    }
    messageEl.textContent = message;

}

function newCard(){
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard();

        cards.push(card);
        console.log(cards);
        sum += card;
    
        renderGame();
    } 

}



