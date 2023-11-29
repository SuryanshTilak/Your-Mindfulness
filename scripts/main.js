const slides = document.querySelectorAll(".slides");
const controllers = document.querySelectorAll(".controllers");

let timeOut = 2000;
let slideIndex = 0;
let autoOn = true;

const showSlides = () => {
    timeOut = 2000;

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    controllers.forEach((controller) => {
        controller.classList.remove("controller-active");
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "flex";
    controllers[slideIndex - 1].className += " controller-active";
};

const autoSlides = () => {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
};

const prevSlide = () => {
    timeOut = 2000;

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    controllers.forEach((controller) => {
        controller.classList.remove("controller-active");
    });

    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex == 0) {
        slideIndex = 5;
    }
    slides[slideIndex - 1].style.display = "flex";
    controllers[slideIndex - 1].className += " controller-active";
};


autoSlides();