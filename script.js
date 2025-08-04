const projects = [
    {
      title: "Niko Niko",
      description: "Es una aplicación diseñada para medir el estado de ánimo de las personas al finalizar su jornada laboral. Su objetivo es fomentar el bienestar emocional en equipos de trabajo y medir su grado de satisfacción.",
      link: "https://honored-clave-790.notion.site/Proyecto-niko-niko-240d582b0cb5802e9413d4bf018b5353",
      github: "XXX"
    },
    {
      title: "Ciclocero",
      description: "Ciclocero es una plataforma creada para entusiastas del ciclismo que buscan explorar nuevas rutas y compartir experiencias con otros usuarios de la comunidad ciclista. Con Ciclocero, los usuarios pueden crear, descubrir y compartir sus rutas favoritas para bicicleta, junto con descripciones detalladas, información sobre modalidad, distancias, reseñas, fotos y puntos de interés en el camino.",
      link: "https://ciclocero.netlify.app/",
      github: "https://github.com/fraestgue/ciclocero-project3#"
    }
  ];
  
  // Mostrar proyectos en el DOM
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
  