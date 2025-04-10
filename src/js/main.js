// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Animations on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const checkScroll = () => {
    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      
      if (elementTop < triggerPoint) {
        el.classList.add('animate-fade-in');
      }
    });
  };
  
  // Run once on load
  checkScroll();
  
  // Run on scroll
  window.addEventListener('scroll', checkScroll);
  
  // Counter animation for statistics
  const counterElements = document.querySelectorAll('.counter');
  
  counterElements.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // ms
    const steps = 50;
    const stepTime = duration / steps;
    const stepAmount = target / steps;
    let current = 0;
    
    const updateCounter = () => {
      current += stepAmount;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}); 
