document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.img-slide');
    const atras = document.getElementById('atras');
    const adelante = document.getElementById('adelante');
    let current = 0;
    let intervalo;

    // Función para mostrar la slide actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Función para avanzar
    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    // Función para retroceder
    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    // Event listeners para los botones
    adelante.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    atras.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Auto-avance
    function startInterval() {
        intervalo = setInterval(nextSlide, 7000);
    }

    function resetInterval() {
        clearInterval(intervalo);
        startInterval();
    }

    // Inicialización
    showSlide(current);
    startInterval();

    // Precarga de imágenes para evitar parpadeos
    const images = [
        'imagenes/hero1.jpg',
        'imagenes/hero2.jpg',
        'imagenes/hero3.jpg'
    ];
    
    images.forEach(src => {
        new Image().src = src;
    });
});