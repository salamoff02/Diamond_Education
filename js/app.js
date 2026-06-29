/* =============================================
   app.js — Diamond Education
   Interactive logic: menu, search wizard, slider, counter, form, floating btn
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile Menu ---- */
  const menuBtn   = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const menuClose = document.getElementById('menuClose');

  if (menuBtn)   menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
  if (menuClose) menuClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileNav.classList.remove('open'))
    );
  }

  /* ---- Search Wizard ---- */
  const selDereje = document.getElementById('selDereje');
  const selDil    = document.getElementById('selDil');
  const selHunar  = document.getElementById('selHunar');
  const step2     = document.getElementById('step2');
  const step3     = document.getElementById('step3');
  const searchBtn = document.getElementById('searchBtn');
  const dot1 = document.getElementById('dot1');
  const dot2 = document.getElementById('dot2');
  const dot3 = document.getElementById('dot3');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');

  if (selDereje) {
    selDereje.addEventListener('change', function () {
      if (this.value) {
        dot1.classList.replace('active','done') || (dot1.classList.remove('active'), dot1.classList.add('done'));
        line1.classList.add('done');
        dot2.classList.add('active');
        step2.classList.add('visible');
        selDil.disabled = false;
      } else {
        dot1.classList.add('active'); dot1.classList.remove('done');
        line1.classList.remove('done');
        dot2.classList.remove('active','done');
        dot3.classList.remove('active','done');
        line2.classList.remove('done');
        step2.classList.remove('visible');
        step3.classList.remove('visible');
        searchBtn.classList.remove('visible');
        selDil.disabled = true; selDil.value = '';
        selHunar.disabled = true; selHunar.value = '';
      }
    });
  }

  if (selDil) {
    selDil.addEventListener('change', function () {
      if (this.value) {
        dot2.classList.remove('active'); dot2.classList.add('done');
        line2.classList.add('done');
        dot3.classList.add('active');
        step3.classList.add('visible');
        selHunar.disabled = false;
      } else {
        dot2.classList.add('active'); dot2.classList.remove('done');
        line2.classList.remove('done');
        dot3.classList.remove('active','done');
        step3.classList.remove('visible');
        searchBtn.classList.remove('visible');
        selHunar.disabled = true; selHunar.value = '';
      }
    });
  }

  if (selHunar) {
    selHunar.addEventListener('change', function () {
      if (this.value) {
        dot3.classList.remove('active'); dot3.classList.add('done');
        searchBtn.classList.add('visible');
      } else {
        dot3.classList.add('active'); dot3.classList.remove('done');
        searchBtn.classList.remove('visible');
      }
    });
  }

  /* ---- Testimonials Slider ---- */
  const track = document.getElementById('tTrack');
  let cur = 0;
  window._sliderCur = 0;

  function getTotal() { return track ? track.children.length : 0; }

  function goTo(i) {
    const total = getTotal();
    if (!total) return;
    cur = (i + total) % total;
    window._sliderCur = cur;
    track.style.transform = `translateX(-${cur * 100}%)`;
  }

  const tPrev = document.getElementById('tPrev');
  const tNext = document.getElementById('tNext');
  if (tPrev) tPrev.addEventListener('click', () => goTo(cur - 1));
  if (tNext) tNext.addEventListener('click', () => goTo(cur + 1));

  let autoSlide = setInterval(() => goTo(cur + 1), 5000);
  if (track) {
    track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.parentElement.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => goTo(cur + 1), 5000);
    });
  }

  /* ---- Counter Animation ---- */
  function animCount(el, target) {
    let v = 0;
    const step = target / 80;
    const timer = setInterval(() => {
      v = Math.min(v + step, target);
      el.textContent = Math.floor(v);
      if (v >= target) clearInterval(timer);
    }, 25);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animCount(e.target, +e.target.dataset.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count').forEach(el => io.observe(el));

  /* ---- Contact Form ---- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('.submit-btn');
      const L = window.LANGS && window.LANGS[window.currentLang || 'tk'];
      btn.dataset.busy = '1';
      btn.innerHTML = `${L ? L.form.submitting : 'Sending...'} <i class="fas fa-spinner fa-spin"></i>`;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = L ? L.form.submitted : 'Sent! ✓';
        btn.style.background = '#16a34a';
        setTimeout(() => {
          btn.innerHTML = `${L ? L.form.submit : 'Send'} &nbsp;<i class="fas fa-paper-plane"></i>`;
          btn.style.background = '';
          btn.disabled = false;
          delete btn.dataset.busy;
          this.reset();
        }, 3000);
      }, 1200);
    });
  }

  /* ---- Floating Button ---- */
  const floatBtn  = document.getElementById('floatBtn');
  const floatOpts = document.getElementById('floatOpts');
  if (floatBtn && floatOpts) {
    floatBtn.addEventListener('click', e => {
      e.stopPropagation();
      floatOpts.classList.toggle('open');
    });
    document.addEventListener('click', () => floatOpts.classList.remove('open'));
  }

  /* ---- Service Worker ---- */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

});
