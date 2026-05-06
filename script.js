const btn = document.getElementById("theme-toggle");
const reveals = document.querySelectorAll(".reveal");

if(localStorage.theme === "dark") document.body.classList.add("dark");

btn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
  btn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add("visible");
  });
});

async function fetchGitHub() {
  try {
    const res = await fetch("https://api.github.com/users/Maria-Toso/repos");
    const repos = await res.json();
    const container = document.getElementById("projects-grid");
    let totalStars = 0;

    container.innerHTML = "";
    repos.forEach(r => {
      if(!r.fork) {
        totalStars += r.stargazers_count;
        const card = document.createElement("div");
        card.className = "project";
        card.innerHTML = `
          <div class="project-img"></div>
          <div class="project-body">
            <h3>${r.name}</h3>
            <p>${r.description || "Complex system architecture and data processing."}</p>
            <div style="margin-top:15px; font-size:0.8rem; font-weight:700; color:var(--accent)">
              ${r.language || 'Python'} • ⭐ ${r.stargazers_count}
            </div>
          </div>
        `;
        container.appendChild(card);
      }
    });

    document.getElementById("repos").innerText = repos.length;
    document.getElementById("stars").innerText = totalStars;
  } catch (e) { console.error("API Error"); }
}

const ctx = document.getElementById("chart").getContext("2d");
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Avg Price (R$)',
      data: [5.20, 5.45, 5.10, 5.60, 5.85, 5.70],
      borderColor: '#0047FF',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(0, 71, 255, 0.05)'
    }]
  },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
});

fetchGitHub();
window.dispatchEvent(new Event('scroll'));