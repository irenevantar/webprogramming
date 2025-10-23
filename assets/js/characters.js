// Character Cards Interaction and Animation
(function() {
  'use strict';
  
  // Character card hover effects
  function initCharacterCards() {
    const cards = document.querySelectorAll('.character-card');
    
    cards.forEach(card => {
      // Add mousemove parallax effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const icon = card.querySelector('.character-icon');
        if (icon) {
          icon.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px) scale(1.1) rotate(5deg)`;
        }
      });
      
      // Reset on mouse leave
      card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.character-icon');
        if (icon) {
          icon.style.transform = '';
        }
      });
    });
  }
  
  // Scroll-triggered character reveal
  function initCharacterReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
      observer.observe(card);
    });
  }
  
  // Character data attributes animation
  function initCharacterAttributes() {
    const cards = document.querySelectorAll('.character-card');
    
    cards.forEach(card => {
      const characterType = card.dataset.character;
      
      // Add specific color accents based on character
      const colorMap = {
        'denji': '#ef4444',
        'reze': '#f97316',
        'makima': '#dc2626',
        'aki': '#7dd3fc'
      };
      
      const color = colorMap[characterType] || '#ef4444';
      
      card.addEventListener('mouseenter', () => {
        const line = card.querySelector('.character-line');
        if (line) {
          line.style.background = `linear-gradient(90deg, ${color}, ${color}dd)`;
        }
      });
    });
  }
  
  // Initialize all character interactions
  function init() {
    initCharacterCards();
    initCharacterReveal();
    initCharacterAttributes();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
