// Swiper initialization
const swiper = new Swiper('.reviews__slider', {
  spaceBetween: 22,
  loop: true, // This applies globally
  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  },

  breakpoints: {
    320: { // Breakpoint for small screens
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    640: { // Breakpoint for larger screens
      slidesPerView: 2,
    },
  },
});



// Menu button toggle functionality
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu--open');
});

// Accordion functionality
const accordeonTitle = document.querySelectorAll('.accordeon__title');

accordeonTitle.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    // Toggle active class on the clicked accordion
    if (parent.classList.contains('accordeon__item-active')) {
      parent.classList.remove('accordeon__item-active');
    } else {
      accordeonTitle.forEach(element => {
        element.parentNode.classList.remove('accordeon__item-active');
      });

      parent.classList.add('accordeon__item-active');
    }
  });
});
