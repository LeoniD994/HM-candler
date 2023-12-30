const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
}
)


const swiperOne = new Swiper('.feedback__slider', {

    loop: true,

    pagination: {
    el: '.swiper-pagination',
    },

});



const swiperTwo = new Swiper('.certificate__slider', {

    loop: true,

    pagination: {
    el: '.swiper-pagination',
    },
    slidesPerView: 2,
    spaceBetween:20,
});