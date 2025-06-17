document.addEventListener('DOMContentLoaded', () => {
  // Sidebar animation on scroll
  window.addEventListener('scroll', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (window.scrollY > 100) {
        sidebar.classList.add('active');
      } else {
        sidebar.classList.remove('active');
      }
    }
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Typewriter effect for hero section
  if (typeof Typed !== 'undefined') {
    const typedName = document.getElementById('typed-name');
    const typedTitle = document.getElementById('typed-title');
    
    if (typedName) {
      new Typed('#typed-name', {
        strings: ['Sabarinathan S'],
        typeSpeed: 100,
        startDelay: 500,
        showCursor: false
      });
    }

    if (typedTitle) {
      new Typed('#typed-title', {
        strings: ['Full Stack Developer', 'Innovator', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 1500,
        loop: true
      });
    }
  }

  // GSAP animations
  if (typeof gsap !== 'undefined') {
    if (document.querySelector('#hero img')) {
      gsap.from('#hero img', { opacity: 0, y: -100, duration: 1 });
    }
    if (document.querySelector('#hero h1')) {
      gsap.from('#hero h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    }
    if (document.querySelector('#hero p')) {
      gsap.from('#hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
    }
    if (document.querySelector('#hero a')) {
      gsap.from('#hero a', { opacity: 0, scale: 0.8, duration: 1, delay: 1.5 });
    }
  }

  // Swiper for projects
  if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-container')) {
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
  }

  // Accordion for experience
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      if (content) {
        item.classList.toggle('active');
        content.classList.toggle('hidden');
      }
    });
  });
});