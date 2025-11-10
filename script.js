// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-mode");
  themeToggle.setAttribute("aria-pressed", isLight);
  themeToggle.textContent = isLight ? "🌞" : "🌙";
});

// Update nav links' aria-current dynamically based on scroll position (optional)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.removeAttribute("aria-current");
    if (link.getAttribute("href") === `#${current}`) {
      link.setAttribute("aria-current", "page");
    }
  });
});


// NAV TOGGLE - dropdown under navbar with multiple closing triggers
(function () {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  const navLinks = Array.from(document.querySelectorAll('.nav-list a'));

  if (!hamburger || !navList || !nav) return;

  const openMenu = () => {
    navList.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    navList.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  // Toggle on hamburger click
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('open');
    const expanded = navList.classList.contains('open');
    hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  // Close when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside the nav
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      closeMenu();
    }
  }, { capture: true });

  // Close when focus leaves nav (keyboard users)
  nav.addEventListener('focusout', (event) => {
    // relatedTarget is the element receiving focus; if it's outside nav -> close
    const next = event.relatedTarget;
    if (!next || !nav.contains(next)) {
      // tiny delay to allow clicks on links to register first
      setTimeout(() => {
        if (!nav.contains(document.activeElement)) {
          closeMenu();
        }
      }, 0);
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeMenu();
      hamburger.focus();
    }
  });
})();
