export default function initDataLoad() {}

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const element = document.querySelectorAll('[data-load]');
const animationMod = 'animation';

function animationScroll() {
  const top = window.pageYOffset + window.innerHeight * 0.75;
  element.forEach(function (e) {
    if (top > e.offsetTop) {
      e.classList.add(animationMod);
    } else {
      e.classList.remove(animationMod);
    }
  });
}

animationScroll();

if (element.length) {
  window.addEventListener(
    'scroll',
    debounce(function () {
      animationScroll();
      console.log('dsadas');
    }, 200),
  );
}
