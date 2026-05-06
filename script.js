// Theme Toggle Logic
const btn = document.getElementById("theme-toggle");
btn.onclick = () => {
  document.body.classList.toggle("dark");
  btn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Intersection Observer for Reveal Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Real-time GitHub Data
async function loadGitHub() {
  const container = document.getElementById("projects-container");
  try {
    const response = await fetch("https://api.github.com/users/Maria-Toso/repos");
    const repos = await response.json();
    
    let totalStars = 0;
    container.innerHTML = "";

    // Filtrando os 6 repositórios mais relevantes
    repos.slice(0, 6).forEach(repo => {
      totalStars += repo.stargazers_count;
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <span class="badge">${repo.language || 'Code'}</span>
        <h3>${repo.name}</h3>
        <p>${repo.description || "Architecting scalable backend solutions and data pipelines."}</p>
        <div style="margin-top:20px; color:var(--accent); font-weight:700">
             ⭐ ${repo.stargazers_count} Stars
        </div>
      `;
      container.appendChild(card);
    });

    document.getElementById("repos").innerText = repos.length;
    document.getElementById("stars").innerText = totalStars;
  } catch (err) {
    console.error("API Fetch Error");
  }
}

// Chart.js - PriceTrackerES Dynamic Visualization
const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Gasoline Trend',
      data: [5.10, 5.45, 5.20, 5.80, 5.65, 6.10],
      borderColor: '#0047FF',
      borderWidth: 3,
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(0, 71, 255, 0.05)'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { 
        y: { display: false }, 
        x: { grid: { display: false }, ticks: { color: '#64748b' } } 
    }
  }
});

loadGitHub();