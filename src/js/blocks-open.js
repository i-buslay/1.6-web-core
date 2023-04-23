const openCallHeader = document.querySelector('.feedback__call')
const openChatHeader = document.querySelector('.feedback__chat')

const blockAside = document.querySelector('.aside')
const openCallAside = blockAside.querySelector('.feedback__call')
const openChatAside = blockAside.querySelector('.feedback__chat')
const blockMain = document.querySelector('.main')

const openChatInteraction1 = document.querySelector('.interaction__repair')

const blockAbout = document.querySelector('.about')
const openChatInteraction2 = blockAbout.querySelector('.interaction__repair')

const openChatOffer = document.querySelector('.offer__open')

const openPrices = document.querySelector('.prices__list')
const openPricesButton = openPrices.querySelectorAll('.order')

const blockChat = document.querySelector('.block-feedback')
const blockCall = document.querySelector('.block-call')

openCallHeader.addEventListener('click', function () {
  blockCall.classList.toggle('block-call--hide')
})

openChatHeader.addEventListener('click', function () {
  blockChat.classList.toggle('block-feedback--hide')
})

openCallAside.addEventListener('click', function () {
  blockCall.classList.toggle('block-call--hide')
  blockMain.classList.toggle('main--none')
})

openChatAside.addEventListener('click', function () {
  blockChat.classList.toggle('block-feedback--hide')
  blockMain.classList.toggle('main--none')
})

openChatInteraction1.addEventListener('click', function () {
  blockChat.classList.toggle('block-feedback--hide')
  blockMain.classList.toggle('main--none')
})

openChatInteraction2.addEventListener('click', function () {
  blockChat.classList.toggle('block-feedback--hide')
  blockMain.classList.toggle('main--none')
})

openChatOffer.addEventListener('click', function () {
  blockChat.classList.toggle('block-feedback--hide')
  blockMain.classList.toggle('main--none')
})

const blockChatClose = blockChat.querySelector('.block-feedback__1')
const blockCallClose = blockCall.querySelector('.block-call__1')

blockChatClose.addEventListener('click', function () {
  blockChat.classList.toggle('block-feedback--hide')
  blockMain.classList.toggle('main--none')
})

blockCallClose.addEventListener('click', function () {
  blockCall.classList.toggle('block-call--hide')
  blockMain.classList.toggle('main--none')
})

for (var i = 0; i < openPricesButton.length; i++) {
  openPricesButton[i].addEventListener('click', function () {
    console.log(openPricesButton)
    blockCall.classList.toggle('block-call--hide')
    blockMain.classList.toggle('main--none')
  })
}
