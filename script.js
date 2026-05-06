// DARK MODE PERSISTENTE
const btn = document.getElementById("theme-toggle");

if(localStorage.theme === "dark"){
  document.body.classList.add("dark");
}

btn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
};

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("visible");
    }
  });
});

// SKELETON LOADING
const container = document.getElementById("projects");

for(let i=0;i<3;i++){
  const sk = document.createElement("div");
  sk.className = "skeleton";
  container.appendChild(sk);
}

// GITHUB API
async function load(){
  const res = await fetch("https://api.github.com/users/Maria-Toso/repos");
  const repos = await res.json();

  container.innerHTML = "";

  let stars = 0;

  repos.forEach(r=>{
    stars += r.stargazers_count;

    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
      <h3>${r.name}</h3>
      <p>${r.description || "No description"}</p>
      <small>⭐ ${r.stargazers_count}</small>
    `;

    container.appendChild(div);
  });

  document.getElementById("repos").innerText = repos.length;
  document.getElementById("stars").innerText = stars;
}

load();