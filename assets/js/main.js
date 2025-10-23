// Main Application Logic and Loading
(function() {
  'use strict';
  
  // Loading Screen Animation
  function initLoader() {
    const loader = document.querySelector('#loader');
    const progressEl = document.querySelector('#progress');
    
    if (!loader || !progressEl) return;
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
      progress += Math.max(1, Math.floor(Math.random() * 10));
      
      if (progress > 100) progress = 100;
      
      progressEl.textContent = `LOADING - ${progress}%`;
      
      if (progress === 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 500);
      }
    }, 50);
  }
  
  // Performance optimizations
  function initPerformance() {
    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    } else {
      // Fallback for browsers that don't support lazy loading
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
      document.body.appendChild(script);
    }
    
    // Optimize animations for performance
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  }
  
  // Accessibility enhancements
  function initAccessibility() {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#hero';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Focus visible for keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
  }
  
  // Update footer year
  function updateFooterYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // Initialize all features
  function init() {
    initLoader();
    initPerformance();
    initAccessibility();
    updateFooterYear();
    
    // Log initialization
    console.log('%c CHAINSAW MAN: REZE ARC ', 'background: #ef4444; color: #fff; font-weight: bold; padding: 4px 8px;');
    console.log('%c Website initialized successfully ', 'background: #0a0a0a; color: #f97316; padding: 4px 8px;');
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Export for debugging
  window.REZE_ARC = {
    version: '1.0.0',
    initialized: true
  };
  
})();

