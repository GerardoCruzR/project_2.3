
function activarBoton2() {
  // Obtenemos la referencia al elemento SVG del botón 2 mediante su id
  var boton2 = document.getElementById("boton2");

  // Creamos un evento de clic personalizado (esto es necesario para elementos SVG)
  var event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true
  });

  // Disparamos el evento en el elemento SVG del botón 2
  boton2.dispatchEvent(event);
}