(function () {
    function init() {
        const sections = document.querySelectorAll('.text-image-section');

        sections.forEach(section => {
            // Set CSS custom properties for the backgrounds
            section.style.setProperty('--mobile-bg', `url(${section.dataset.mobileBg})`);
            section.style.setProperty('--desktop-bg', `url(${section.dataset.desktopBg})`);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();