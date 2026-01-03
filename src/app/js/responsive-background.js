document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.text-image-section');
    
    sections.forEach(section => {
        // Set CSS custom properties for the backgrounds
        section.style.setProperty('--mobile-bg', `url(${section.dataset.mobileBg})`);
        section.style.setProperty('--desktop-bg', `url(${section.dataset.desktopBg})`);
    });
}); 