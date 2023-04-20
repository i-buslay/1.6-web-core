const openBurger = document.querySelector('.left-menu__burger')
const closeBurger = document.querySelector('.aside-top__burger-close')
const showBurger = document.querySelector('.aside')
const closeBurgerAside = document.querySelector('.aside__2')
const closeHeader = document.querySelector('.header')

openBurger.addEventListener('click', function () {
  showBurger.classList.toggle('aside--hide')
  closeHeader.classList.toggle('header--hide')
})

closeBurger.addEventListener('click', function () {
  showBurger.classList.toggle('aside--hide')
  closeHeader.classList.toggle('header--hide')
})

closeBurgerAside.addEventListener('click', function () {
  showBurger.classList.toggle('aside--hide')
  closeHeader.classList.toggle('header--hide')
})
