// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Profile image fallback to avatar ----------
(function () {
  const img = document.getElementById('profileImg');
  if (!img) return;
  img.addEventListener('error', function handle() {
    const fallback = img.getAttribute('data-fallback');
    if (fallback && img.src.indexOf(fallback) === -1) {
      img.src = fallback;
    }
    img.removeEventListener('error', handle);
  });
})();

// ---------- Typing effect in hero ----------
(function () {
  const el = document.getElementById('typed');
  if (!el) return;

  const phrases = [
    'something teams trust.',
    'AI-ready assets.',
    'clean, governed metadata.',
    'decisions, not guesswork.',
    'a competitive advantage.'
  ];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { el.textContent = phrases[0]; return; }

  let p = 0, c = 0, deleting = false;

  function tick() {
    const word = phrases[p];
    el.textContent = deleting ? word.slice(0, c--) : word.slice(0, c++);

    let delay = deleting ? 45 : 85;
    if (!deleting && c === word.length + 1) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 300; }

    setTimeout(tick, delay);
  }
  tick();
})();

// ---------- Theme toggle (persisted) ----------
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = toggle.querySelector('.theme-icon');

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
})();

// ---------- Mobile menu ----------
(function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ---------- Nav border + scroll progress ----------
(function () {
  const nav = document.getElementById('nav');
  const bar = document.getElementById('scrollProgress');

  const onScroll = function () {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 10);

    if (bar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ---------- Reveal sections on scroll ----------
(function () {
  const items = document.querySelectorAll('.section');
  items.forEach(function (el) { el.classList.add('reveal'); });

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (el) { observer.observe(el); });
})();
