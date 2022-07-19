// /*===== MENU SHOW Y HIDDEN =====*/
// const navMenu = document.getElementById('nav-menu'),
//     toggleMenu = document.getElementById('nav-toggle'),
//     closeMenu = document.getElementById('nav-close')

// // SHOW
// toggleMenu.addEventListener('click', ()=>{
//     navMenu.classList.toggle('show')
// })

// // HIDDEN
// closeMenu.addEventListener('click', ()=>{
//     navMenu.classList.remove('show')
// })

// /*===== MOUSEMOVE HOME IMG =====*/
// document.addEventListener('mousemove', move);
// function move(e){
//     this.querySelectorAll('.move').forEach(layer =>{
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX*speed)/120
//         const y = (window.innerHeight - e.pageY*speed)/120

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }

// /*===== GSAP ANIMATION =====*/
// // NAV
// gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
// gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// // HOME
// gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
// gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
// gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
// gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== IDEATION & INSPIRATION SWIPER  ====================*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// /*==================== VIDEO SWIPER  ====================*/
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides2");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

// /*==================== IDEATION & INSPIRATION SWIPER  ====================*/
// let slideIndex2 = 1;
// showSlides2(slideIndex2);

// function plusSlides2(n) {
//     showSlides2(slideIndex2 += n);
// }

// function currentSlide2(n) {
//     showSlides2(slideIndex2 = n);
// }

// function showSlides2(n) {
//     let i;
//     let slides2 = document.getElementsByClassName("mySlides2");
//     let dots2 = document.getElementsByClassName("dot2");
//     if (n > slides2.length) { slideIndex2 = 1 }
//     if (n < 1) { slideIndex2 = slides2.length }
//     for (i = 0; i < slides2.length; i++) {
//         slides2[i].style.display = "none";
//     }
//     for (i = 0; i < dots2.length; i++) {
//         dots2[i].className = dots2[i].className.replace(" active", "");
//     }
//     slides2[slideIndex2 - 1].style.display = "block";
//     dots2[slideIndex2 - 1].className += " active";
// }

// /*==================== PORTFOLIO SWIPER  ====================*/
//  /* Used swiper-bundle.min.js */
//  /*https://unpkg.com/browse/swiper@8.2.4/*/

// let swiperPortfolio = new Swiper('.portfolio__container', {
//     cssMode: true,
//     loop: true,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

// /*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper('.testimonial__container', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints:{
//         568:{
//            slidesPerView: 2,
//         }
//     }
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
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

/*==================== MOUSEMOVE HOME IMG ====================*/
document.addEventListener('mousemove', move)

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
