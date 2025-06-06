// Sidebar animation on scroll
window.addEventListener('scroll', () => {
  const sidebar = document.getElementById('sidebar');
  if (window.scrollY > 100) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typewriter effect for hero section
new Typed('#typed-name', {
  strings: ['Sabarinathan'],
  typeSpeed: 100,
  startDelay: 500,
  showCursor: false
});

new Typed('#typed-title', {
  strings: ['Full Stack Developer', 'Innovator', 'Tech Enthusiast'],
  typeSpeed: 50,
  backSpeed: 30,
  startDelay: 1500,
  loop: true
});

// GSAP animations
gsap.from('#hero img', { opacity: 0, y: -100, duration: 1 });
gsap.from('#hero h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('#hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('#hero a', { opacity: 0, scale: 0.8, duration: 1, delay: 1.5 });

// Swiper for projects
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Accordion for experience
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    item.classList.toggle('active');
    content.classList.toggle('hidden');
  });
});