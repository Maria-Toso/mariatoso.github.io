document.addEventListener("DOMContentLoaded", () => {

  // 🔹 loader
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
    }, 800);
  }

  // 🔹 sidebar
  document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".sidebar li").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // 🔹 projetos
  const projects = [
    {
      name: "Recommendation Engine",
      desc: "Graph-based system using Neo4j for movie recommendations.",
      link: "https://github.com/Maria-Toso/Neo4j-Movie-Recommendation-System"
    },
    {
      name: "Validation Engine",
      desc: "Real-time credit card validation using Luhn algorithm.",
      link: "https://github.com/Maria-Toso/Validador-de-Cartao-de-Credito"
    }
  ];

  const container = document.getElementById("projects-container");

  if (container) {
    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      `;

      card.onclick = () => window.open(p.link, "_blank");
      container.appendChild(card);
    });
  }

  // 🔹 chart (com proteção)
  const canvas = document.getElementById("dashboardChart");

  if (canvas) {
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat'],
        datasets: [{
          data: [120,180,150,220,260,300],
          borderColor: '#0071FF',
          borderWidth: 3,
          fill: true,
          backgroundColor: 'rgba(0,113,255,0.05)'
        }]
      },
      options: {
        plugins:{legend:{display:false}},
        scales:{y:{display:false}}
      }
    });
  }

});