const card = document.querySelector('#card');
card.addEventListener('click', (e) => {
  card.classList.toggle('flip');
});

const card2 = document.querySelector('#card-2');
card2.addEventListener('click', (e) => {
  card2.classList.toggle('flip-2');
});

const card3 = document.querySelector('#card-3');
card3.addEventListener('click', (e) => {
  card3.classList.toggle('flip-3');
});
