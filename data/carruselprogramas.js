let imagenes = [
    { "url": "imagenes/hero1.jpg" },
    { "url": "imagenes/hero2.jpg" },
    { "url": "imagenes/hero3.jpg" }
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.querySelector("#img img"); 

let actual = 0;

function actualizarCarrusel() {
    imagen.src = imagenes[actual].url; 
}




setInterval(function() {
    actual = (actual + 1) % imagenes.length;
    actualizarCarrusel();
}, 7000);


actualizarCarrusel();