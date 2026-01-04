(function () {
  function init() {
    if (!window.matchMedia('(min-width:1440px)').matches) return;

    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const sections = Array.from(document.querySelectorAll('section, footer'));
    if (!sections.length) return;

    // If you have a fixed header, set its height here (px). Otherwise keep 0.
    const HEADER_HEIGHT = 0;

    // find closest section on load
    let current = sections.findIndex((el) => Math.abs(el.getBoundingClientRect().top - HEADER_HEIGHT) <= 2);
    if (current === -1) current = 0;

    let locked = false;
    let scrollTimeout = null;
    let lastWheelTime = 0;
    let wheelEventCount = 0;
    const WHEEL_DEBOUNCE_TIME = 150; // Increased debounce time for Safari
    const MAX_WHEEL_EVENTS = 1; // Only allow one wheel event per debounce period

    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    function scrollToIndex(i) {
      if (i < 0 || i >= sections.length || locked) return;

      locked = true;
      current = i;
      const el = sections[i];

      // Use GSAP for smooth scrolling
      gsap.to(window, {
        duration: 0.3, // Slightly longer duration for smoother animation
        ease: "power2.inOut",
        scrollTo: {
          y: el.offsetTop - HEADER_HEIGHT,
          autoKill: false
        },
        onComplete: () => {
          // Add a longer delay before unlocking to prevent rapid scrolling
          setTimeout(() => {
            locked = false;
            wheelEventCount = 0; // Reset wheel event count
          }, 50); // Longer delay to prevent rapid scrolling
        }
      });
    }

    // keep current index in sync if user jumps around (only when not locked)
    let syncRaf = null;
    window.addEventListener('scroll', () => {
      if (locked) return;
      if (syncRaf) cancelAnimationFrame(syncRaf);
      syncRaf = requestAnimationFrame(() => {
        const y = window.scrollY + HEADER_HEIGHT;
        let best = 0, bestDist = Infinity;
        sections.forEach((el, i) => {
          const top = el.offsetTop;
          const d = Math.abs(top - y);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        current = best;
      });
    }, { passive: true });

    window.addEventListener('wheel', (e) => {
      // Check if modal is open - if so, don't prevent default scroll behavior
      if (document.body.classList.contains('inactive-scroll')) {
        return;
      }

      e.preventDefault();

      const now = Date.now();

      // Reset wheel event count if enough time has passed
      if (now - lastWheelTime > WHEEL_DEBOUNCE_TIME) {
        wheelEventCount = 0;
      }

      // Increment wheel event count
      wheelEventCount++;

      // Only process if we haven't exceeded the max wheel events
      if (wheelEventCount > MAX_WHEEL_EVENTS) {
        return;
      }

      // Prevent any scroll action if already locked
      if (locked) return;

      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Process scroll with improved debouncing
      scrollTimeout = setTimeout(() => {
        // Triple check - prevent any action if already locked
        if (locked) return;

        const dir = Math.sign(e.deltaY);
        const target = clamp(current + dir, 0, sections.length - 1);

        if (target === current) return;

        lastWheelTime = now;
        scrollToIndex(target);
      }, 50); // Slightly longer delay for better Safari compatibility
    }, { passive: false });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();