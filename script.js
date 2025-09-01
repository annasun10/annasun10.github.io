// Year stamp
document.getElementById('y')?.textContent = new Date().getFullYear();

// Highlight active nav chip while scrolling + set aria-current
const sections = [...document.querySelectorAll('section, header#top')];
const chips = [...document.querySelectorAll('.nav a.chip')];

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = `#${entry.target.id || 'top'}`;
        chips.forEach((chip) => {
          const isActive = chip.getAttribute('href') === id;
          chip.classList.toggle('active', isActive);
          if (isActive) chip.setAttribute('aria-current', 'true');
          else chip.removeAttribute('aria-current');
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);

sections.forEach((section) => obs.observe(section));

// Ensure correct chip is active on initial load (when hash exists)
window.addEventListener('DOMContentLoaded', () => {
  const id = location.hash || '#top';
  chips.forEach((chip) => {
    const isActive = chip.getAttribute('href') === id;
    chip.classList.toggle('active', isActive);
    if (isActive) chip.setAttribute('aria-current', 'true');
    else chip.removeAttribute('aria-current');
  });
});
