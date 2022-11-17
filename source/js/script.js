const man = document.querySelector('.hero__prew-mt-man-container');
const TextPrew = document.querySelector('.hero__prew-mt-title');
const ImgOnei = document.querySelector('.onei');
const ImgTwoi = document.querySelector('.twoi');
const ImgThreei = document.querySelector('.threei');
const ImgGirl = document.querySelector('.comments__girl');
const TextComC = document.querySelector('.comments__csk-c');
const TextComS = document.querySelector('.comments__csk-s');
const BtnTextO = document.querySelector('.comments__otziv-link');
const BtnTextT = document.querySelector('.comments__pozdr-link');
const text = document.querySelector('.hero__prew-mt-text');
const textP = document.querySelector('.second');
const els = document.querySelectorAll('.kob__otz-container');


const splitTextP = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
		return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const splitP = splitTextP(textP);

function random(min, max) {
	return (Math.random() * (max - min)) + min;
}

Array.from(splitP.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {opacity: 0, scale: random(.1, 4), x: random(-500, 500), y: random(-500, 500), z: random(-500, 500), delay: idx * 0.01, repeat: 0})
});

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
		return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max) {
	return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	gsap.from(el, 2.5, {opacity: 0, scale: random(.1, 1.5), x: random(-500, 500), y: random(-500, 500), z: random(-500, 500), delay: idx * 0.001, repeat: 0})
});

gsap.from(man, {x: 700, opacity: 0, rotate: 360, duration: 2})
gsap.from(TextPrew, {y: -450, duration: 3.2})

const splitTextT = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
		return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const splitT = splitTextT(TextPrew);

function random(min, max) {
	return (Math.random() * (max - min)) + min;
}

Array.from(splitT.querySelectorAll('.letter')).forEach((el, idx) => {
	gsap.from(el, 2.5, {opacity: 0, scale: random(.1, 4), x: random(-500, 500), y: random(-500, 500), z: random(-500, 500), delay: idx * 0.02, repeat: 0})
});
const tlOn = gsap.timeline();
const tlTw = gsap.timeline();
const tlTh = gsap.timeline();
const tlG = gsap.timeline();
const tlTe = gsap.timeline();
const tlTeT = gsap.timeline();
const tlCoC = gsap.timeline();
const tlCoS = gsap.timeline();
const tlCom = gsap.timeline();
const tl = gsap.timeline();

tlOn.fromTo(ImgOnei, {x: -250,opacity: 0}, {x: 0, opacity: 1});
  ScrollTrigger.create({animation: tlOn, trigger: ImgOnei, start: 'top 85%', end: 'bottom 80%'});

tlTw.fromTo(ImgTwoi, {y: 100, opacity: 0}, {y: 0, opacity: 1});
  ScrollTrigger.create({animation: tlTw, trigger: ImgTwoi, start: 'top 80%', end: 'bottom 20%'});

tlTh.fromTo(ImgThreei, {x: 250, opacity: 0}, {x: 0, opacity: 1});
  ScrollTrigger.create({animation: tlTh, trigger: ImgThreei, start: 'top 85%', end: 'bottom 80%'});

tlG.fromTo(ImgGirl, {x: -700, opacity: 0, rotate: -360}, {x: 0, opacity: 1, rotate: 0});
  ScrollTrigger.create({animation: tlG, trigger: ImgGirl, start: 'top 70%', end: 'bottom 75%'});

tlTe.fromTo(BtnTextO, {opacity: 0, rotate: 10}, {opacity: 1, rotate: 0});
  ScrollTrigger.create({animation: tlTe, trigger: BtnTextO, start: 'top 60%', end: 'bottom 75%'});

tlTeT.fromTo(BtnTextT, {opacity: 0, rotate: 10}, {opacity: 1, rotate: 0});
  ScrollTrigger.create({animation: tlTeT, trigger: BtnTextT, start: 'top 60%', end: 'bottom 75%'});

tlCoC.fromTo(TextComC, {y: 300, opacity: 0}, {y: 0,opacity: 1});
  ScrollTrigger.create({animation: tlCoC, trigger: TextComC, start: 'top 90%', end: 'bottom 75%'});

tlCoS.fromTo(TextComS, {y: 300, opacity: 0}, {y: 0, opacity: 1});
  ScrollTrigger.create({animation: tlCoS, trigger: TextComS, start: 'top 95%', end: 'bottom 75%'});

tlCom.fromTo(els, {y: -200, scale: .1, opacity: 0}, {y: 0, scale: 1, opacity: 1});
  ScrollTrigger.create({animation: tlCom, trigger: els, start: 'top 60%', end: 'bottom 20%'});

function toggleModal() {
  const modal = document.querySelector('.modal');
  const modalO = document.querySelector('.modal__overlay');
  const modalM = document.querySelector('.modal__modal'); 

  if (!modal.classList.contains('show')) {
    modalM.querySelector('.modal__content-text').textContent = this.querySelector('.kob__otz-s').textContent;
    modalM.querySelector('.modal__name').textContent = this.querySelector('.kob__otz-name').textContent;
    modalM.querySelector('.modal__img').src = this.querySelector('.kob__people').src;
  } 

  modal.classList.toggle('show');
  modalO.classList.toggle('showw');
  modalM.classList.toggle('showq');
};

document.querySelector('.modal__button').addEventListener('click', toggleModal);
document.querySelector('.modal__overlay').addEventListener('click', toggleModal);
document.querySelectorAll('.kob__otz-container').forEach(el => el.addEventListener('click', toggleModal));


function toggleGalary() {
  const Galary = document.querySelector('.galary');


  if (!Galary.classList.contains('viev')) {
    Galary.querySelector('.galary__img-prew').src = this.querySelector('.hero__prew-img').src;
  } 

  Galary.classList.toggle('viev');
};

document.querySelectorAll('.hero__prew-img-container').forEach(el => el.addEventListener('click', toggleGalary));
document.querySelector('.galary__button-container').addEventListener('click', toggleGalary);
document.querySelector('.galary__button-left').addEventListener('click', toggleGalary);
document.querySelector('.galary__button-right').addEventListener('click', toggleGalary);




