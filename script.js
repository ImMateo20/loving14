const padreRespuesta = document.querySelector(".contenedor-respuesta");
const respuestaNo = document.getElementById("contenedor-no");
const respuestaSi = document.getElementById("contenedor-si");

const contenedorSec = document.querySelector(".contenedor-secundario");

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

respuestaSi.addEventListener("click", () => {
  contenedorSec.innerHTML = `                <h2>¡Tenemos una cita! 💗</h2>
                <p>El mejor San Valentín</p>
                <video autoplay loop muted playsinline id="gif-si">
                    <source src="img/congrat.mp4" type="video/mp4">
                </video>`;
});
