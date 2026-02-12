const padreRespuesta = document.querySelector(".contenedor-respuesta");
const respuestaNo = document.getElementById("contenedor-no");

respuestaNo.addEventListener("mousemove", () => {
  console.log("fsfsd");
  const anchoPadre = padreRespuesta.clientWidth;
  const altoPadre = padreRespuesta.clientHeight;

  const anchoHijo = respuestaNo.clientWidth;
  const altoHijo = respuestaNo.clientHeight;

  const randomX = Math.random() * (anchoPadre - anchoHijo);
  const randomY = Math.random() * (altoPadre - altoHijo);

  respuestaNo.style.left = randomX + "px";
  respuestaNo.style.top = randomY + "px";
});

respuestaNo.addEventListener("click", () => {
  console.log("fsfsd");
  const anchoPadre = padreRespuesta.clientWidth;
  const altoPadre = padreRespuesta.clientHeight;

  const anchoHijo = respuestaNo.clientWidth;
  const altoHijo = respuestaNo.clientHeight;

  const randomX = Math.random() * (anchoPadre - anchoHijo);
  const randomY = Math.random() * (altoPadre - altoHijo);

  respuestaNo.style.left = randomX + "px";
  respuestaNo.style.top = randomY + "px";
});
