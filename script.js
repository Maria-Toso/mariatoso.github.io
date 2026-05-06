// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// THEME
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
});

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// SCROLL ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// GITHUB PROJECTS
fetch("https://api.github.com/users/Maria-Toso/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("github-projects");

    data.slice(0, 4).forEach(repo => {
      const card = document.createElement("div");
      card.className = "saas-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View Code</a>
      `;

      container.appendChild(card);
    });
  });
