 // Seleccionamos todos los elementos que queremos animar
    const elementosAnimados = document.querySelectorAll('.animar, .animar-izquierda');

    // IntersectionObserver detecta cuando un elemento aparece en pantalla
    const observador = new IntersectionObserver(function(entradas) {
      entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.1 });

    elementosAnimados.forEach(function(el) {
      observador.observe(el);
    });

    // Scroll suave al hacer clic en los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
      enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(enlace.getAttribute('href'));
        if (destino) {
          destino.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

var generoInfo = {
  "Reggaeton": "Ritmo urbano nacido en Puerto Rico y Panamá a inicios de los 90. Fusiona influencias caribeñas, hip-hop y electrónica con beats de dembow inconfundibles.",
  "Champeta": "Género afrocaribe originario de Cartagena y la Costa Caribe colombiana. Mezcla ritmos africanos, cumbia y porro en una propuesta vibrante y bailable.",
  "Dancehall": "Estilo jamaicano surgido a finales de los 70 como evolución del reggae. Ritmos más rápidos, letras directas y una cultura visual y coreográfica única.",
  "AfroBeat": "Fusión africana fundada por Fela Kuti que combina jazz, funk y ritmos yoruba. Hoy es uno de los géneros de mayor crecimiento global.",
  "Reggae": "Nacido en Jamaica en los 60, con influencia del ska y el rocksteady. Sus tempos relajados y mensajes de paz y resistencia lo convirtieron en ícono mundial.",
  "Acústico": "Formato que privilegia los instrumentos sin amplificación electrónica. Destaca la pureza del sonido y la expresividad natural del intérprete.",
  "Balada": "Canción lírica de tempo lento centrada en la emoción y la narrativa. Sus raíces van desde la canción romántica latinoamericana hasta el pop moderno.",
  "Trap": "Subgénero del hip-hop surgido en Atlanta a principios de los 2000. Se caracteriza por hi-hats acelerados, bajos pesados y letras de ambientes urbanos.",
  "Rap": "Pilar del hip-hop basado en la declamación rítmica sobre una base instrumental. Es una de las formas de expresión más influyentes del siglo XX.",
  "Pop": "El género más accesible de la música moderna. Melodías pegajosas, estructuras claras y una capacidad única de conectar con audiencias globales."
};

// Abrir modal al hacer clic en una tarjeta
document.querySelectorAll(".tarjeta-genero").forEach(function(card) {
  card.addEventListener("click", function() {
    var nombre = card.querySelector(".genero-nombre").textContent.trim();
    var img    = card.querySelector(".genero-imagen img");
    
    document.getElementById("modal-nombre").textContent = nombre;
    document.getElementById("modal-desc").textContent   = generoInfo[nombre] || "";
    document.getElementById("modal-img").src            = img ? img.src : "";
    document.getElementById("modal-img").alt            = nombre;
    
    var modal = document.getElementById("genero-modal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// Función única para cerrar
function cerrarModal() {
  document.getElementById("genero-modal").style.display = "none";
  document.body.style.overflow = "";
}

// CERRAR AL HACER CLIC FUERA (En el fondo del modal)
document.getElementById("genero-modal").addEventListener("click", function(e) {
  // Si el clic fue en el fondo negro y NO dentro de la caja de contenido, se cierra
  if (e.target === this) {
    cerrarModal();
  }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function(e) { 
  if (e.key === "Escape") cerrarModal(); 
});
