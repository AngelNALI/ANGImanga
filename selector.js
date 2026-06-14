const mangas = [
  {
    titulo: "Jujutsu Kaisen",
    genero: "Accion,Sobrenatural · Shonen",
    puntuacion: "9.8",
    precio: "$180.00",
    imagen: "images/jjk_resultado.jpg"
  },
  {
    titulo: "RE: Zero",
    genero: "Fantacia, Drama · Isekai",
    puntuacion: "9.9",
    precio: "$190.00",
    imagen: "images/rezero_resultado.jpg"
  },
  {
    titulo: "Kimetsu no Yaiba",
    genero: "Acción, Aventura · Shonen",
    puntuacion: "9.6",
    precio: "$170.00",
    imagen: "images/Dslayer_resultado.jpg"
  },
  {
    titulo: "Attack on Titan",
    genero: "Acción, Drama · Shonen",
    puntuacion: "9.5",
    precio: "$160.00",
    imagen: "images/aotitan_resultado.webp"
  },
  {
    titulo: "One Piece",
    genero: "Comedia, Aventura · Shonen",
    puntuacion: "9.4",
    precio: "$150.00",
    imagen: "images/opiece_resultado.jpg"
  },
  {
    titulo: "Black Clover",
    genero: "Magia, Fantasia · Shonen",
    puntuacion: "9.3",
    precio: "$140.00",
    imagen: "images/bclover_resultado.jpg"
  },
  {
    titulo: "Chainsaw Man",
    genero: "Acción, Sobrenatural · Shonen",
    puntuacion: "9.2",
    precio: "$180.00",
    imagen: "images/chainsaw_resultado.jpg"
  },
  {
    titulo: "Blue Lock",
    genero: "Deportes, Drama · Shonen",
    puntuacion: "9.1",
    precio: "$180.00",
    imagen: "images/block_resultado.jpg"
  },
  {
    titulo: "Dragon Ball Super",
    genero: "Acción, Aventura · Shonen",
    puntuacion: "9.0",
    precio: "$180.00",
    imagen: "images/Dball_resultado.jpg"
  },
  {
    titulo: "Hunter x hunter",
    genero: "Acción, Aventura · Shonen",
    puntuacion: "9.9",
    precio: "$180.00",
    imagen: "images/hxh_resultado.jpg"
  }
];
const comics = [
  {
    titulo: "The amazing spiderman",
    genero: "Accion · comic",
    puntuacion: "9.8",
    precio: "$200.00",
    imagen: "images/spiderman_resultado.jpg"
  },
  {
    titulo: "Absolute batman",
    genero: "Acción, terror · comic",
    puntuacion: "9.7",
    precio: "$330.00",
    imagen: "images/Abatman_resultado.jpg"
  },
  {
    titulo: "Invincible",
    genero: "Acción, gore · comic",
    puntuacion: "9.6",
    precio: "$350.00",
    imagen: "images/invincible_resultado.jpg"
  },
  {
    titulo: "All out avengers",
    genero: "Acción, Superhéroe · comic",
    puntuacion: "9.5",
    precio: "$300.00",
    imagen: "images/aoavengers_resultado.jpg"
  },
  {
    titulo: "Avengers vs X men",
    genero: "Acción, Superhéroe · comic",
    puntuacion: "9.4",
    precio: "$300.00",
    imagen: "images/avsxmen_resultado.jpg"
  },
  {
    titulo: "Sentry",
    genero: "Acción, Superhéroe · comic",
    puntuacion: "9.3",
    precio: "$320.00",
    imagen: "images/sentry_resultado.jpg"
  },
  {
    titulo: "Deadpool x wolverine",
    genero: "Acción, comedia · comic",
    puntuacion: "9.2",
    precio: "$350.00",
    imagen: "images/deadpool_resultado.jpg"
  },
  {
    titulo: "Moon knight",
    genero: "Acción, Superhéroe · comic",
    puntuacion: "9.1",
    precio: "$310.00",
    imagen: "images/mknight_resultado.jpg"
  },
  {
    titulo: "peace maker",
    genero: "Acción, comedia · comic",
    puntuacion: "9.0",
    precio: "$370.00",
    imagen: "images/peacemaker_resultado.jpg"
  },
  {
    titulo: "The walking dead",
    genero: "Terror, Drama · comic",
    puntuacion: "8.9",
    precio: "$330.00",
    imagen: "images/twdead_resultado.jpg"
  }
];
const recomendaciones = [
  {
    titulo: "One Punch Man",
    genero: "Shonen",                  
    descripcion: "En un mundo lleno de héroes y monstruos, Saitama busca emoción en la lucha… pero su fuerza absoluta hace que nada le represente un desafío, y la aburrición se convierte en su enemigo.",
    imagen: "images/opm_resultado.jpg"
  },
  {
    titulo: "My Hero Academia",
    genero: "Shonen",
    descripcion: "Izuku Midoriya sueña con ser un héroe en un mundo donde casi todos tienen superpoderes. Con valor, amistad y entrenamiento, aprende que ser héroe es más que tener fuerza.",
    imagen: "images/mhacademy_resultado.jpg"
  },
  {
    titulo: "Parasyte",
    genero: "Seinen",
    descripcion: "Un parásito alienígena invade la mano de Shinichi, obligándolo a coexistir con un ser que piensa y actúa por sí mismo. La humanidad y la moral se enfrentan a la supervivencia.",
    imagen: "images/parasyte_resultado.jpg"
  },
  {
    titulo: "Berserk",
    genero: "Seinen",
    descripcion: "Guts, un mercenario solitario, lucha en un mundo medieval oscuro lleno de violencia y demonios. Tras unirse a la banda de los Halcones liderada por Griffith, enfrentará traiciones, guerras y fuerzas sobrenaturales que pondrán a prueba su destino y su humanidad.",
    imagen: "images/berserk_resultado.jpg"
  },
  {
    titulo: "The Rising of the Shield Hero",
    genero: "Isekai",
    descripcion: "raicionado y desprotegido, Naofumi debe sobrevivir en un mundo hostil solo con un escudo. Su camino es de crecimiento, alianzas y superación frente a la injusticia.",
    imagen: "images/trosh_resultado.jpg"
  },
  {
    titulo: "Overlord",
    genero: "Isekai",
    descripcion: "Un jugador atrapado en su avatar más poderoso explora un mundo nuevo con ansias de dominio, descubriendo que la frontera entre juego y realidad puede ser mortal.",
    imagen: "images/overlord_resultado.jpg"
  },
  {
    titulo: "KonoSuba: God's Blessing on This Wonderful World!",
    genero: "Comedia",
    descripcion: "DKazuma es transportado a un mundo de fantasía… y descubre que salvarlo será mucho más absurdo y desastroso de lo que jamás imaginó.",
    imagen: "images/konosuba_resultado.jpg"
  },
  {
    titulo: "Bungou Stray Dogs",
    genero: "Comedia",
    descripcion: "Detectives con habilidades sobrenaturales enfrentan criminales y misterios mientras la literatura inspira poderes letales y estrategias impredecibles.",
    imagen: "images/bsdogs_resultado.jpg"
  }
];
const generos = ["Todos", "Shonen", "Seinen", "Isekai", "Comedia"];

const noticias = [
  {
    etiqueta: "Anime",
    titulo: "“Jujutsu Kaisen 3” hace una pausa técnica y anuncia episodio especial de recapitulación",
    descripcion: "La esperada tercera temporada de Jujutsu Kaisen realizará una breve pausa técnica, pero los fans no se quedarán sin contenido. En lugar del episodio regular, se estrenará un capítulo especial de recapitulación, que incluirá un resumen de los primeros siete episodios de esta entrega.Este episodio contará además con una narración recién grabada, diseñada para explicar y contextualizar los momentos más importantes de la temporada hasta ahora. Gracias a esto, los seguidores podrán ponerse al día o revivir los puntos clave antes de continuar con la historia principal. Con esta pausa, el episodio 8 se emitirá finalmente el jueves 26 de febrero, retomando la acción y los combates que caracterizan a la serie.",
    imagen: "images/noticia 1_resultado.jpg",
    fecha: "19 de febrero de 2026"
  },
  {
    etiqueta: "Anime",
    titulo: "Anuncian la cuarta temporada de Re:ZERO para 2026 en Crunchyroll",
    descripcion: "Durante el panel de industria de Crunchyroll en la Anime Expo 2025, se anunció oficialmente la cuarta temporada de Re:ZERO -Starting Life in Another World-, que se estrenará en 2026. Esta nueva entrega permitirá a los fans adentrarse en el próximo capítulo de la saga de Natsuki Subaru. La temporada 4 incluirá eventos muy esperados por la comunidad, incluyendo momentos intensos como el recordado panel de Subaru subiendo las escaleras al borde de la locura, entre otros sucesos que prometen expandir la historia y profundizar en el desarrollo de los personajes.",
    imagen: "images/noticia 2_resultado.jpg",
    fecha: "14 de febrero de 2026",
    youtube: "https://youtu.be/jVl4bY81iIs?si=Ey-fpAjcmyMtBj2S"
  },
  {
    etiqueta: "Serie",
    titulo: "Amazon Prime Video anuncia calendario de estreno de la cuarta temporada de Invencible",
    descripcion: "La esperada cuarta temporada de Invencible llegará a Amazon Prime Video el 18 de marzo, con un estreno especial que incluirá de golpe los episodios 1, 2 y 3. A partir de ese momento, la serie adoptará un calendario semanal de lanzamientos, ofreciendo a los espectadores un nuevo episodio cada semana. Además, la serie ya cuenta con luz verde para una quinta temporada, por lo que los fanáticos pueden esperar que la historia continúe más allá de esta entrega.",
    imagen: "images/noticia 3_resultado.jpg",
    fecha: "20 de enero de 2026",
    youtube: "https://youtu.be/uGyE1jFPa7Q?si=msDAvE2U_K0cydUL"
  }
];
const btncel       = document.getElementById('btncel');
const menuLista    = document.querySelector('.menu__lista');
const enlaces      = document.querySelectorAll('.menu__lista a');

btncel.addEventListener('click', () => {
  const abierto = menuLista.classList.toggle('abierto');
  btncel.classList.toggle('abierto', abierto);
  btncel.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});
enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    menuLista.classList.remove('abierto');
    btncel.classList.remove('abierto');
  });
});
const secciones = document.querySelectorAll('section[id]');

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      enlaces.forEach(e => e.classList.remove('activo'));
      const activo = document.querySelector(`.menu__lista a[href="#${entrada.target.id}"]`);
      if (activo) activo.classList.add('activo');
    }
  });
}, { threshold: 0.35 });

secciones.forEach(s => observador.observe(s));
function crearCarrusel(datos, idPista, idFlechaAnterior, idFlechaSiguiente, idPuntos) {

  const pista          = document.getElementById(idPista);
  const flechaAnterior = document.getElementById(idFlechaAnterior);
  const flechaSiguiente= document.getElementById(idFlechaSiguiente);
  const contenedorPuntos = document.getElementById(idPuntos);

  let indiceFocus = 0;
  const total = datos.length;

  datos.forEach((item, indice) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.dataset.indice = indice;

    tarjeta.innerHTML = `
      <span class="rango">#${indice + 1}</span>
      <img src="${item.imagen}" alt="Portada de ${item.titulo}"
           onerror="this.style.background='#1a1a2e'">
      <div class="degradado"></div>
      <div class="info">
        <div class="genero">${item.genero}</div>
        <div class="titulo-manga">${item.titulo}</div>
        <div class="puntuacion">★ ${item.puntuacion}</div>
        <div class="precio">${item.precio}</div>
        <button class="btn-comprar">Comprar</button>
      </div>
    `;

    tarjeta.addEventListener('click', () => {
      const diff = indice - indiceFocus;
      if (diff === 1 || diff === -(total - 1))       navegar(1);
      else if (diff === -1 || diff === total - 1)    navegar(-1);
    });

    pista.appendChild(tarjeta);
  });


  datos.forEach((_, indice) => {
    const punto = document.createElement('button');
    punto.className = 'punto' + (indice === 0 ? ' activo' : '');
    punto.setAttribute('aria-label', `Ir al elemento ${indice + 1}`);
    punto.addEventListener('click', () => irA(indice));
    contenedorPuntos.appendChild(punto);
  });

  function obtenerPosicion(indiceTarjeta) {
    const diff = (indiceTarjeta - indiceFocus + total) % total;
    if (diff === 0)          return 'centro';
    if (diff === 1)          return 'derecha';
    if (diff === total - 1)  return 'izquierda';
    if (diff === 2)          return 'lejana-der';
    if (diff === total - 2)  return 'lejana-izq';
    return 'oculta';
  }
  function actualizar() {
    pista.querySelectorAll('.tarjeta').forEach(tarjeta => {
      tarjeta.className = 'tarjeta ' + obtenerPosicion(+tarjeta.dataset.indice);
    });
    contenedorPuntos.querySelectorAll('.punto').forEach((punto, i) => {
      punto.classList.toggle('activo', i === indiceFocus);
    });
  }

  function navegar(direccion) {
    indiceFocus = (indiceFocus + direccion + total) % total;
    actualizar();
  }


  function irA(indice) {
    indiceFocus = indice;
    actualizar();
  }

  flechaAnterior.addEventListener('click', () => navegar(-1));
  flechaSiguiente.addEventListener('click', () => navegar(1));

  document.addEventListener('keydown', e => {
    const enVista = pista.closest('section').getBoundingClientRect();
    const visible = enVista.top < window.innerHeight && enVista.bottom > 0;
    if (!visible) return;
    if (e.key === 'ArrowLeft')  navegar(-1);
    if (e.key === 'ArrowRight') navegar(1);
  });


  let inicioX = 0;
  pista.addEventListener('touchstart', e => {
    inicioX = e.touches[0].clientX;
  }, { passive: true });

  pista.addEventListener('touchend', e => {
    const diff = inicioX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navegar(diff > 0 ? 1 : -1);
  });


  actualizar();
}

crearCarrusel(
  mangas,
  'pistaTarjetas',
  'flechaAnterior',
  'flechaSiguiente',
  'puntos'
);

crearCarrusel(
  comics,
  'pistaTarjetasComics',
  'flechaAnteriorComics',
  'flechaSiguienteComics',
  'puntosComics'
);
const contenedorFiltros   = document.getElementById('filtros');
const gridRecomendaciones = document.getElementById('gridRecomendaciones');
let generoActivo          = 'Todos';

generos.forEach(genero => {
  const btn = document.createElement('button');
  btn.className = 'filtro' + (genero === 'Todos' ? ' seleccionado' : '');
  btn.textContent = genero;

  btn.addEventListener('click', () => {
    generoActivo = genero;
    document.querySelectorAll('.filtro').forEach(b => b.classList.remove('seleccionado'));
    btn.classList.add('seleccionado');
    renderizarRecomendaciones();
  });

  contenedorFiltros.appendChild(btn);
});

function renderizarRecomendaciones() {
  gridRecomendaciones.innerHTML = '';

  const filtradas = generoActivo === 'Todos'
    ? recomendaciones
    : recomendaciones.filter(r => r.genero === generoActivo);

  filtradas.forEach((rec, i) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'rec';
    tarjeta.style.animationDelay = `${i * 0.07}s`;

    tarjeta.innerHTML = `
      <img src="${rec.imagen}" alt="${rec.titulo}"
           onerror="this.style.background='#1a1a2e'; this.style.height='200px'">
      <div class="info-rec">
        <div class="genero-rec">${rec.genero}</div>
        <div class="titulo-rec">${rec.titulo}</div>
        <p>${rec.descripcion}</p>
      </div>
    `;

    gridRecomendaciones.appendChild(tarjeta);
  });
}

renderizarRecomendaciones();
const gridNoticias = document.getElementById('gridNoticias');

noticias.forEach(noticia => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'noticia';

 tarjeta.innerHTML = `
    <div class="img-wrapper">
      <img src="${noticia.imagen}" alt="${noticia.titulo}"
           onerror="this.style.background='#1a1a2e'; this.style.height='160px'">
    </div>
    <div class="cuerpo">
      <span class="etiqueta">${noticia.etiqueta}</span>
      <h3>${noticia.titulo}</h3>
      <p>${noticia.descripcion}</p>
      <time>${noticia.fecha}</time>
      ${noticia.youtube ? `<a href="${noticia.youtube}" target="_blank" class="btn-trailer">▶ Ver trailer</a>` : ''}
    </div>
  `;

  gridNoticias.appendChild(tarjeta);
});
const formComentario   = document.getElementById('formularioComentario');
const listaComentarios = document.getElementById('listaComentarios');

formComentario.addEventListener('submit', e => {
  e.preventDefault();

 
  const nombre    = formComentario.nombre.value.trim();
  const manga     = formComentario.manga.value.trim();
  const comentario= formComentario.comentario.value.trim();


  const item = document.createElement('div');
  item.className = 'comentario-item';

  item.innerHTML = `
    <strong>${nombre}</strong>
    ${manga ? `<span class="manga-ref">📖 ${manga}</span>` : ''}
    <p>${comentario}</p>
  `;

  listaComentarios.prepend(item);

  formComentario.reset();
});

const formSoporte        = document.getElementById('formularioSoporte');
const confirmacionSoporte= document.getElementById('confirmacionSoporte');

formSoporte.addEventListener('submit', e => {
  e.preventDefault();

  const nombre = formSoporte.nombre.value.trim();

  confirmacionSoporte.innerHTML = `
    ✅ Gracias <strong>${nombre}</strong>, tu mensaje fue enviado.
    Te responderemos a la brevedad a tu correo.
  `;
  formSoporte.reset();
  setTimeout(() => {
    confirmacionSoporte.innerHTML = '';
  }, 6000);
});
