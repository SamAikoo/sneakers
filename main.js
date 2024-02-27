'use strict';

{
  const header = document.getElementById('header');
  const toggleBtn = document.querySelector('.toggle_btn');
  const mask = document.getElementById('mask');
  const linkClick = document.querySelectorAll('.link-click');

  toggleBtn.addEventListener('click', () => {
    if (header.classList.contains('open')) {
      header.classList.remove('open');
    } else {
      header.classList.add('open');
    }
  });

  mask.addEventListener('click', () => {
    header.classList.remove('open');
  });

  for (let i = 0; i < linkClick.length; i++) {
    linkClick[i].addEventListener('click', () => {
      header.classList.remove('open');
    })
  }


  /* スワイパー */
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints:
    {
      760: {
        slidesPerView: 4
      }
    },
  });

  /* スムーススクロール */
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      console.log(href);
      let targetElement = document.getElementById(href.replace('#', ''));

      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.screenY;
      const gap = 40;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      })
    })
  }

  /* フェードイン */
  let fadeInTarget = document.querySelectorAll('.fadein');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;
      // if(scroll > offset - windowHeight + 150){
      //   fadeInTarget[i].classList.add('scrollin');
      // }
      if (0 > rect - windowHeight + 150) {
        fadeInTarget[i].classList.add('scrollin');
      }
    }
  });
}