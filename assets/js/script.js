const navMenu = document.querySelector('#nav-menu'),
		   navToggle = document.querySelector('#nav-toggle'),
		   navClose = document.querySelector('#nav-close');


if (navToggle) {
	navToggle.addEventListener('click', ()=> {
		navMenu.classList.add('show-menu');
	} )
}


if (navClose) {
	navClose.addEventListener('click', ()=> {
		navMenu.classList.remove('show-menu');
	})
}


const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*============================== PORTFOLIO SWIPER =========================== */
var swiper = new Swiper('.portfolio__container', {
	cssMode: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
	},
	mousewheel: true,
	keyboard: true,
})



/*=========================== SCROLL SECTION ACTIVE LINK ======================= */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		let sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(`.nav__menu a[href*=${ sectionId }]`).classList.add('active-link');
		}else {
			document.querySelector(`.nav__menu a[href*=${ sectionId }]`).classList.remove('active-link');
		}
	})
}

window.addEventListener('scroll', scrollActive);




/*========================= CHANGE HEADER BACKGROUND ================================ */
function scrollHeader() {
	const nav = document.querySelector('#header');
	// When the scroll is greater than 200 vh, add the scroll-header class
	this.scrollY >= 80 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);



/* =============================== SHOW SCROLL TOP =========================== */
function scrollTop() {
	const scrollToTop = document.querySelector('#scroll-up');
	// When the scroll is higher than 500 vh, add the show-scroll class
	this.scrollY >= 560 ? scrollToTop.classList.add('show-scroll') : scrollToTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);





/*============================= THEME SWITCHER ====================================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 