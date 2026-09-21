document.addEventListener('DOMContentLoaded', () => {
  const sections = [...document.querySelectorAll('main section[id], footer section[id]')];
  const navLinks = [...document.querySelectorAll('.site-nav a[data-path]')];

  const highlightCurrentSection = () => {
    const scrollPosition = window.scrollY + 180;

    let currentSection = sections[0]?.id ?? '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.dataset.path === currentSection;
      link.classList.toggle('is-active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  };

  highlightCurrentSection();
  window.addEventListener('scroll', highlightCurrentSection, { passive: true });
});
