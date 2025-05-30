document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links (optional)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Example: Add a simple animation or interaction
    // You can expand this with more complex JavaScript as needed.
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mouseover', function() {
            // Example: change background slightly on hover - just for demonstration
            // this.style.backgroundColor = '#e0e0ff'; 
        });
        heroSection.addEventListener('mouseout', function() {
            // this.style.backgroundColor = '#eef'; // Reset background
        });
    }
}); 