$(document).ready(function() {
    // Arreglo con las URLs de las imágenes de fondo
    var images = [
        'url(../Tienda_Online_VG2/img/BANNER.png)',
	'url(../Tienda_Online_VG2/img/BANNER1.png)',
	'url(../Tienda_Online_VG2/img/BANNER2.png)',
	'url(../Tienda_Online_VG2/img/BANNER3.png)'
    ];

    var currentIndex = 0; // Índice de la imagen actual

    // Función para cambiar la imagen de fondo
    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length; // Ciclo a la siguiente imagen, volviendo al inicio
        $('.hero').css('background-image', images[currentIndex]);
    }

    // Llama la función cada 3 segundos
    setInterval(changeBackground, 3000);

    // Para que se ejecute al cargar la página y no esperar el primer intervalo
    changeBackground();
});
