const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.nav');

// overlay
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

function toggleMenu() {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', !expanded);
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');

  document.body.style.overflow = mainNav.classList.contains('active')
    ? 'hidden'
    : '';
}

menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
      toggleMenu();
    }
  });
});

// Закрытие меню при изменении размера окна (если перешли на десктоп)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});


// Scroll to top
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
