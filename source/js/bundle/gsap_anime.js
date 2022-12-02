const man = document.querySelector('.hero__prew-mt-man-container');
const TextPrew = document.querySelector('.hero__prew-mt-title');
const ImgOnei = document.querySelector('.js-one');
const ImgTwoi = document.querySelector('.js-two');
const ImgThreei = document.querySelector('.js-three');
const ImgGirl = document.querySelector('.comments__girl');
const TextComC = document.querySelector('.comments__csk-c');
const TextComS = document.querySelector('.comments__csk-s');
const BtnTextO = document.querySelector('.comments__otziv-link');
const BtnTextT = document.querySelector('.comments__pozdr-link');
const text = document.querySelector('.hero__prew-mt-text');
const textP = document.querySelector('.js-second');
const els = document.querySelectorAll('.kob__otz-container');

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
	gsap.from(el, 1.5, {opacity: 0, scale: random(.1, 4), x: random(-500, 500), y: random(-500, 500), z: random(-500, 500), delay: idx * 0.02, repeat: 0})
});
 
const tlG = gsap.timeline();
const tlTe = gsap.timeline();
const tlTeT = gsap.timeline();
const tlCoC = gsap.timeline();
const tlCoS = gsap.timeline();
const tlCom = gsap.timeline();
const tl = gsap.timeline();

gsap.from(man, {x: 700, opacity: 0, rotate: 360, duration: 2})

gsap.from(text, {opacity: 0, scale: .8, y: 200, repeat: 0, duration: 1}, "-=.01");

gsap.from(textP, {opacity: 0, scale: .8, y: 200, repeat: 0, duration: 1}, "-=1");

gsap.from(ImgOnei, {x: -250, opacity: 0, duration: 1}, "-=.01");

gsap.from(ImgTwoi, {y: 100, opacity: 0, duration: 1}, "-=1");

gsap.from(ImgThreei, {x: 250,opacity: 0, duration: 1}, "-=1");

// tlG.fromTo(ImgGirl, {x: -700, opacity: 0, rotate: -360}, {x: 0, opacity: 1, rotate: 0});
//   ScrollTrigger.create({animation: tlG, trigger: ImgGirl, start: 'top 70%', end: 'bottom 75%'});

// tlTe.fromTo(BtnTextO, {opacity: 0, rotate: 10}, {opacity: 1, rotate: 0});
//   ScrollTrigger.create({animation: tlTe, trigger: BtnTextO, start: 'top 60%', end: 'bottom 75%'});

// tlTeT.fromTo(BtnTextT, {opacity: 0, rotate: 10}, {opacity: 1, rotate: 0});
//   ScrollTrigger.create({animation: tlTeT, trigger: BtnTextT, start: 'top 60%', end: 'bottom 75%'});

// tlCoC.fromTo(TextComC, {y: 300, opacity: 0}, {y: 0,opacity: 1});
//   ScrollTrigger.create({animation: tlCoC, trigger: TextComC, start: 'top 90%', end: 'bottom 75%'});

// tlCoS.fromTo(TextComS, {y: 300, opacity: 0}, {y: 0, opacity: 1});
//   ScrollTrigger.create({animation: tlCoS, trigger: TextComS, start: 'top 95%', end: 'bottom 75%'});

// tlCom.fromTo(els, {y: -200, scale: .1, opacity: 0}, {y: 0, scale: 1, opacity: 1});
//   ScrollTrigger.create({animation: tlCom, trigger: els, start: 'top 60%', end: 'bottom 20%'});