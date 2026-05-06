async function loadProjects() {
  const res = await fetch("./data/projects.json");
  const projects = await res.json();

  const container = document.getElementById("projects-container");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-item";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <small>${p.tech.join(" • ")}</small>
      ${p.link ? `<br><a href="${p.link}" target="_blank">View →</a>` : ""}
    `;

    container.appendChild(div);
  });
}

loadProjects();
