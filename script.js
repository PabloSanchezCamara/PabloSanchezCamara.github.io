const projects = [
    {
      title: "Niko-Niko",
      description:
        "Es una aplicación creada en zityhub, utilizada a diario en la empresa y diseñada para medir el estado de ánimo de las personas al finalizar su jornada laboral. Su objetivo es fomentar el bienestar emocional en equipos de trabajo y medir su grado de satisfacción.",
      link: "https://honored-clave-790.notion.site/Proyecto-niko-niko-240d582b0cb5802e9413d4bf018b5353",
      github: "https://github.com/PabloSanchezCamara/niko-niko",
    },
    {
      title: "Ciclocero",
      description:
        "Es una plataforma creada para entusiastas del ciclismo que buscan explorar nuevas rutas y compartir experiencias con otros usuarios de la comunidad ciclista. Con Ciclocero, los usuarios pueden crear, descubrir y compartir sus rutas favoritas para bicicleta, junto con descripciones detalladas, información sobre modalidad, distancias, reseñas, fotos y puntos de interés en el camino.",
      link: "https://ciclocero.netlify.app/",
      github: "https://github.com/fraestgue/ciclocero-project3#",
    },
    {
      title: "Tanks Battle",
      description:
        "Es un juego arcade en el que el jugador tiene que destruir tanques enemigos mientras intenta esquivarlos para no perder su vida. Estos enemigos salen de manera aleatoria por cualquier lado de la pantalla e irán aumentando su velocidad de movimiento según pasa el tiempo. El jugador también tendrá un bonus con el que podrá ir aumentando su velocidad.",
      link: "https://pablosanchezcamara.github.io/tanks-battle/",
      github: "https://github.com/PabloSanchezCamara/tanks-battle",
    },
  ];
  
  const experience = [
    {
      title: "Zityhub",
      from: "Desde abril 2024",
      progress: `
        <p>Durante mi etapa en <strong>Zityhub</strong> he adquirido una experiencia valiosa trabajando en un entorno profesional de desarrollo web, participando tanto en proyectos individuales como colaborativos dentro de un equipo multidisciplinar.</p>
        <p>Me he familiarizado con el flujo de trabajo de una empresa tecnológica real, desde metodologías ágiles hasta la entrega continua de producto.</p>
        <p>En el área de <strong>frontend</strong>, he trabajado principalmente con <strong>JavaScript</strong>, desarrollando interfaces modernas mediante el uso de <strong>React</strong>, junto a tecnologías como <strong>Styled Components</strong>, <strong>Redux</strong> para la gestión de estado y herramientas de testing como <strong>React Testing Library</strong> para asegurar la calidad del código.</p>
        <p>También he colaborado estrechamente con los equipos de <strong>backend</strong> y <strong>diseño</strong>, ampliando así mi visión del desarrollo full stack. En este contexto, he utilizado herramientas como <strong>MongoDB</strong>, <strong>Sequel Pro</strong> y <strong>Figma</strong>.</p>
        <p>Además de mejorar mis habilidades técnicas, esta experiencia me ha permitido desarrollar competencias clave como el trabajo en remoto, la comunicación entre equipos, la gestión del tiempo y la capacidad de adaptación a nuevos retos y tecnologías.</p>
      `,
    },
  ];
  
  function renderProjects() {
    const container = document.getElementById("project-list");
    if (!container) return;
  
    projects.forEach(({ title, description, link, github }) => {
      const article = document.createElement("article");
      article.className = "project";
      article.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}" target="_blank" rel="noopener noreferrer">Presentación del proyecto</a>
        <a href="${github}" target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a>
      `;
      container.appendChild(article);
    });
  }
  
  function renderExperience() {
    const container = document.getElementById("experience-list");
    if (!container) return;
  
    experience.forEach(({ title, from, progress }) => {
      const article = document.createElement("article");
      article.className = "experience";
      article.innerHTML = `
        <h3>${title}</h3>
        <p class="period">${from}</p>
        ${progress}
      `;
      container.appendChild(article);
    });
  }
  
  function setupThemeToggle() {
    const toggleBtn = document.getElementById("toggle-theme");
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  
    toggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const theme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    renderExperience();
    setupThemeToggle();
  });
  