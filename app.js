/**
 * Portfolio — Hugo Herrera
 * Scroll reveal + terminal typing animation
 */
(function () {
  'use strict';

  /* ── Scroll reveal ─────────────────────────────────── */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.04) + 's';
    observer.observe(el);
  });

  /* ── Terminal typing animation ─────────────────────── */
  var termText = document.getElementById('term-text');
  if (termText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var full    = termText.dataset.text || '';
    var i       = 0;
    termText.textContent = '';
    var timer = setInterval(function () {
      termText.textContent += full[i];
      i++;
      if (i >= full.length) clearInterval(timer);
    }, 45);
  }

  /* ── Back-to-top button ────────────────────────────── */
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 480) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  }

}());
