const navInterno = document.querySelectorAll(".menu-js a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

navInterno.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
