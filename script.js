//variables
let previousCard
let cardsClicked = 0
let matches = 0
const images = [
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.' +
    '_eWWEoMR5ZwOM_xqMi9LggAAAA%26pid%3DApi&f=1&ipt=a35d7914' +
    "bb39ae6a2e3e66960879aa3f6da5cca9f46fa2cb738bd28dc60ee7ba&ipo=images'>",
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.' +
    'BxylcSBY2WtUdKpjMhp9QAAAAA%26pid%3DApi&f=1&ipt=f66cb781' +
    "9e3c7a82c1370929a704eb76bce853df85f1a72f70fbfd73ba237de9&ipo=images'>",
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Ud2io4Y43q1VOaDJ1j' +
    'PXTgAAAA%26pid%3DApi&f=1&ipt=589cce782cef3183ef9c4fe399640ae9c879dda16fc1ae' +
    "95e2a396002ed2ff2c&ipo=images'>",
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mTHW1IKZYoLI2RF6eSiAaAAAAA' +
    '%26pid%3DApi&f=1&ipt=b7f7cac5af1277ee6893e16471be128c0a3746559dba83ab' +
    "59202c57ce851738&ipo=images'>",
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.KMxinQ5wKvVWCRg' +
    'BRVrrfgAAAA%26pid%3DApi&f=1&ipt=e2662b6a934f59b1eeda7fe97c253d414cf49c' +
    "9a9ffedb3255c8e9f9260791a3&ipo=images'>",
  "<img class='card-image' src='https://external-content.duckduckgo.com" +
    '/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jLU-6dbPtiFzSIQX' +
    'Qp8lwwAAAA%26pid%3DApi&f=1&ipt=fd81b8c61a73eddaed11349823065e16aaae9008' +
    "65d60a625cf2cec22f82b8c9&ipo=images'>"
]

const cardNode = document.querySelectorAll('.card')
const cards = Array.from(cardNode)

//functions
const assignImages = () => {
  images.forEach((image) => {
    let rdmCard1 = cardNode[Math.floor(Math.random() * cards.length)]
    let rdmCard2 = cardNode[Math.floor(Math.random() * cards.length)]
    while (
      rdmCard1.innerHTML !== '' ||
      rdmCard2.innerHTML !== '' ||
      rdmCard1 === rdmCard2
    ) {
      rdmCard1 = cardNode[Math.floor(Math.random() * cards.length)]
      rdmCard2 = cardNode[Math.floor(Math.random() * cards.length)]
    }
    cardNode[cards.indexOf(rdmCard1)].innerHTML = image
    cardNode[cards.indexOf(rdmCard2)].innerHTML = image
    console.log(
      cardNode[cards.indexOf(rdmCard1)].innerHTML +
        cards.indexOf(rdmCard1) +
        ' || rdmCard1: ' +
        images.indexOf(image)
    )
    console.log(
      cardNode[cards.indexOf(rdmCard2)].innerHTML +
        cards.indexOf(rdmCard2) +
        ' || rdmCard2: ' +
        images.indexOf(image)
    )
  })
}

const checkMatch = (frstCard, scndCard) => {
  if (frstCard.innerHTML === scndCard.innerHTML) {
    matches++
    console.log('Match!')
    cardNode[cards.indexOf(frstCard)].removeEventListener('click', () => {
      flipCards(i)
    })
    cardNode[cards.indexOf(scndCard)].removeEventListener('click', () => {
      flipCards(i)
    })
    if (matches == 6) {
      displayWin()
    }
    return true
  }
  return false
}

const displayWin = () => {
  document.querySelector('header').innerHTML =
    '<h1>WIN!</h1>' + '<button id="restart-button">Restart?</button>'

  document.querySelector('#restart-button').addEventListener('click', () => {
    previosCard = ''
    cardsClicked = 0
    matches = 0

    document.querySelector('header').innerHTML = '<h1>Matching Game</h1>'

    clearImages()
    assignImages()
  })
}

const clearImages = () => {
  for (let i = 0; i < cardNode.length; i++) {
    cardNode[i].innerHTML = ''
  }
}

const flipCards = async (index) => {
  cardsClicked++
  console.log(cardsClicked)
  if (cardsClicked <= 2) {
    console.log(cardNode[index].innerHTML)
    cardNode[index].children[0].classList.toggle('card-image')
  }
  if (cardsClicked === 2) {
    if (
      previousCard !== cardNode[index] &&
      checkMatch(previousCard, cards[index])
    ) {
      cardsClicked = 0
      console.log('card check ' + cardsClicked)
      //cards[i].removeEventListener('click', () => {})
    } else {
      console.log('do i exist?')
      setTimeout(
        'cardNode[cards.indexOf(previousCard)].children[0].classList.toggle("card-image")',
        2000
      )
      setTimeout(
        `cardNode[${index}].children[0].classList.toggle("card-image")`,
        2000
      )
      cardsClicked = 0
      await new Promise(() => setTimeout(3000)) //code credit https://www.linkedin.com/pulse/nodejs-16-settimeout-asyncawait-igor-gonchar/
    }
  } else if (cardsClicked > 2) {
    cardsClicked = 0
  }
  previousCard = cardNode[index]
}

assignImages() //assign images

//event listeners
for (let i = 0; i < cards.length; i++) {
  cardNode[i].addEventListener('click', () => {
    flipCards(i)
  })
}
