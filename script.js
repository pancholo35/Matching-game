//variables
let previousCard
let cardsClicked = 0
const images = [
  "<img src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.' +
    '_eWWEoMR5ZwOM_xqMi9LggAAAA%26pid%3DApi&f=1&ipt=a35d7914' +
    "bb39ae6a2e3e66960879aa3f6da5cca9f46fa2cb738bd28dc60ee7ba&ipo=images'>",
  "<img src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.' +
    'BxylcSBY2WtUdKpjMhp9QAAAAA%26pid%3DApi&f=1&ipt=f66cb781' +
    "9e3c7a82c1370929a704eb76bce853df85f1a72f70fbfd73ba237de9&ipo=images'>"
]

const cards = document.querySelectorAll('.card')

//functions
const checkMatch = (frstCard, scndCard) => {
  if (frstCard.innerHTML === scndCard.innerHTML) {
    console.log('Match!')
    return true
  }
  return false
}

const clearImages = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = ''
  }
}

//event listeners
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cardsClicked++
    if (cardsClicked <= 2) {
      cards[i].innerHTML = images[Math.floor(i / 2)]
    }
    if (cardsClicked === 2) {
      if (checkMatch(previousCard, cards[i])) {
        cards[i].removeEventListener('click', () => {})
        setTimeout('clearImages()', 2000)
        setTimeout('cardsClicked = 0', 2000)
      }
    }
    previousCard = cards[i]
  })
}
