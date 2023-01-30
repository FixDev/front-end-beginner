/**
 * desc: berisi logic website seperti (slider, get api, dsb)
 */
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

window.onload = setActiveMenu();
