// 1. Scroll Suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o pulo seco clássico

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste por causa do header fixo
                behavior: 'smooth' 
            });
        }
    });
});

// 2. Efeito de Revelação (Reveal) ao rolar a página
const revealElements = () => {
    const reveals = document.querySelectorAll('.project-card, .skills-list, .hero');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Distância para ativar o efeito

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealElements);

// Executa uma vez ao carregar para mostrar o que já está na tela
revealElements();
