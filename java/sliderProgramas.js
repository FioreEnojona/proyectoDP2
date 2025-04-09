class SliderController {
    slider = null;
    slide = [];
    slides = null;
    intervalTime = 4000;
    intervalId = null;
    currentSlide = -1;
    slideDirection = 1; // 1 o -1

    constructor() {
        this.slider = document.querySelector('.sliderProgramas');
        this.slides = document.querySelector('.slides');
        this.slide = [...document.querySelectorAll('.slides .slide')];
        this.currentSlide = 0;
        this.generateUI();
        this.moveToSlide(0);
    }

    moveToSlide(slideIndex) {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
        this.currentSlide = slideIndex;
        this.slides.style.left = `-${(this.currentSlide * 100)}vw`;
        this.tick();
    }

    tick() {
        this.intervalId = setTimeout(() => {
            this.moveToNext();
        }, this.intervalTime);
    }

    moveToNext() {
        if (this.currentSlide + this.slideDirection >= this.slide.length || this.currentSlide + this.slideDirection < 0) {
            this.slideDirection *= -1;
        }
        this.currentSlide += this.slideDirection;
        this.moveToSlide(this.currentSlide);
    }

    generateUI() {
        let contenedorNavegacion = document.createElement("div");
        contenedorNavegacion.classList.add('navigation-container');
        this.slide.forEach((_o, i) => {
            let slideNavigate = document.createElement('div');
            slideNavigate.classList.add('navigation-index');
            slideNavigate.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.moveToSlide(i);
            });
            contenedorNavegacion.appendChild(slideNavigate);
        });

        this.slider.appendChild(contenedorNavegacion);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mySlider = new SliderController();
});