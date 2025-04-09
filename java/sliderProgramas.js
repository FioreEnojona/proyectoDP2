class SliderController {
    constructor() {
        this.slider = document.querySelector('.sliderProgramas');
        this.slides = document.querySelector('.slides');
        this.slideItems = [...document.querySelectorAll('.slides .slide')];
        this.intervalTime = 5000;
        this.intervalId = null;
        this.currentSlide = 0;
        this.slideDirection = 1;
        
        this.initSlider();
    }

    initSlider() {
        if (this.slideItems.length > 0) {
            this.generateUI();
            this.startSlider();
            this.setSlideHeight();
            window.addEventListener('resize', this.setSlideHeight.bind(this));
        }
    }

    setSlideHeight() {
        const sliderWidth = this.slider.offsetWidth;
        const aspectRatio = 16 / 9; // Puedes ajustar esto
        const newHeight = sliderWidth / aspectRatio;
        this.slider.style.height = `${newHeight}px`;
    }

    startSlider() {
        this.moveToSlide(0);
    }

    moveToSlide(slideIndex) {
        clearTimeout(this.intervalId);
        
        this.currentSlide = slideIndex;
        this.slides.style.left = `-${this.currentSlide * 100}%`;
        
        // Actualizar indicadores activos
        document.querySelectorAll('.navigation-index').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
        
        this.intervalId = setTimeout(() => this.moveToNext(), this.intervalTime);
    }

    moveToNext() {
        const nextSlide = this.currentSlide + this.slideDirection;
        
        if (nextSlide >= this.slideItems.length || nextSlide < 0) {
            this.slideDirection *= -1;
        }
        
        this.moveToSlide(this.currentSlide + this.slideDirection);
    }

    generateUI() {
        const navContainer = document.createElement('div');
        navContainer.className = 'navigation-container';
        
        this.slideItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'navigation-index';
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.slideDirection = index > this.currentSlide ? 1 : -1;
                this.moveToSlide(index);
            });
            
            navContainer.appendChild(dot);
        });
        
        this.slider.appendChild(navContainer);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SliderController();
});