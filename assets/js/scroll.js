// Scroll-based Reveal Animations
(function() {
  'use strict';
  
  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  // Create observer for reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: unobserve after revealing
        // revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with reveal classes
  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-panel, .reveal-text');
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }
  
  // Header scroll effect
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
      } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
  
  // Smooth scroll for navigation links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // Parallax effect for hero section
  function initParallax() {
    const heroImage = document.querySelector('.hero-poster-image');
    if (!heroImage) return;
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
      }
    }, { passive: true });
  }
  
  // Initialize all scroll effects
  function init() {
    initRevealAnimations();
    initHeaderScroll();
    initSmoothScroll();
    initParallax();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
