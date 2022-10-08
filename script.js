//variables
let previousCard
let cardsClicked = 0
const images = [
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.' +
    '_eWWEoMR5ZwOM_xqMi9LggAAAA%26pid%3DApi&f=1&ipt=a35d7914' +
    "bb39ae6a2e3e66960879aa3f6da5cca9f46fa2cb738bd28dc60ee7ba&ipo=images'>",
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.' +
    'BxylcSBY2WtUdKpjMhp9QAAAAA%26pid%3DApi&f=1&ipt=f66cb781' +
    "9e3c7a82c1370929a704eb76bce853df85f1a72f70fbfd73ba237de9&ipo=images'>"
]

const cardNode = document.querySelectorAll('.card')
const cards = Array.from(cardNode)

//functions
const assignImages = () => {
  images.forEach((image) => {
    let rdmCard1 = cardNode[Math.floor(Math.random() * cards.length)]
    let rdmCard2 = cardNode[Math.floor(Math.random() * cards.length)]
    console.log(rdmCard1.innerHTML)
    console.log(rdmCard2.innerHTML)
    /*while (rdmCard1.innerHTML !== '' || rdmCard2.innerHTML !== '') {
      rdmCard1 = cardNode[Math.floor(Math.random() * cards.length)]
      rdmCard2 = cardNode[Math.floor(Math.random() * cards.length)]
    }*/
    cardNode[cards.indexOf(rdmCard1)].innerHTML = image
    cardNode[cards.indexOf(rdmCard2)].innerHTML = image
  })
}

const checkMatch = (frstCard, scndCard) => {
  if (frstCard.innerHTML === scndCard.innerHTML) {
    console.log('Match!')
    return true
  }
  return false
}

const clearImages = () => {
  for (let i = 0; i < cardNode.length; i++) {
    cardNode[i].innerHTML = ''
  }
}

assignImages() //assign images

//event listeners
for (let i = 0; i < cards.length; i++) {
  cardNode[i].addEventListener('click', () => {
    cardsClicked++
    if (cardsClicked <= 2) {
      cardNode[i].children[0].classList.toggle('card-image')
    }
    if (cardsClicked === 2) {
      if (checkMatch(previousCard, cards[i])) {
        cardsClicked = 0
        //cards[i].removeEventListener('click', () => {})
      } else {
        setTimeout(
          'cardNode[cards.indexOf(previousCard)].children[0].classList.toggle("card-image")',
          2000
        )
        setTimeout(
          `cardNode[${i}].children[0].classList.toggle("card-image")`,
          2000
        )
        setTimeout('cardsClicked = 0', 2000)
      }
    }
    previousCard = cardNode[i]
  })
}
