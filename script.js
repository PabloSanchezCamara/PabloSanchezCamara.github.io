const projects = [
    {
      title: "Niko Niko",
      description: "Aplicación de seguimiento emocional basada en la metodología ágil.",
      link: "XXX"//"https://github.com/tuusuario/niko-niko"
    },
    // {
    //   title: "Blog Ciclismo",
    //   description: "Revista digital sobre ciclismo con artículos y reportajes.",
    //   link: "https://elfarillorojo.com"
    // }
  ];
  
  // Mostrar proyectos en el DOM
  const container = document.getElementById("project-list");
  
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Ver proyecto</a>
    `;
    container.appendChild(div);
  });
  