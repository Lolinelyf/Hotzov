const tl = gsap.timeline()
man = document.querySelector('.hero__prew-mt-man-container');
TextPrew = document.querySelector('.hero__prew-mt-title');
ImgOnei = document.querySelector('.onei');
ImgTwoi = document.querySelector('.twoi');
ImgThreei = document.querySelector('.threei');
ImgGirl = document.querySelector('.comments__girl');
TextComC = document.querySelector('.comments__csk-c');
TextComS = document.querySelector('.comments__csk-s');
BtnTextO = document.querySelector('.comments__otziv-link');
BtnTextT = document.querySelector('.comments__pozdr-link');
text = document.querySelector('.hero__prew-mt-text');
textP = document.querySelector('.second');

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
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: random(.1, 4),
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.01,
		repeat: 0,
	})
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
	gsap.from(el, 2.5, {
		opacity: 0,
		scale: random(.1, 1.5),
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.001,
		repeat: 0,
	})
});

gsap.from(man, {
	x: 700,
	opacity: 0,
	rotate: 360,
	duration: 2
})
gsap.from(TextPrew, {
	y: -450,
	duration: 3.2
})

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
	gsap.from(el, 2.5, {
		opacity: 0,
		scale: random(.1, 4),
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});
const tlG = gsap.timeline()
tl.fromTo(ImgOnei, {
	x: -250,
	opacity: 0,
	duration: 3
}, {
	x: 0,
	opacity: 1
})
tl.fromTo(ImgTwoi, {
	y: 100,
	opacity: 0,
	duration: 2
}, {
	y: 0,
	opacity: 1
}, "-=2")
tl.fromTo(ImgThreei, {
	x: 250,
	opacity: 0,
	duration: 3
}, {
	x: 0,
	opacity: 1
}, "-=.5")
tlG.fromTo(ImgGirl, {
	x: -700,
	opacity: 0,
	rotate: -360,
	duration: 1.5
}, {
	x: 0,
	opacity: 1,
	rotate: 0
}, "+=1")
tl.fromTo(BtnTextO, {
	y: 100,
	opacity: 0,
	rotate: 15,
	duration: 1.5
}, {
	y: 0,
	opacity: 1,
	rotate: 0
})
tl.fromTo(BtnTextT, {
	y: 200,
	opacity: 0,
	rotate: 35,
	duration: 1.5
}, {
	y: 0,
	opacity: 1,
	rotate: 0
})
tl.fromTo(TextComC, {
	y: 300,
	opacity: 0,
	duration: 1.5
}, {
	y: 0,
	opacity: 1
})
tl.fromTo(TextComS, {
	y: 300,
	opacity: 0,
	duration: 1.5
}, {
	y: 0,
	opacity: 1
})

;
ScrollTrigger.create({
	animation: tlG,
	trigger: ImgGirl,
	start: 'top 100%',
	end: 'bottom 75%',
});

ScrollTrigger.create({
	animation: tl,
	trigger: ImgOnei,
	start: 'top 90%',
	end: 'bottom 30%',
});

const els = document.querySelectorAll('.kob__otz-container');
const tlCom = gsap.timeline()
tlCom.fromTo(els, {
	y: -250,
	scale: .1,
	opacity: 0
}, {
	y: 0,
	scale: 1,
	opacity: 1
}, "+=1")

ScrollTrigger.create({
	animation: tlCom,
	trigger: els,
	start: 'top 100%',
	end: 'bottom 20%',
});

// Когда пользователь нажимает на div, откройте всплывающее окно
function myFunction() {
  var overlay = document.getElementById("overlay");
  overlay.classList.toggle("show");
};

// const ClickShow = document.querySelector('.modal__button');
// const OvL = document.querySelector('.overlay');
// ClickShow.addEventListener("click", () =>
// OvL.classList.toggle("overlay_modal")
// );