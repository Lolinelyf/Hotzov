let opl = document.querySelector("div.hero");
let opz = document.createElement("div");
opz.classList = "gallery";
opl.appendChild(opz);

let opq = document.createElement("div");
opq.classList = "gallery__content";
opz.appendChild(opq);

let opw = document.createElement("div");
opw.classList = "gallery__button-container";
opq.appendChild(opw);

let oph = document.createElement("button");
oph.classList = "gallery__button";
opw.appendChild(oph);

let optC = document.createElement("div");
optC.classList = "gallery__img-prew-bg"

let opt = document.createElement("img");
opt.classList = "gallery__img-prew";
optC.appendChild(opt);
opq.appendChild(optC);

let ope = document.createElement("div");
ope.classList = "gallery__images-container js-img-container";
opq.appendChild(ope);

let opi = document.createElement("div");
opi.classList = "gallery__button-left";
opq.appendChild(opi);

let opo = document.createElement("button");
opo.classList = "gallery__swipe-left";
opi.appendChild(opo);

let opp = document.createElement("div");
opp.classList = "gallery__button-right";
opq.appendChild(opp);

let opn = document.createElement("button");
opn.classList = "gallery__swipe-right";
opp.appendChild(opn);

const modal = document.querySelector(".gallery");

class Gallery {
  constructor() {
    this.currentIndex = 0;
    this.modal = document.querySelector(".gallery");
    this.images = [];
    document.querySelectorAll(".js-img").forEach((el, i) => {
      this.images.push({
        src: el.src
        // caption: el.querySelector("img").alt
      });
      el.addEventListener("click", () => {
        modal.classList.toggle("viev");
        this.setModalImage(i);
        // this.setModalImage(i).style.backgroundImage = url(this.src)
      });
    });
    this.modal
      .querySelector(".gallery__button-container")
      .addEventListener("click", () => modal.classList.toggle("viev"));
    this.modal
      .querySelector(".gallery__button-left")
      .addEventListener("click", () =>
        this.setModalImage(this.currentIndex - 1)
      );
    this.modal
      .querySelector(".gallery__button-right")
      .addEventListener("click", () =>
        this.setModalImage(this.currentIndex + 1)
      );
    htmlEl.style.overflow = 'auto';        
    this.initThumbs();
  }

  setModalImage(i) {
    i = (i + this.images.length) % this.images.length;
    const image = this.images[i];
    this.modal.querySelector("img").src = image.src;
    this.modal.querySelector("img").parentElement.style.backgroundImage = `url(${image.src})`;
    // this.modal.querySelector(".gallery__container-img").src = image.src;
    // this.modal.querySelector("img").alt = image.caption;
    this.currentIndex = i;
    console.log(i);
    this.updateThumbs();
  }

  initThumbs() {
    // контейнер для превью картинок
    const prviewContainer = document.querySelector(".js-img-container");
    //console.log(this.images);
    for (let k = 0; k < this.images.length; k++) {
      let curUrl = this.images[k];

      // новая картинка
      const newImgItem = document.createElement("img");
      newImgItem.classList = "gallery__container-img js-img-item";
      
      // назначаем новые аттрибуты
      newImgItem.src = curUrl.src;
      newImgItem.addEventListener("click", () => this.setModalImage(k));

      // присоединяем к контейнрнеру новвую картинку
      prviewContainer.appendChild(newImgItem);
    }
    this.updateThumbs();
  }

  updateThumbs() {
    const prviewContainer = document.querySelector(".js-img-container");
    prviewContainer.querySelectorAll(".js-img-item").forEach((el, i) => {
      el.classList.toggle("thamb", i === this.currentIndex);
    });
    prviewContainer.querySelector(".thamb").scrollIntoView({behavior: "smooth"});
  }
}



const gallery = new Gallery();