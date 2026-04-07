const revealItems = document.querySelectorAll('.reveal-up');
const siteHeader = document.querySelector('.site-header');
let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener(
  'scroll',
  () => {
    if (!siteHeader) {
      return;
    }

    const currentScrollY = window.scrollY;

    if (currentScrollY <= 24) {
      siteHeader.classList.remove('is-hidden');
    } else if (currentScrollY > lastScrollY) {
      siteHeader.classList.add('is-hidden');
    } else {
      siteHeader.classList.remove('is-hidden');
    }

    lastScrollY = currentScrollY;
  },
  { passive: true }
);
