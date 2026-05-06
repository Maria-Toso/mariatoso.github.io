// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 400);
});

// THEME (persistente)
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark);
});

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

// NAV ACTIVE (mais eficiente)
const sections = [...document.querySelectorAll("section")];
const navLinks = [...document.querySelectorAll(".nav-link")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));

// CURSOR (throttle pra performance)
const glow = document.querySelector(".cursor-glow");

let raf;
window.addEventListener("mousemove", e => {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    raf = null;
  });
});

// GITHUB API (com fallback)
async function loadProjects() {
  try {
    const res = await fetch("https://api.github.com/users/Maria-Toso/repos");
    const data = await res.json();

    const container = document.getElementById("github-projects");

    data.slice(0, 4).forEach(repo => {
      const card = document.createElement("article");
      card.className = "saas-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Project without description"}</p>
        <a href="${repo.html_url}" target="_blank" rel="noopener">View Code</a>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Erro ao carregar projetos", err);
  }
}

loadProjects();
