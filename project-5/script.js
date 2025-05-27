"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// Button Scrolling
btnScrollTo.addEventListener("click", function (e) {
    const s1coords = section1.getBoundingClientRect();

    section1.scrollIntoView({ behavior: "smooth" });
});


//* Page Navigation

document.querySelector(".nav__links").addEventListener("click", function(e) {
    // console.log(e.target);
    e.preventDefault();

    // matching strategy
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    }
});


//* Tabbed Component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".operations__tab");
    console.log(clicked);
    clicked.classList.add("operations__tab--active");

    // console.log(clicked);

    if (!clicked) return;

    tabs.forEach ((t) => {
        t.classList.remove("operations__tab--active");
    });
    tabsContent.forEach((t) => {
        t.classList.remove("operations__content--active");
    })
    clicked.classList.add("operations__tab--active");

    // Active content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

//modal 

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsShowModal = document.querySelectorAll(".btn--show-modal");

btnsShowModal.forEach((btn)=>{
    btn.addEventListener("click", openModal);
});


btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

/////////////////////
// Menu fade animation
const nav = document.querySelector(".nav");

const handleHover = function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img"); // Change to querySelector

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = this; // 'this' is bound value (0.5 or 1)
        });
        
        // Since logo is a single element now, this works
        logo.style.opacity = this;
    }
};

// Bind '0.5' for hover effect (dim other links)
nav.addEventListener("mouseover", handleHover.bind(0.5));

// Bind '1' for mouseout effect (restore opacity)
nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////
// Sticky navigation animation
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null, //root null implies entire viewport
    threshold: 0,
    rootMargin: `-${navHeight}px`,  // - sign taki header ke khatam hone se pehle hi navbar sticky ho jaye 
});

headerObserver.observe(header);

//////////////////////////////
// Reveal section animation
const allSections = document.querySelectorAll(".section");

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})

allSections.forEach((section) => {
    sectionObserver.observe(section);
})

/////////////////////
// Lazy loading image

const imgTargets = document.querySelectorAll("img[data-src]");

const lazyLoading = function (entries, observer){
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(lazyLoading, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

/////////////////////
// Slider
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((slide, i)=>{
    slide.style.transform = `translateX(${100 * i}%)`
})

btnRight.addEventListener("click", () => {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
});

btnLeft.addEventListener("click", () => {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    })
});