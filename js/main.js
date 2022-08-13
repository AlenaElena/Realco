const headerNavBtn = document.querySelector('.header__nav-link--btn')
const headerNavSubmenu = document.querySelector('.header__nav-submenu')
headerNavBtn.addEventListener('mouseover', function () {
  headerNavSubmenu.classList.toggle('header__nav-submenu--active')
  headerNavBtn.classList.toggle('header__nav-link--btn-active')
})

const burgerBtn = document.querySelector('.header__nav-burger');
const headerNavList = document.querySelector('.header__nav-list')
burgerBtn.addEventListener('click', function() {
  headerNavList.classList.toggle('header__nav-list--active');
  burgerBtn.classList.toggle('header__nav-burger--active');
})


const contactInfo = document.querySelectorAll('.bottom-content__info');
contactInfo.forEach(el => {
  const btnContactAgent = el.querySelector('.bottom-content__info-btn');
  const listContactAgent = el.querySelector('.bottom-content__list');

  btnContactAgent.addEventListener('click', function(){
    btnContactAgent.classList.toggle('bottom-content__info-btn--active')
    listContactAgent.classList.toggle('bottom-content__list--active')
  })
});


const footerItems = document.querySelectorAll('.footer__content-wrap');
footerItems.forEach(footerItem => {
  const footerItemLink = footerItem.querySelector('.footer__content-subtitle');
  const footerItemList = footerItem.querySelector('.footer__content-list')
  footerItemLink.addEventListener('click', function(){
    footerItemList.classList.toggle('footer__content-list--active');
    footerItemLink.classList.toggle('footer__content-subtitle--active')
  })
});


const productCards = new Swiper(".products__list", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
const blogCards = new Swiper(".blog__cards", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      540: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      1040: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
  },
});

