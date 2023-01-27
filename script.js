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
const compareMessage = document.querySelector('.compare-message')

let deck = [
  {
    name: 'Two',
    suit: 'Diamond',
    value: 2,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r02.svg'
  },

  {
    name: 'Three',
    suit: 'Diamond',
    value: 3,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r03.svg'
  },

  {
    name: 'Four',
    suit: 'Diamond',
    value: 4,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r04.svg'
  },

  {
    name: 'Five',
    suit: 'Diamond',
    value: 5,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r05.svg'
  },

  {
    name: 'Six',
    suit: 'Diamond',
    value: 6,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r06.svg'
  },

  {
    name: 'Seven',
    suit: 'Diamond',
    value: 7,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r07.svg'
  },

  {
    name: 'Eight',
    suit: 'Diamond',
    value: 8,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r08.svg'
  },

  {
    name: 'Nine',
    suit: 'Diamond',
    value: 9,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r09.svg'
  },

  {
    name: 'Ten',
    suit: 'Diamond',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-r10.svg'
  },

  {
    name: 'Jack',
    suit: 'Diamond',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-J.svg'
  },

  {
    name: 'Queen',
    suit: 'Diamond',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-Q.svg'
  },

  {
    name: 'King',
    suit: 'Diamond',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-K.svg'
  },

  {
    name: 'Ace',
    suit: 'Diamond',
    value: 11,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/diamonds/diamonds-A.svg'
  },

  {
    name: 'Two',
    suit: 'Heart',
    value: 2,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r02.svg'
  },

  {
    name: 'Three',
    suit: 'Heart',
    value: 3,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r03.svg'
  },

  {
    name: 'Four',
    suit: 'Heart',
    value: 4,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r04.svg'
  },

  {
    name: 'Five',
    suit: 'Heart',
    value: 5,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r05.svg'
  },

  {
    name: 'Six',
    suit: 'Heart',
    value: 6,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r06.svg'
  },

  {
    name: 'Seven',
    suit: 'Heart',
    value: 7,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r07.svg'
  },

  {
    name: 'Eight',
    suit: 'Heart',
    value: 8,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r08.svg'
  },

  {
    name: 'Nine',
    suit: 'Heart',
    value: 9,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r09.svg'
  },

  {
    name: 'Ten',
    suit: 'Heart',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-r10.svg'
  },

  {
    name: 'Jack',
    suit: 'Heart',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-J.svg'
  },

  {
    name: 'Queen',
    suit: 'Heart',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-Q.svg'
  },

  {
    name: 'King',
    suit: 'Heart',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-K.svg'
  },

  {
    name: 'Ace',
    suit: 'Heart',
    value: 11,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/hearts/hearts-A.svg'
  },

  {
    name: 'Two',
    suit: 'Club',
    value: 2,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r02.svg'
  },

  {
    name: 'Three',
    suit: 'Club',
    value: 3,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r03.svg'
  },

  {
    name: 'Four',
    suit: 'Club',
    value: 4,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r04.svg'
  },

  {
    name: 'Five',
    suit: 'Club',
    value: 5,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r05.svg'
  },

  {
    name: 'Six',
    suit: 'Club',
    value: 6,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r06.svg'
  },

  {
    name: 'Seven',
    suit: 'Club',
    value: 7,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r07.svg'
  },

  {
    name: 'Eight',
    suit: 'Club',
    value: 8,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r08.svg'
  },

  {
    name: 'Nine',
    suit: 'Club',
    value: 9,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r09.svg'
  },

  {
    name: 'Ten',
    suit: 'Club',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-r10.svg'
  },

  {
    name: 'Jack',
    suit: 'Club',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-J.svg'
  },

  {
    name: 'Queen',
    suit: 'Club',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-Q.svg'
  },

  {
    name: 'King',
    suit: 'Club',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-K.svg'
  },

  {
    name: 'Ace',
    suit: 'Club',
    value: 11,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/clubs/clubs-A.svg'
  },

  {
    name: 'Two',
    suit: 'Spade',
    value: 2,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r02.svg'
  },

  {
    name: 'Three',
    suit: 'Spade',
    value: 3,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r03.svg'
  },

  {
    name: 'Four',
    suit: 'Spade',
    value: 4,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r04.svg'
  },

  {
    name: 'Five',
    suit: 'Spade',
    value: 5,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r05.svg'
  },

  {
    name: 'Six',
    suit: 'Spade',
    value: 6,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r06.svg'
  },

  {
    name: 'Seven',
    suit: 'Spade',
    value: 7,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r07.svg'
  },

  {
    name: 'Eight',
    suit: 'Spade',
    value: 8,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r08.svg'
  },

  {
    name: 'Nine',
    suit: 'Spade',
    value: 9,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r09.svg'
  },

  {
    name: 'Ten',
    suit: 'Spade',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-r10.svg'
  },

  {
    name: 'Jack',
    suit: 'Spade',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-J.svg'
  },

  {
    name: 'Queen',
    suit: 'Spade',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-Q.svg'
  },

  {
    name: 'King',
    suit: 'Spade',
    value: 10,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-K.svg'
  },

  {
    name: 'Ace',
    suit: 'Spade',
    value: 11,
    img: 'https://raw.githubusercontent.com/NobodysLackey/card-deck/a9f7f7f02464f3720273ce00263357ef1c4b5cbf/images/spades/spades-A.svg'
  }
]

const checkDealerWin = () => {

  if (dealerSum === 21) {
    message.innerHTML = 'Dealer have BlackJack!'
  } else if (dealerSum >= 22) {
    message.innerHTML = 'You have Won BlackJack!'
  } else if (dealerSum > sum && dealerSum <= 21) {
    message.innerHTML = 'Dealer have BlackJack!'
  } else if (sum > dealerSum && sum <= 21) {
    message.innerHTML = 'You have BlackJack! 🎊'
  }
}

const dealerFunction = () => {
  startGameButton.disabled = true
  stayButton.disabled = true
  newCardButton.disabled = true
  const randomIndex = Math.floor(Math.random() * 51)
  let x = deck[0].value
  dealerCard.push(x)
  let finalValue = []
  dealerSum += dealerCard

  

  dealerCard.forEach((num) => {
    finalValue.push(num)
    dealerSum = finalValue.reduce((int, value) => int + value, 0)
    deck.shift()
  })
  checkWin()

  if (dealerSum < 17) {
    dealerFunction()
  } else {
    checkDealerWin()
  }
  compareMessage.innerHTML = '  Dealer Sum:' + dealerSum
}

stayButton.addEventListener('click', () => dealerFunction())

resetButton.addEventListener('click', () => resetGame())

const resetGame = () => {
  location.reload()
}

const startGame = () => {
  deck.sort((a, b) => 0.5 - Math.random())

  addPicP = () => {
    var img = new Image()
    img.src = deck[0].img
    player.appendChild(img)
  }



  let a = deck[0].value
 
  addPicP()
  deck.shift()

  let b = deck[0].value
  
  addPicP()
  deck.shift()

  let sum = a + b
 

  cards.push(a)
  cards.push(b)
 
  startGameButton.disabled = true
  total.innerHTML = 'Your Sum: ' + ' ' + sum
  compareMessage.innerHTML = ' Dealer Sum:___' + dealerCard
  return sum
}


drawCard = () => {

  let z = deck[0].value
  addPicP()
  cards.push(z)
  checkWin()
  deck.shift()
  return deck
}

startGameButton.addEventListener('click', () => startGame())

newCardButton.addEventListener('click', () => drawCard())

const checkWin = () => {
  sum = cards.reduce((a, b) => {
    return a + b
  })
  
  if (sum <= 21) {
    message.innerHTML = 'Do You Want To Draw A New Card?'
  } else if (sum > 21) {
    message.innerHTML = 'You have lost the game!'
    startGameButton.disabled = true
    stayButton.disabled = true
    newCardButton.disabled = true
  }
  total.innerHTML = 'Your Sum: ' + ' ' + sum
  compareMessage.innerHTML = ' ; Dealer Sum:__'

 
}
