export default function initModal() {
  let imagens = document.querySelectorAll('.big-img');
  let modal = document.querySelector('.container-modal');
  let modalImg = document.querySelector('#modal-img');
  let fechar = document.querySelector('#fechar');
  let srcValue = '';

  for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function () {
      srcValue = imagens[i].getAttribute('src');
      modalImg.setAttribute('src', srcValue);
      modal.classList.toggle('modal-ativo');
    });
  }

  fechar.addEventListener('click', function () {
    modal.classList.toggle('modal-ativo');
  });
}
