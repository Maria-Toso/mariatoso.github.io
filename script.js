// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Revelação ao Rolar
const reveal = () => {
    document.querySelectorAll('section').forEach(sec => {
        const top = window.scrollY + window.innerHeight - 100;
        if (sec.offsetTop < top) sec.classList.add('active');
    });
};

window.addEventListener('scroll', reveal);
reveal(); // Gatilho inicial
