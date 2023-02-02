/**
 * desc: berisi logic website seperti (slider, get api, dsb)
 */
const header = document.querySelector('header');
const navA = document.querySelectorAll('nav ul li a');

const setActiveMenu = () => {
  setTimeout(() => {
    for (i = 0; i < navA.length; i++) {
      navA[i].classList.remove('nav-active');
      if (window.location.href.indexOf(navA[i].href) >= 0) {
        navA[i].className = 'nav-active';
      }
    }
  }, 100);
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.padding = '2px 0px 2px 0px';
    header.style.opacity = '1';
  } else {
    header.style.padding = '4px 0px 4px 0px';
    header.style.opacity = '0.6';
  }
}

window.onscroll = function () {
  scrollFunction();
};
window.onload = setActiveMenu();

const slideContainer = document.querySelector('.slider');
const sliderText = document.querySelector('.slider--text');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');

const sliderImages = [
  {
    src: 'https://image.tmdb.org/t/p/original//faXT8V80JRhnArTAeYXz0Eutpv9.jpg',
    text: 'Taste the magic'
  },
  {
    src: 'https://image.tmdb.org/t/p/original//ofteFQqIntae7wqVAYYyXOCmkF1.jpg',
    text: 'Taste the incredible'
  },
  {
    src: 'https://image.tmdb.org/t/p/original//xOcwcyLM2lqXCrZG8AIHC8DXElF.jpg',
    text: 'Taste the dream'
  }
];

let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
  sliderText.innerHTML = sliderImages[0].text;
};

btnRight.addEventListener('click', function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
    slideCounter = -1;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter + 1].text;
  slideCounter++;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

btnLeft.addEventListener('click', function() {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[sliderImages.length - 1].src})`;
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
    slideCounter = sliderImages.length;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }

  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[slideCounter - 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter - 1].text;
  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});
document.addEventListener('DOMContentLoaded', startSlider);

