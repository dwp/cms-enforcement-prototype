const backToTopBtn = document.getElementById('backToTop');
const target = document.getElementById('pageTop');

let lastScrollTop = 0;
let downScrollDistance = 0; // Tracks consecutive downward movement
let hasBeenTriggered = false; // Tracks if the button's initial 2-screen condition was met
const DOWN_TOLERANCE = 500; // Pixels allowed down before hiding again

window.addEventListener('scroll', () => {
  // Fixed: Replaced deprecated pageYOffset with modern window.scrollY
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;
  
  // Dynamic thresholds based on your viewport requirements
  const upperActivationLimit = viewportHeight * 2; // 2 screens to turn ON
  const lowerDeactivationLimit = viewportHeight * 1; // 1 screen to turn OFF completely
  
  const isScrollingUp = scrollTop < lastScrollTop;

  // 1. Evaluate state boundaries based on absolute position
  if (scrollTop > upperActivationLimit) {
    hasBeenTriggered = true;
  } else if (scrollTop < lowerDeactivationLimit) {
    hasBeenTriggered = false;
  }

  // 2. Evaluate visibility logic only if the button is within its active zone
  if (hasBeenTriggered) {
    if (isScrollingUp) {
      // Show immediately when moving upward anywhere above the 1-screen mark
      backToTopBtn.removeAttribute('hidden');
      downScrollDistance = 0; 
    } else {
      // User is moving downward: count the distance
      downScrollDistance += (scrollTop - lastScrollTop);
      
      // Hide if they exceed the downward buffer limit
      if (downScrollDistance >= DOWN_TOLERANCE) {
        backToTopBtn.setAttribute('hidden', '');
      }
    }
  } else {
    // Force hide if we have crossed back above the 1-screen line near the top
    backToTopBtn.setAttribute('hidden', '');
    downScrollDistance = 0;
  }

  // Prevent negative values from iOS/macOS elastic bounce effects breaking calculations
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, { passive: true });

// Accessible Focus & Scroll Action
backToTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  // Safeguard: Check if target exists in DOM before scrolling/focusing
  if (target) {
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
    
    target.focus({ preventScroll: true });
  }
});
