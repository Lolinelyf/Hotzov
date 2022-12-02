const htmlEl = document.querySelector('html');
function toggleModal() {
  const modal = document.querySelector('.modal');
  const modalO = document.querySelector('.modal__overlay');
  const modalM = document.querySelector('.modal__modal'); 
  htmlEl.style.overflow = 'auto';
 

  if (!modal.classList.contains('hide')) {
    modalM.querySelector('.modal__content-text').textContent = this.querySelector('.kob__otz-s').textContent;
    modalM.querySelector('.modal__name').textContent = this.querySelector('.kob__otz-name').textContent;
    modalM.querySelector('.modal__img').src = this.querySelector('.kob__people').src;
    htmlEl.style.overflow = 'hidden';
  } 

  modal.classList.toggle('hide');
  modalO.classList.toggle('hide');
  modalM.classList.toggle('hide_anime');  
};

document.querySelector('.modal__button').addEventListener('click', toggleModal);
document.querySelector('.modal__overlay').addEventListener('click', toggleModal);
document.querySelectorAll('.kob__otz-container').forEach(el => el.addEventListener('click', toggleModal));
