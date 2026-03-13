/**
 * Shroom Chic Creations — Shopify Theme JavaScript
 */
(function() {
  'use strict';

  /* ============================================
     MOBILE MENU TOGGLE
     ============================================ */
  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.mobile-toggle');
    var menu = document.querySelector('.mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        menu.classList.toggle('is-open');
        var icon = toggle.querySelector('.icon-menu');
        var close = toggle.querySelector('.icon-close');
        if (icon && close) {
          icon.style.display = menu.classList.contains('is-open') ? 'none' : 'block';
          close.style.display = menu.classList.contains('is-open') ? 'block' : 'none';
        }
      });
      // Close menu on link click
      menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          menu.classList.remove('is-open');
        });
      });
    }
  });

  /* ============================================
     ANIMATED BACKGROUND PARTICLES
     ============================================ */
  function initAnimatedBackground() {
    var container = document.querySelector('.animated-bg');
    if (!container) return;
    var density = parseInt(container.dataset.density || '50', 10) / 100;

    // Mushroom emoji particles
    var shroomCount = Math.max(3, Math.round(density * 15));
    for (var i = 0; i < shroomCount; i++) {
      var shroom = document.createElement('div');
      shroom.className = 'mushroom-particle';
      shroom.textContent = '🍄';
      shroom.style.top = (Math.random() * 100) + '%';
      shroom.style.left = (Math.random() * 100) + '%';
      shroom.style.setProperty('--duration', (Math.random() * 10 + 15) + 's');
      shroom.style.setProperty('--delay', (Math.random() * 5) + 's');
      shroom.style.filter = 'drop-shadow(0 0 8px rgba(168,85,247,0.5))';
      container.appendChild(shroom);
    }

    // Glow orbs
    var orbCount = Math.max(2, Math.round(density * 5));
    var orbColors = ['#8B5A2B', '#556B2F', 'rgba(168,85,247,0.6)'];
    for (var j = 0; j < orbCount; j++) {
      var orb = document.createElement('div');
      orb.className = 'glow-orb';
      var size = Math.random() * 300 + 100;
      orb.style.width = size + 'px';
      orb.style.height = size + 'px';
      orb.style.top = (Math.random() * 100) + '%';
      orb.style.left = (Math.random() * 100) + '%';
      orb.style.background = orbColors[j % orbColors.length];
      orb.style.setProperty('--duration', (Math.random() * 10 + 10) + 's');
      container.appendChild(orb);
    }
  }
  document.addEventListener('DOMContentLoaded', initAnimatedBackground);

  /* ============================================
     COUNTDOWN TIMER
     ============================================ */
  function initCountdown() {
    var el = document.querySelector('[data-countdown]');
    if (!el) return;
    var dropDate = new Date(el.dataset.countdown).getTime();
    if (isNaN(dropDate)) {
      // Default: 3 days from now
      dropDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
    }

    var days = el.querySelector('[data-days]');
    var hours = el.querySelector('[data-hours]');
    var mins = el.querySelector('[data-minutes]');
    var secs = el.querySelector('[data-seconds]');

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function update() {
      var now = Date.now();
      var distance = dropDate - now;
      if (distance < 0) {
        if (days) days.textContent = '00';
        if (hours) hours.textContent = '00';
        if (mins) mins.textContent = '00';
        if (secs) secs.textContent = '00';
        return;
      }
      if (days) days.textContent = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
      if (hours) hours.textContent = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      if (mins) mins.textContent = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      if (secs) secs.textContent = pad(Math.floor((distance % (1000 * 60)) / 1000));
    }

    update();
    setInterval(update, 1000);
  }
  document.addEventListener('DOMContentLoaded', initCountdown);

  /* ============================================
     SCROLL-TRIGGERED ANIMATIONS
     ============================================ */
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.fade-in-up, .fade-in');
    if (!elements.length || !('IntersectionObserver' in window)) {
      // Fallback: show all
      elements.forEach(function(el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(function(el) { observer.observe(el); });
  }
  document.addEventListener('DOMContentLoaded', initScrollAnimations);

  /* ============================================
     PRODUCT VARIANT SELECTOR
     ============================================ */
  function initVariantSelector() {
    var form = document.querySelector('.product-form');
    if (!form) return;
    var variantInput = form.querySelector('input[name="id"]');
    var variantsJson = form.dataset.variants;
    if (!variantsJson) return;

    var variants;
    try { variants = JSON.parse(variantsJson); } catch(e) { return; }

    form.querySelectorAll('.variant-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var group = btn.dataset.group; // 'size' or 'color'
        var value = btn.dataset.value;

        // Update active state
        form.querySelectorAll('.variant-btn[data-group="' + group + '"]').forEach(function(b) {
          b.classList.remove('active-size', 'active-color');
        });
        btn.classList.add(group === 'size' ? 'active-size' : 'active-color');

        // Find matching variant
        var selectedSize = form.querySelector('.variant-btn.active-size');
        var selectedColor = form.querySelector('.variant-btn.active-color');
        if (selectedSize && selectedColor) {
          var match = variants.find(function(v) {
            return v.option1 === selectedSize.dataset.value &&
                   v.option2 === selectedColor.dataset.value;
          });
          if (match && variantInput) {
            variantInput.value = match.id;
          }
        }
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initVariantSelector);

  /* ============================================
     QUANTITY SELECTOR
     ============================================ */
  document.addEventListener('click', function(e) {
    if (e.target.closest('.qty-btn')) {
      var btn = e.target.closest('.qty-btn');
      var selector = btn.closest('.qty-selector');
      var input = selector.querySelector('.qty-value');
      var hiddenInput = selector.querySelector('input[name="quantity"]');
      var current = parseInt(input.textContent || '1', 10);
      if (btn.dataset.action === 'decrease') {
        current = Math.max(1, current - 1);
      } else {
        current = current + 1;
      }
      input.textContent = current;
      if (hiddenInput) hiddenInput.value = current;
    }
  });

})();
