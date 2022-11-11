// document.addEventListener('DOMContentLoaded', function(){

//   // открытие меню
//   const openedMenu = document.querySelector('.opened-menu');
//   const closedMenu = document.querySelector('.closed-menu');
//   const navbarMenu = document.querySelector('.navbar');
//   const menuOverlay = document.querySelector('.overlay');

// // Opened navbarMenu
// // Closed navbarMenu
// // Closed navbarMenu by Click Outside
//   openedMenu.addEventListener('click', toggleMenu);
//   closedMenu.addEventListener('click', toggleMenu);
//   menuOverlay.addEventListener('click', toggleMenu);

// // Toggle Menu Function
//   function toggleMenu() {
//     navbarMenu.classList.toggle('active');
//     menuOverlay.classList.toggle('active');
//     document.body.classList.toggle('scrolling');
//   }

//   navbarMenu.addEventListener('click', (event) => {
//     if (event.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
//       // Prevent Default Anchor Click Behavior
//       event.preventDefault();
//       const menuItemHasChildren = event.target.parentElement;

//       // If menuItemHasChildren is Expanded, Collapse It
//       if (menuItemHasChildren.classList.contains('active')) {
//         collapseSubMenu();
//       } else {
//         // Collapse Existing Expanded menuItemHasChildren
//         if (navbarMenu.querySelector('.menu-item-has-children.active')) {
//           collapseSubMenu();
//         }
//         // Expand New menuItemHasChildren
//         menuItemHasChildren.classList.add('active');
//         const subMenu = menuItemHasChildren.querySelector('.sub-menu');
//         subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
//       }
//     }
//   });

// // Collapse Sub Menu Function
//   function collapseSubMenu() {
//     navbarMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
//     navbarMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
//   }

// // Fixed Resize Screen Function
//   function resizeScreen() {
//     // If navbarMenu is Open, Close It
//     if (navbarMenu.classList.contains('active')) {
//       toggleMenu();
//     }

//     // If menuItemHasChildren is Expanded, Collapse It
//     if (navbarMenu.querySelector('.menu-item-has-children.active')) {
//       collapseSubMenu();
//     }
//   }

//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 768) {
//       resizeScreen();
//     }
//   });


//   // анимация смены страницы
//   const onEnter = function(data) {
//     window.scrollTo(0, 0);
//     return gsap.from(data.next.container, {
//       opacity: 0
//     });
//   };

//   const onLeave = function(data) {
//    return  gsap.to(data.current.container, {
//       opacity: 0
//     });
//   };



//   barba.init({
//     transitions: [{
//       leave(data) {
//         return onLeave(data);
//       },
//       enter(data) {
//         return onEnter(data);
//       }
//     }]
//   });


//   //версия для слабовидящих
//   $.bvi({
//     'bvi_target' : '.bvi-open', // Класс ссылки включения плагина
//     "bvi_theme" : "white", // Цвет сайта
//     "bvi_font" : "arial", // Шрифт
//     "bvi_font_size" : 16, // Размер шрифта
//     "bvi_letter_spacing" : "normal", // Межбуквенный интервал
//     "bvi_line_height" : "normal", // Междустрочный интервал
//     "bvi_images" : true, // Изображения
//     "bvi_reload" : true, // Перезагрузка страницы при выключении плагина
//     "bvi_fixed" : false, // Фиксирование панели для слабовидящих вверху страницы
//     "bvi_tts" : true, // Синтез речи
//     "bvi_flash_iframe" : true, // Встроенные элементы (видео, карты и тд.)
//     "bvi_hide" : false // Скрывает панель для слабовидящих и показывает иконку панели.
//   });


//   //  время
//   function checkTime(i) {
//     return (i < 10) ? "0" + i : i;
//   }

//   function startTime() {
//     const today = new Date(),
//       h = checkTime(today.getHours()),
//       m = checkTime(today.getMinutes());

//     document.querySelector('.header__time').innerHTML = h + ":" + m;
//     t = setTimeout(function () {
//       startTime()
//     }, 500);
//   }
//   startTime();



//   const headerEl = document.querySelector('.hero__content');
//   const navEl = document.querySelector('.navigation');
//   const obs = new IntersectionObserver(function (data) {
//     if (!data[0].isIntersecting) {
//       navEl.classList.add('sticky');
//     } else  {
//       navEl.classList.remove('sticky');
//     }
//   }, {
//     root: null,
//     threshold: 0,
//     rootMargin: '0px'
//   });
  
//   obs.observe(headerEl);
// });


