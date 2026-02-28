(function () {
  'use strict';

  var header = document.querySelector('.header');
  var navLinks = document.querySelector('.nav-links');
  var navToggle = document.querySelector('.nav-toggle');

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  function toggleMenu() {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  }

  function closeMenuOnLinkClick() {
    if (!navLinks || !navToggle) return;
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', toggleMenu);
    closeMenuOnLinkClick();
  }
})();
