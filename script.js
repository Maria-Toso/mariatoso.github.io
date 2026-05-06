async function loadProjects() {
  const res = await fetch("./data/projects.json");
  const projects = await res.json();

  const container = document.getElementById("projects-container");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = `project-item ${p.type}`;

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>

      <p class="tech">
        ${p.tech.map(t => `<span>${t}</span>`).join("")}
      </p>

      ${
        p.link
          ? `<a href="${p.link}" target="_blank">Ver projeto</a>`
          : `<span class="private">Código sob solicitação</span>`
      }
    `;

    container.appendChild(div);
  });
}

loadProjects();
