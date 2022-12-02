function toggleReview() {
  const reviewOv = document.querySelector('.review__overlay');
  const review = document.querySelector('.review');
  htmlEl.style.overflow = 'auto';

  if (!review.classList.contains('close')) {
    review.querySelector('.review__send').textContent = this.querySelector('.js-tc').textContent
    htmlEl.style.overflow = 'hidden';
  }

  reviewOv.classList.toggle('close');
  review.classList.toggle('close');
};


document.querySelector('.review__overlay').addEventListener('click', toggleReview);
document.querySelector('.review__close').addEventListener('click', toggleReview);
document.querySelectorAll('.js-link').forEach(el => el.addEventListener('click', toggleReview));
