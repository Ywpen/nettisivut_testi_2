window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.style.background = 'rgba(13,13,13,0.95)';
    else nav.style.background = '#1a1a1a';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
    });
});