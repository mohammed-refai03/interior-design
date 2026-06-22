/* ==========================================================================
   STACKLY APPLICATION ENTRY POINT (Multi-Page Version)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initStickyNavbar();
  initMobileNavbar();
  initCustomCursor();
  initScrollReveal();
  initPageTransitions();
});

// Sticky Navigation on Scroll
function initStickyNavbar() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  // Toggle scrolled class only if it wasn't hardcoded in HTML (transparent navbar like home page)
  const isTransparentAtStart = !navbar.classList.contains("scrolled");

  if (isTransparentAtStart) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
}

// Mobile Toggle menu drawer handling
function initMobileNavbar() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link, .nav-btn");

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("active");
    
    // Animate bars to X
    const bars = navToggle.querySelectorAll(".bar");
    if (navMenu.classList.contains("open")) {
      bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
      document.body.classList.add("no-scroll");
    } else {
      bars[0].style.transform = "none";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "none";
      document.body.classList.remove("no-scroll");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      const bars = navToggle.querySelectorAll(".bar");
      bars.forEach(b => b.style.transform = "none");
      bars[1].style.opacity = "1";
      document.body.classList.remove("no-scroll");
    });
  });
}

// Custom luxury cursor follower
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  if (!cursor || !dot) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });

  const animate = () => {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    
    requestAnimationFrame(animate);
  };
  animate();

  bindInteractiveCursorHovers();
}

function bindInteractiveCursorHovers() {
  const hoverableSelectors = "a, button, input, select, textarea, .hero-service-col, .project-card, .faq-question, .db-nav-item, .docs-uploader";
  const hoverableElements = document.querySelectorAll(hoverableSelectors);
  
  hoverableElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
}

// Intersection Observer for scroll reveal animations
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// Immersive Page curtain slide transitions (Disabled)
function initPageTransitions() {
  // Disabled per user request to remove page loading and transition.
}
