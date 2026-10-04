/* Ads Plus+ website interactions — vanilla JS, no dependencies */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Office hours for the footer clock (Cairo time). Edit these to your real hours. */
  var OFFICE = { open: '10:00', close: '18:00', days: [0, 1, 2, 3, 4] }; // 0 = Sunday … 6 = Saturday

  /* Videos: make sure every loop autoplays (muted) */
  $$('video').forEach(function (v) { v.muted = true; var p = v.play && v.play(); if (p && p.catch) p.catch(function () {}); });

  /* Opening intro: skip button */
  var intro = $('.intro');
  var skip = $('[data-skip-intro]');
  if (intro && skip) skip.addEventListener('click', function () { intro.classList.add('gone'); });

  /* Lights on: black & white until the switch or the first scroll */
  var lights = $('.lights'), sw = $('[data-lights-toggle]'), flash = $('[data-if="flash"]');
  var lit = false, autoDone = false, t1, t2;
  function setLights(on) {
    if (!lights) return;
    lit = on; clearTimeout(t1); clearTimeout(t2);
    lights.classList.remove('off', 'on', 'done'); lights.classList.add(on ? 'on' : 'off');
    if (sw) { sw.classList.toggle('on', on); sw.classList.toggle('off', !on); sw.setAttribute('aria-pressed', String(on)); }
    if (on) {
      if (flash) { flash.hidden = true; void flash.offsetWidth; flash.hidden = false; t1 = setTimeout(function () { flash.hidden = true; }, 1400); }
      t2 = setTimeout(function () { lights.classList.remove('on'); lights.classList.add('done'); }, 1700);
    }
  }
  if (sw) sw.addEventListener('click', function () { autoDone = true; setLights(!lit); });

  /* Words build as you scroll */
  var wordsEl = $('[data-words]');
  var words = wordsEl ? $$('.w, .wp', wordsEl) : [];
  function updWords() {
    if (!wordsEl) return;
    var r = wordsEl.getBoundingClientRect(), vh = window.innerHeight || 800;
    var p = Math.max(0, Math.min(1, (vh * 0.92 - r.top) / (vh * 0.5)));
    var n = Math.round(p * words.length);
    words.forEach(function (w, i) { w.classList.toggle('on', i < n); });
  }
  window.addEventListener('scroll', function () {
    if (!autoDone && window.scrollY > 40) { autoDone = true; if (!lit) setLights(true); }
    updWords();
  }, { passive: true });
  window.addEventListener('resize', updWords);
  updWords();

  /* Scrolling story: Understand → Define → Execute */
  var steps = $$('[data-step]');
  if (steps.length && 'IntersectionObserver' in window) {
    var imgs = $$('.story-vis img'), bars = $$('.sprog span'), labs = $$('.slab');
    var setStep = function (s) {
      steps.forEach(function (el, i) { el.classList.toggle('on', i === s); el.classList.toggle('done', i < s); });
      imgs.forEach(function (im, i) { im.classList.toggle('on', i === s); });
      bars.forEach(function (b, i) { b.classList.toggle('on', i <= s); });
      labs.forEach(function (b, i) { b.classList.toggle('on', i <= s); });
    };
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) setStep(steps.indexOf(e.target)); });
    }, { rootMargin: '-42% 0px -42% 0px' });
    steps.forEach(function (s) { io.observe(s); });
  }

  /* Doors menu */
  var DOORS = window.ADSPLUS_DOORS || [];
  var dm = $('.dm');
  if (dm) {
    var act = $('[data-door-panel="active"]'), idle = $('[data-door-panel="idle"]');
    var show = function (i) {
      dm.classList.toggle('active', i >= 0);
      $$('.door', dm).forEach(function (d, k) { d.classList.toggle('on', k === i); });
      $$('.tag', dm).forEach(function (t, k) { t.classList.toggle('on', k === i); });
      $$('.dli').forEach(function (d, k) { d.classList.toggle('on', k === i); });
      if (i >= 0 && DOORS[i] && act) {
        $$('[data-cur]', act).forEach(function (e) { e.textContent = DOORS[i][e.getAttribute('data-cur')]; });
        var a = $('[data-cur-href]', act); if (a) a.setAttribute('href', DOORS[i].href);
        act.hidden = false; if (idle) idle.hidden = true;
      } else { if (act) act.hidden = true; if (idle) idle.hidden = false; }
    };
    $$('[data-door]').forEach(function (el) {
      var i = +el.getAttribute('data-door');
      el.addEventListener('mouseenter', function () { show(i); });
      el.addEventListener('focus', function () { show(i); });
      el.addEventListener('mouseleave', function () { show(-1); });
      el.addEventListener('blur', function () { show(-1); });
    });
  }

  /* Spotlight hero */
  $$('[data-spotlight]').forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', Math.round(e.clientX - r.left) + 'px');
      el.style.setProperty('--my', Math.round(e.clientY - r.top) + 'px');
    });
    el.addEventListener('mouseleave', function () { el.style.removeProperty('--mx'); el.style.removeProperty('--my'); });
  });

  /* Magnetic buttons */
  $$('[data-magnetic]').forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) * 0.28, dy = (e.clientY - (r.top + r.height / 2)) * 0.4;
      el.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
    });
    el.addEventListener('mouseleave', function () { el.style.transform = ''; });
  });

  /* 3D client wall */
  $$('[data-tilt]').forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', ((0.5 - py) * 16).toFixed(2) + 'deg');
      el.style.setProperty('--ry', ((px - 0.5) * 20).toFixed(2) + 'deg');
      el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
    });
    el.addEventListener('mouseleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });

  /* Scrambling headings */
  var CHARS = 'ABCDEFGHJKLMNOPRSTUVWXYZ+++';
  $$('[data-scramble]').forEach(function (host) {
    host.addEventListener('mouseenter', function () {
      var el = /^H[1-3]$/.test(host.tagName) ? host : (host.querySelector('h3, h2') || host);
      if (el._scr) return; el._scr = true;
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), nodes = [], n;
      while ((n = walker.nextNode())) { if (n.nodeValue.trim()) nodes.push([n, n.nodeValue]); }
      var f = 0, total = 14;
      var id = setInterval(function () {
        f += 1;
        nodes.forEach(function (pair) {
          var txt = pair[1], reveal = Math.floor(txt.length * f / total), out = '';
          for (var i = 0; i < txt.length; i++) { var c = txt[i]; out += (i < reveal || c === ' ' || c.charCodeAt(0) === 10) ? c : CHARS[Math.floor(Math.random() * CHARS.length)]; }
          pair[0].nodeValue = out;
        });
        if (f >= total) { clearInterval(id); nodes.forEach(function (pair) { pair[0].nodeValue = pair[1]; }); el._scr = false; }
      }, 32);
    });
  });

  /* Live Cairo time */
  function tick() {
    var tEl = $$('[data-clock-time]'), xEl = $$('[data-clock-text]'), dots = $$('.cdot');
    if (!tEl.length) return;
    try {
      var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: false }).formatToParts(new Date());
      var get = function (t) { for (var i = 0; i < parts.length; i++) if (parts[i].type === t) return parts[i].value; return ''; };
      var hh = (parseInt(get('hour'), 10) || 0) % 24, mm = parseInt(get('minute'), 10) || 0;
      var wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
      var toMin = function (s) { var a = s.split(':'); return (+a[0]) * 60 + (+a[1] || 0); };
      var now = hh * 60 + mm, open = OFFICE.days.indexOf(wd) >= 0 && now >= toMin(OFFICE.open) && now < toMin(OFFICE.close);
      var time = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
      tEl.forEach(function (e) { e.textContent = time; });
      xEl.forEach(function (e) { e.textContent = open ? 'Open now' : 'Closed now · opens ' + OFFICE.open; });
      dots.forEach(function (d) { d.classList.toggle('open', open); });
    } catch (err) {}
  }
  tick(); setInterval(tick, 30000);

  /* Easter egg: click the logo 5 times */
  var egg = $('[data-egg]'), rain = $('[data-if="rain"]'), clicks = [], t3;
  if (egg && rain) egg.addEventListener('click', function () {
    var now = Date.now();
    clicks = clicks.filter(function (t) { return now - t < 2500; }); clicks.push(now);
    if (clicks.length >= 5) {
      clicks = []; rain.hidden = true; void rain.offsetWidth; rain.hidden = false;
      clearTimeout(t3); t3 = setTimeout(function () { rain.hidden = true; }, 5600);
    }
  });
})();
