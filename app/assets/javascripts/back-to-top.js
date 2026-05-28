const backToTopBtn = document.getElementById('backToTop');
const target = document.getElementById('pageTop');

let lastScrollTop = 0;
let downScrollDistance = 0; // Tracks consecutive downward movement
let hasBeenTriggered = false; // Tracks if the button's initial 2-screen condition was met
const DOWN_TOLERANCE = 300; // Pixels allowed down before hiding again

window.addEventListener('scroll', () => {
  // Fixed: Replaced deprecated pageYOffset with modern window.scrollY
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;
  
  // Dynamic thresholds based on your viewport requirements
  const upperActivationLimit = viewportHeight * 3; // 3 screens to turn ON
  const lowerDeactivationLimit = viewportHeight * 2; // 2 screen to turn OFF completely
  
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

// Floating sticky footer variant of the link for narrow viewports that will float above any main content but if the footer is on view it will dock right above it.
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".btt-container");
  const footer = document.querySelector("footer"); // Ensure this matches your footer element

  if (!container || !footer) return;

  // Configuration options for the observer
  const observerOptions = {
    root: null,      // Tracks intersection relative to the browser window viewport
    rootMargin: "0px", 
    threshold: 0     // Fires the exact frame the footer's top edge peaks onto the screen
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Footer has entered view; lock the component right above it
        container.classList.add("is-docked");
      } else {
        // Footer is out of sight; restore floating/sticky mode
        container.classList.remove("is-docked");
      }
    });
  };

  const footerObserver = new IntersectionObserver(observerCallback, observerOptions);
  footerObserver.observe(footer);
});

