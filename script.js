const projects = [
    {
      title: "Niko Niko",
      description: "Es una aplicación diseñada para medir el estado de ánimo de las personas al finalizar su jornada laboral. Su objetivo es fomentar el bienestar emocional en equipos de trabajo y medir su grado de satisfacción.",
      link: "https://honored-clave-790.notion.site/Proyecto-niko-niko-240d582b0cb5802e9413d4bf018b5353",
      github: "https://github.com/PabloSanchezCamara/niko-niko"
    },
    {
      title: "Ciclocero",
      description: "Ciclocero es una plataforma creada para entusiastas del ciclismo que buscan explorar nuevas rutas y compartir experiencias con otros usuarios de la comunidad ciclista. Con Ciclocero, los usuarios pueden crear, descubrir y compartir sus rutas favoritas para bicicleta, junto con descripciones detalladas, información sobre modalidad, distancias, reseñas, fotos y puntos de interés en el camino.",
      link: "https://ciclocero.netlify.app/",
      github: "https://github.com/fraestgue/ciclocero-project3#"
    },
    {
      title: "Tanks Battle",
      description: "Tanks Battle es un juego en el que el jugador tiene que destruir tanques enemigos mientras intenta esquivarlos para no perder su vida. Estos enemigos salen de manera aleatoria por cualquier lado de la pantalla e irán aumentando su velocidad de movimiento según pasa el tiempo. El jugador también tendrá un bonus con el que podrá ir aumentando su velocidad.",
      link: "https://pablosanchezcamara.github.io/tanks-battle/",
      github: "https://github.com/PabloSanchezCamara/tanks-battle"
    }
  ];
  
  // Mostrar proyectos en el DOM
  document.addEventListener("DOMContentLoaded", () => {
    // Cargar proyectos
    const container = document.getElementById("project-list");
    projects.forEach((project) => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">Presentación de proyecto</a>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">Github</a>
      `;
      container.appendChild(div);
    });
  
    // Activar modo oscuro si estaba guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  
    // Configurar botón
    const toggleThemeBtn = document.getElementById('toggle-theme');
    if (toggleThemeBtn) {
      toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
      });
    }
  });