//variables
const cards = document.querySelectorAll('.card')
//functions

//event listeners
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    cards[i].innerHTML =
      "<img src='https://external-content.duckduckgo.com" +
      '/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.' +
      '_eWWEoMR5ZwOM_xqMi9LggAAAA%26pid%3DApi&f=1&ipt=a35d7914' +
      "bb39ae6a2e3e66960879aa3f6da5cca9f46fa2cb738bd28dc60ee7ba&ipo=images'>"

    setTimeout(`cards[${i}].innerHTML = ""`, 2000)
  })
}
