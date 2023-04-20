import Swiper, { Pagination, Navigation } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'
import 'swiper/modules/navigation/navigation.scss'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      enabled: false
    }
  }
})
