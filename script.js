// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { }
});

// Mobile navigation
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

function closeNav() {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
}

navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

siteNav.addEventListener('click', (e) => {
    if (e.target.closest('.nav-link')) closeNav();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
                });
            });
        },
        { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => sectionObserver.observe(section));
}

// Project filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach((b) => {
            const active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', String(active));
        });
        projectCards.forEach((card) => {
            const cats = (card.dataset.cat || '').split(' ');
            card.classList.toggle('is-hidden', filter !== 'all' && !cats.includes(filter));
        });
    });
});
