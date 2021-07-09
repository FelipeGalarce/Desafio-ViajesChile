/* esta es la funcion donde hago que las tarjetas o cards del fondo crezcan cuando el mouse se posa sobre ellas y luego vuelvas a su tamaño original */

$(document).ready(function () {


  $('.sugerencia').mouseenter(function () {
    $(this).css("cursor", "pointer");
    $(this).animate({ width: "102%", height: "102%" }, 'slow');
  });

  $('.sugerencia').mouseleave(function () {
    $(this).animate({ height : "100%", width: "100%" }, 'slow');
  });
});