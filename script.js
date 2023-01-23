let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard
let win = false
const startGameButton = document.querySelector('.start-Game')
const newCardButton = document.querySelector('.new-Card')
const player = document.querySelector('.player-l')
const total = document.querySelector('.sum-l')
const message = document.querySelector('.message-l')

let Deck = {
  
}


const startGame = () => {
player.innerHTML = "Cards: " + " " + firstCard
total.innerHTML = "Sum: " + " " + sum


  console.log("you have pressed the button")
}

const newCard = () => {
  console.log('You have clicked new card button')
}

startGameButton.addEventListener('click', () => startGame())

newCardButton.addEventListener('click', () => newCard())

const checkWin = () => {
  if(sum < 20){
   message.innerHTML = "Draw A New Card"
   console.log("Draw A New Card")
    win = false;
  } else if (sum === 21){
    console.log("You have BlackJack!")
    win = true;
  } else {
    console.log("You have lost the game!")
    win = false;
  }
  
}


console.log(checkWin())