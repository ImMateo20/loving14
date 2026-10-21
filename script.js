const padreRespuesta = document.querySelector('.contenedor-respuesta');
const respuestaNo = document.getElementById('contenedor-no');
const respuestaSi = document.getElementById('contenedor-si');
const contenedorSec = document.querySelector('.contenedor-secundario');

// CAMBIA este número por el tuyo: código de país + número, sin + ni espacios.
const numeroWhatsApp = '525533606087';

const actividades = [
  ['Cena de imitaciones', 'Durante toda la cena, actuaremos como si fuéramos el otro, con mucho cariño.'],
  ['Doblaje improvisado', 'Pondremos una película sin volumen e inventaremos nuestras propias voces y diálogos.'],
  ['Juegos de la infancia', 'Jugaremos a las escondidas, canicas o trompo y nos contaremos quién nos enseñó.'],
  ['Olimpiadas absurdas', 'Inventaremos cinco pruebas, prepararemos medallas de cartón y un premio para quien gane.'],
  ['Pasarela de ropa usada', 'Con un presupuesto fijo, elegiremos un atuendo extravagante para el otro y haremos un desfile.'],
  ['Tour de infancia', 'Nos mostraremos los lugares donde crecimos: la escuela, la calle o la panadería de la esquina.'],
  ['Paseo al azar', 'Lanzaremos una moneda en cada esquina para decidir hacia dónde caminar y descubrir adónde llegamos.'],
  ['Regalo de mercado de pulgas', 'Con un presupuesto fijo, buscaremos el objeto más raro que podamos regalarle al otro.'],
  ['Caminata de preguntas', 'Durante una hora caminaremos y conversaremos solamente a través de preguntas.'],
  ['Noche de estrellas', 'Miraremos las estrellas desde un patio o un lugar seguro, con mantas y una app de constelaciones.'],
  ['Cuadro a ciegas', 'Cada uno pintará la mitad de un lienzo sin ver la del otro y después uniremos nuestras obras.'],
  ['Revista de la relación', 'Crearemos nuestra propia revista con portada, entrevistas, horóscopo inventado y quejas oficiales.'],
  ['Menú de su historia', 'Prepararemos platillos que representen etapas de nuestra historia y contaremos cada recuerdo al servirlos.'],
  ['Retratos a ciegas', 'Nos dibujaremos sin mirar el papel y montaremos una galería con nuestros retratos.'],
  ['Escape room casero', 'Uno de nosotros preparará pistas y acertijos en casa y el otro intentará resolverlos contrarreloj.'],
  ['Cena desde el futuro', 'Imaginaremos que celebramos nuestro aniversario número 50 y compartiremos los recuerdos que queremos construir.'],
  ['Manual de instrucciones', 'Cada uno escribirá un pequeño manual para el otro: qué nos calma, qué nos molesta y cómo nos gusta recibir disculpas.'],
  ['Miedos y ganas', 'Escribiremos cinco miedos y cinco ilusiones sobre nuestra relación, los intercambiaremos y hablaremos de cada uno.'],
  ['Conózcanse de nuevo', 'Nos encontraremos en un café como si no nos conociéramos, usaremos nombres inventados y volveremos a conocernos.'],
  ['Auditoría de la casa', 'Anotaremos todo lo que hace cada uno en casa, incluso lo invisible, y repartiremos las tareas con humor y justicia.'],
  ['Hotel en casa', 'Convertiremos nuestro cuarto en un hotel por una noche, con menú y servicio a la habitación por turnos.'],
  ['Hora de silencio', 'Pasaremos una hora sin celulares ni palabras y después nos contaremos qué sentimos.'],
  ['Intercambio de cuidados', 'Cada uno pedirá 20 minutos de lo que necesite: escucha, descanso o compañía, y nos dedicaremos ese tiempo.'],
  ['Fuerte de mantas', 'Construiremos un fuerte de mantas en la sala y pasaremos la noche contándonos secretos de nuestra infancia.'],
  ['Caja de emergencia', 'Cada uno preparará una caja para el otro con cosas que le alegren un día difícil: una canción, un snack y una nota.']
];

function moverNo() {
  const maxX = Math.max(0, padreRespuesta.clientWidth - respuestaNo.offsetWidth);
  const maxY = Math.max(0, padreRespuesta.clientHeight - respuestaNo.offsetHeight);
  respuestaNo.style.left = `${Math.random() * maxX}px`;
  respuestaNo.style.top = `${Math.random() * maxY}px`;
}

respuestaNo.addEventListener('mouseenter', moverNo);
respuestaNo.addEventListener('click', moverNo);
respuestaNo.addEventListener('touchstart', moverNo, { passive: true });

respuestaSi.addEventListener('click', () => {
  contenedorSec.innerHTML = `
    <section class="selector-actividades">
      <h2>¡Tenemos un plan! 💗</h2>
      <p>Escoge una casilla para descubrir qué haremos ✨</p>
      <div class="cuadricula" id="cuadricula"></div>
      <div class="resultado" id="resultado" hidden aria-live="polite">
        <p class="etiqueta-resultado">Tu casilla elegida</p>
        <h3 id="titulo-actividad"></h3>
        <p id="descripcion-actividad"></p>
        <button type="button" id="enviar-whatsapp">Enviar resultado por WhatsApp 💌</button>
      </div>
    </section>`;

  const cuadricula = document.getElementById('cuadricula');
  const resultado = document.getElementById('resultado');
  const titulo = document.getElementById('titulo-actividad');
  const descripcion = document.getElementById('descripcion-actividad');
  const botonEnviar = document.getElementById('enviar-whatsapp');
  let seleccion = null;

  actividades.forEach((actividad, indice) => {
    const casilla = document.createElement('button');
    casilla.type = 'button';
    casilla.className = 'casilla';
    casilla.textContent = indice + 1;
    casilla.setAttribute('aria-label', `Elegir casilla ${indice + 1}`);
    casilla.addEventListener('click', () => {
      if (seleccion !== null) return;
      seleccion = indice;
      cuadricula.querySelectorAll('.casilla').forEach(b => {
        if (b !== casilla) b.disabled = true;
      });
      casilla.classList.add('seleccionada');
      titulo.textContent = `${indice + 1}. ${actividad[0]}`;
      descripcion.textContent = actividad[1];
      resultado.hidden = false;
      resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    cuadricula.appendChild(casilla);
  });

  botonEnviar.addEventListener('click', () => {
    if (seleccion === null) return;
    const [nombre, detalle] = actividades[seleccion];
    const mensaje = `¡Acepto!\n\nElegí la casilla ${seleccion + 1}: ${nombre}\n\n${detalle}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
});
