let cards = []
let DealerCard = []
let sum = 0
let win = false
const startGameButton = document.querySelector('.start-Game')
const newCardButton = document.querySelector('.new-Card')
const player = document.querySelector('.player-l')
const total = document.querySelector('.sum-l')
const message = document.querySelector('.message-l')




let deck = [
'2-C', '3-C', '4-C', '5-C', '6-C', '7-C', '8-C', '9-C', '10-C', '10-CJ', '10-CQ', '10-CK', '11-CA',                
'2-D', '3-D', '4-D', '5-D', '6-D', '7-D', '8-D', '9-D', '10-D', '10-DJ', '10-DQ', '10-DK', '11-DA',
'2-H', '3-H', '4-H', '5-H', '6-H', '7-H', '8-H', '9-H', '10-H', '10-HJ', '10-HQ', '10-HK', '11-HA',
'2-S', '3-S', '4-S', '5-S', '6-S', '7-S', '8-S', '9-S', '10-S', '10-SJ', '10-SQ', '10-SK', '11-SA'
]



//  let deck = {

// spadeTwo: {
//   name: 'Spade of Two',
//   value: 2
// },
// spadeThree: {
//   name: 'Spade of Three',
//   value: 3
// },
// spadeFour: {
//   name: 'Spade of Four',
//   value: 4
// },

// spadeFive: {
//   name: 'Spade of Five',
//   value: 5
// },

// spadeSix: {
//   name: 'Spade of Six',
//   value: 6
// },
// spadeSeven: {
//   name: 'Spade of Seven',
//   value: 7
// },
// spadeEight: {
//   name: 'Spade of Eight',
//   value: 8
// },

// spadeNine: {
//   name: 'Spade of Nine',
//   value: 9
// },

// spadeTen: {
//   name: 'Spade of Ten',
//   value: 10
// },

// spadeKing: {
//   name: 'Ace of King',
//   value: 10
// },
// spadeQueen: {
//   name: 'Spade of Queen',
//   value: 10
// },

// spadeJack: {
//   name: 'Spade of Club',
//   value: 10
// },


// spadeAce: {
//   name: 'Spade of Ace',
//   value: 11
// },







// heartTwo: {
//   name: 'Heart of Two',
//   value: 2
// },
// heartThree: {
//   name: 'Heart of Three',
//   value: 3
// },
// heartFour: {
//   name: 'Heart of Four',
//   value: 4
// },

// heartFive: {
//   name: 'Heart of Five',
//   value: 5
// },

// heartSix: {
//   name: 'Heart of Six',
//   value: 6
// },
// heartSeven: {
//   name: 'Heart of Seven',
//   value: 7
// },
// heartEight: {
//   name: 'Heart of Eight',
//   value: 8
// },

// heartNine: {
//   name: 'Heart of Nine',
//   value: 9
// },

// heartTen: {
//   name: 'Heart of Ten',
//   value: 10
// },

// HeartKing: {
//   name: 'Heart of King',
//   value: 10
// },
// heartQueen: {
//   name: 'Heart of Queen',
//   value: 10
// },

// heartJack: {
//   name: 'Heart of Club',
//   value: 10
// },

// heartAce: {
//   name: 'Heart of Ace',
//   value: 11
// },







// clubTwo: {
//   name: 'Club of Two',
//   value: 2
// },
// clubThree: {
//   name: 'Club of Three',
//   value: 3
// },
// clubFour: {
//   name: 'Club of Four',
//   value: 4
// },

// clubFive: {
//   name: 'Club of Five',
//   value: 5
// },

// clubSix: {
//   name: 'Club of Six',
//   value: 6
// },
// clubSeven: {
//   name: 'Club of Seven',
//   value: 7
// },
// clubEight: {
//   name: 'Club of Eight',
//   value: 8
// },

// clubNine: {
//   name: 'Club of Nine',
//   value: 9
// },

// clubTen: {
//   name: 'Club of Ten',
//   value: 10
// },

// clubKing: {
//   name: 'Club of King',
//   value: 10
// },
// clubQueen: {
//   name: 'club of Queen',
//   value: 10
// },

// clubJack: {
//   name: 'Club of Club',
//   value: 10
// },

// clubAce: {
//   name: 'Club of Ace',
//   value: 11
// },




// diamondTwo: {
//   name: 'Diamond of Two',
//   value: 2
// },
// diamondThree: {
//   name: 'Diamond of Three',
//   value: 3
// },
// diamondFour: {
//   name: 'Diamond of Four',
//   value: 4
// },

// diamondFive: {
//   name: 'Diamond of Five',
//   value: 5
// },

// diamondSix: {
//   name: 'Diamond of Six',
//   value: 6
// },
// diamondSeven: {
//   name: 'Diamond of Seven',
//   value: 7
// },
// diamondEight: {
//   name: 'Diamond of Eight',
//   value: 8
// },

// diamondNine: {
//   name: 'Diamond of Nine',
//   value: 9
// },

// diamondTen: {
//   name: 'Diamond of Ten',
//   value: 10
// },

// diamondKing: {
//   name: 'Diamond of King',
//   value: 10
// },
// diamondQueen: {
//   name: 'Diamond of Queen',
//   value: 10
// },

// diamondJack: {
//   name: 'Diamond of Club',
//   value: 10
// },

// diamondAce: {
//   name: 'Diamond of Ace',
//   value: 11
// },



// }


const startGame = () => {
// player.innerHTML = "Cards: " + " " + firstCard
// total.innerHTML = "Sum: " + " " + sum
deck.sort((a, b) => 0.5 - Math.random())

let x = deck[0]
cards.push(x)

deck.shift()


checkWin()
console.log(parseInt(cards))
  console.log("you have pressed the button")
 
}


const newCard = () => {
  let x = deck[0]
  let finalValue = []
  cards.push(x)
  sum =+ cards
  
  cards.forEach((num) =>{
finalValue.push(parseInt(num))
// console.log(finalValue)
    return finalValue
    
  })
 sum = finalValue.reduce((int, value) => int + value, 0)
console.log(sum)

checkWin()
  console.log('You have clicked new card button')
}

startGameButton.addEventListener('click', () => startGame())

newCardButton.addEventListener('click', () => newCard())

const checkWin = () => {
  if(sum < 20){
  //  message.innerHTML = "Draw A New Card"
   console.log("Draw A New Card")
    win = false;
  } else if (sum === 21){
    console.log("You have BlackJack!")
    win = true;
  } else if (sum > 21) {
    console.log("You have lost the game!")
    win = false;
  }
  
}


