let cards = []
let dealerCard = []
let sum = 0
let dealerSum
let win = false
const startGameButton = document.querySelector('.start-Game')
const newCardButton = document.querySelector('.new-Card')
const player = document.querySelector('.player-l')
const total = document.querySelector('.sum-l')
const message = document.querySelector('.message-l')
const resetButton = document.querySelector('.reset-button')
const stayButton = document.querySelector('.stay-button')




// let deck = [

// '2-C', '3-C', '4-C', '5-C', '6-C', '7-C', '8-C', '9-C', '10-C', '10-CJ', '10-CQ', '10-CK', '11-CA',      

// '2-D', '3-D', '4-D', '5-D', '6-D', '7-D', '8-D', '9-D', '10-D', '10-DJ', '10-DQ', '10-DK', '11-DA',

// '2-H', '3-H', '4-H', '5-H', '6-H', '7-H', '8-H', '9-H', '10-H', '10-HJ', '10-HQ', '10-HK', '11-HA',

// '2-S', '3-S', '4-S', '5-S', '6-S', '7-S', '8-S', '9-S', '10-S', '10-SJ', '10-SQ', '10-SK', '11-SA'

// ]



  let deck = [


{
  name: 'Two',
  suit: "Diamond",
  value: 2,
  img: " "
},

{
  name: 'Three',
  suit: "Diamond",
  value: 3,
  img: " "
},

{
  name: 'Four',
  suit: "Diamond",
  value: 4,
  img: " "
},

{
    name: 'Five',
    suit: "Diamond",
    value: 5,
    img: " "
},

{
    name: 'Six',
    suit: "Diamond",
    value: 6,
    img: " "
},

{
    name: 'Seven',
    suit: "Diamond",
    value: 7,
    img: " "
},

{
    name: 'Eight',
    suit: "Diamond",
    value: 8,
    img: " "
},

{
    name: 'Nine',
    suit: "Diamond",
    value: 9,
    img: " "
},

{
    name: 'Ten',
    suit: "Diamond",
    value: 10,
    img: " "
},

{
    name: 'Jack',
    suit: "Diamond",
    value: 10,
    img: " "
},

{
    name: 'Queen',
    suit: "Diamond",
    value: 10,
    img: " "
},

{
    name: 'King',
    suit: "Diamond",
    value: 10,
    img: " "
},

{
  name: 'Spade',
  suit: "Diamond",
  value: 11,
  img: " "
},




{
  name: 'Two',
  suit: "Heart",
  value: 2,
  img: " "
},

{
  name: 'Three',
  suit: "Heart",
  value: 3,
  img: " "
},

{
  name: 'Four',
  suit: "Heart",
  value: 4,
  img: " "
},

{
    name: 'Five',
    suit: "Heart",
    value: 5,
    img: " "
},

{
    name: 'Six',
    suit: "Heart",
    value: 6,
    img: " "
},

{
     
    name: 'Seven',
    suit: "Heart",
    value: 7,
    img: " "
},

{
    name: 'Eight',
    suit: "Heart",
    value: 8,
    img: " "
},

{
    name: 'Nine',
    suit: "Heart",
    value: 9,
    img: " "
},

{
    name: 'Ten',
    suit: "Heart",
    value: 10,
    img: " "
},

{
    name: 'Jack',
    suit: "Heart",
    value: 10,
    img: " "
},

{
    name: 'Queen',
    suit: "Heart",
    value: 10,
    img: " "
},

{
    name: 'King',
    suit: "Heart",
    value: 10,
    img: " "
},

{
  name: 'Spade',
  suit: "Heart",
  value: 11,
  img: " "
},






{
  name: 'Two',
  suit: "Club",
  value: 2,
  img: " "
},

{
  name: 'Three',
  suit: "Club",
  value: 3,
  img: " "
},

{
  name: 'Four',
  suit: "Club",
  value: 4,
  img: " "
},

{
    name: 'Five',
    suit: "Club",
    value: 5,
    img: " "
},

{
    name: 'Six',
    suit: "Club",
    value: 6,
    img: " "
},

{  
    name: 'Seven',
    suit: "Club",
    value: 7,
    img: " "
},

{
    name: 'Eight',
    suit: "Club",
    value: 8,
    img: " "
},

{
    name: 'Nine',
    suit: "Club",
    value: 9,
    img: " "
},

{
    name: 'Ten',
    suit: "Club",
    value: 10,
    img: " "
},

{
    name: 'Jack',
    suit: "Club",
    value: 10,
    img: " "
},

{
    name: 'Queen',
    suit: "Club",
    value: 10,
    img: " "
},

{
    name: 'King',
    suit: "Club",
    value: 10,
    img: " "
},

{
  name: 'Spade',
  suit: "Club",
  value: 11,
  img: " "
},



{
  name: 'Two',
  suit: "Ace",
  value: 2,
  img: " "
},

{
  name: 'Three',
  suit: "Ace",
  value: 3,
  img: " "
},

{
  name: 'Four',
  suit: "Ace",
  value: 4,
  img: " "
},

{
    name: 'Five',
    suit: "Ace",
    value: 5,
    img: " "
},

{
    name: 'Six',
    suit: "Ace",
    value: 6,
    img: " "
},

{    
    name: 'Seven',
    suit: "Ace",
    value: 7,
    img: " "
},

{
    name: 'Eight',
    suit: "Ace",
    value: 8,
    img: " "
},

{
    name: 'Nine',
    suit: "Ace",
    value: 9,
    img: " "
},

{
    name: 'Ten',
    suit: "Ace",
    value: 10,
    img: " "
},

{
    name: 'Jack',
    suit: "Ace",
    value: 10,
    img: " "
},

{
    name: 'Queen',
    suit: "Ace",
    value: 10,
    img: " "
},

{
    name: 'King',
    suit: "Ace",
    value: 10,
    img: " "
},

{ 
  name: 'Spade',
  suit: "Ace",
  value: 11,
  img: " "
}

  ]





const checkDealerWin = () => {
  if (dealerSum === 21) {
   message.innerHTML = "Dealer have BlackJack!" + "Dealer Sum: " + dealerSum + "Player Sum: " + sum
   console.log("Dealer have BlackJack!")
   } else if(dealerSum >= 22){
   message.innerHTML = "You have Won BlackJack!"
   console.log("You have Won BlackJack!")
   } else if(dealerSum > sum && dealerSum < 22){
     message.innerHTML = "Dealer have BlackJack!"
   console.log("Dealer have BlackJack!")
   } else if (sum > dealerSum && sum < 22){
   message.innerHTML = "You have Won BlackJack!"
    console.log("You have Won BlackJack!")
   }
 }

const stayFunction = () => {
startGameButton.disabled = true
stayButton.disabled = true
newCardButton.disabled = true
dealerFunction()
}



const dealerFunction = () => {
  const randomIndex = (Math.floor(Math.random()*51))
  let x = deck[randomIndex].value
  console.log(x)
  dealerCard.push(x)
  let finalValue = []
  dealerSum += dealerCard
  deck.shift()
  
 dealerCard.forEach((num) =>{
 finalValue.push(num)
 console.log(finalValue)
 dealerSum = finalValue.reduce((int, value) => int + value, 0)
    
  })


 if(dealerSum < 17){
   dealerFunction()
 } else {
  checkDealerWin()
  }
 
  
 console.log("Dealer draw" + " " + dealerSum)
 console.log("Your draw" + " " + sum)
}






stayButton.addEventListener('click', () => stayFunction())

resetButton.addEventListener('click', () => resetGame())


const resetGame = () => {
location.reload()


 }

const startGame = () => {
const randomIndex = (Math.floor(Math.random()*51))



let x = deck[randomIndex].value
// let x = deck[0]
cards.push(x)

deck.shift()
console.log(x)
startGameButton.disabled = true
player.innerHTML = "Cards: " + " " + cards
total.innerHTML = "Sum: " + " " + cards

// checkWin()


  console.log("you have pressed the button")
 
}


const newCard = () => {
  const randomIndex = (Math.floor(Math.random()*51))

  let x = deck[randomIndex].value
  let finalValue = []
  cards.push(x)
  sum =+ cards
  deck.shift()
  cards.forEach((num) =>{
finalValue.push(num)
sum = finalValue.reduce((int, value) => int + value, 0)
    
player.innerHTML = "Cards: " + " " + cards
total.innerHTML = "Sum: " + " " + sum

    return finalValue


  })

console.log(sum)

checkWin()
  console.log('You have clicked new card button')
}

startGameButton.addEventListener('click', () => startGame())

newCardButton.addEventListener('click', () => newCard())

const checkWin = () => {
  if(sum < 20){
  message.innerHTML = "Do You Want To Draw A New Card?"
   console.log("Do You Want To Draw A New Card?")
  } else if (sum === 21){
    message.innerHTML = "You have BlackJack!"
    console.log("You have BlackJack!")
    startGameButton.disabled = true
    stayButton.disabled = true
    newCardButton.disabled = true
    
  } else if (sum > 21) {
    message.innerHTML = 'You have lost the game!'
    console.log("You have lost the game!")
    startGameButton.disabled = true
    stayButton.disabled = true
    newCardButton.disabled = true
  }


  

}


