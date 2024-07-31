document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const originalBgColor = navbar.style.backgroundColor;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = originalBgColor;
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6347';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});