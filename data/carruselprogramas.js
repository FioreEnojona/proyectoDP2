let imagenes = [
    { "url": "imagenes/hero1.jpg" },
    { "url": "imagenes/hero2.jpg" },
    { "url": "imagenes/hero3.jpg" }
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');

let actual = 0;

function actualizarCarrusel() {
    imagen.src = imagenes[actual].url;
    console.log("Mostrando imagen:", imagenes[actual].url);
}

adelante.addEventListener('click', () => {
    actual = (actual + 1) % imagenes.length;
    actualizarCarrusel();
});

atras.addEventListener('click', () => {
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    actualizarCarrusel();
});

setInterval(() => {
    actual = (actual + 1) % imagenes.length;
    actualizarCarrusel();
}, 7000);

actualizarCarrusel();