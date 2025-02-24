document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    let visibleSlides = document.documentElement.clientWidth <= 1280 ? 1 : 4;

    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const totalSlides = slides.length;
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function getSlideWidth() {
        const slideWidth = slides[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
        return slideWidth + gap;
    }

    function updateVisibleSlides() {
        visibleSlides = document.documentElement.clientWidth <= 1280 ? 1 : 4;
        index = Math.min(index, totalSlides - visibleSlides);
        updateSlider();
        console.log
    }

    window.addEventListener("resize", () => {
        updateVisibleSlides();
    });

    nextButton.addEventListener("click", () => {
        if (index < totalSlides - visibleSlides) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    function updateSlider() {
        const slideWidth = getSlideWidth();
        slider.style.transform = `translateX(-${index * slideWidth}px)`;

        prevButton.classList.toggle("disabled", index === 0);
        nextButton.classList.toggle("disabled", index >= totalSlides - visibleSlides);
    }

    updateVisibleSlides();
});