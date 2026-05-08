const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  section.classList.add("reveal");
  section.style.transitionDelay = `${index * 0.06}s`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => observer.observe(section));

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
  if (!glow) return;

  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const cards = document.querySelectorAll(
  ".project-card, .skill-card, .process-item, .mini-card"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});