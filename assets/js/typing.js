// Typing Animation for Hero Section
(function() {
  'use strict';
  
  const texts = [
    '誰も知らない、少女の心',
    '폭발 같은 여름, 소년과 소녀의 이야기',
    'A summer explosion, a story of boy and girl',
    '体も心も、全部嘘だった'
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  const typingElement = document.getElementById('typingText');
  
  if (!typingElement) return;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    // Check if word is complete
    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start typing animation after a short delay
  setTimeout(type, 1000);
  
})();
