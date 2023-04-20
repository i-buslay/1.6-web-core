const heightShowBrands = document.querySelector('.read__1')
const heightHideBrands = document.querySelector('.read__close1')
const blockBrands = document.querySelector('.brands__list')
const blockTechnic = document.querySelector('.technic__list')
const heightShowTechnic = document.querySelector('.read__2')
const heightHideTechnic = document.querySelector('.read__close2')
const blockArticle = document.querySelector('.article__p')
const heightShowArticle = document.querySelector('.read__article')

heightShowBrands.addEventListener('click', function () {
  blockBrands.classList.toggle('swiper--h160')
  heightShowBrands.classList.toggle('read--hide')
  heightHideBrands.classList.toggle('read--hide')
})

heightHideBrands.addEventListener('click', function () {
  blockBrands.classList.toggle('swiper--h160')
  heightShowBrands.classList.toggle('read--hide')
  heightHideBrands.classList.toggle('read--hide')
})

heightShowTechnic.addEventListener('click', function () {
  blockTechnic.classList.toggle('swiper--h160')
  heightShowTechnic.classList.toggle('read--hide')
  heightHideTechnic.classList.toggle('read--hide')
})

heightHideTechnic.addEventListener('click', function () {
  blockTechnic.classList.toggle('swiper--h160')
  heightShowTechnic.classList.toggle('read--hide')
  heightHideTechnic.classList.toggle('read--hide')
})

heightShowArticle.addEventListener('click', function () {
  blockArticle.classList.toggle('article--h')
  heightShowArticle.classList.add('read--hide')
})
