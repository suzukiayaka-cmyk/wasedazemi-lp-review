(() => {
  const navLinks = document.querySelectorAll('.pc-nav a[data-nav]');
  if (!navLinks.length) return;

  const targets = Array.from(navLinks)
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (!targets.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  targets.forEach((target) => observer.observe(target));
})();

(() => {
  const revealEls = document.querySelectorAll('.reveal, .content-sec__ttl-img');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => observer.observe(el));
})();
