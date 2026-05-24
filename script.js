/* ===========================================================
   DamuMarket — динамика
   Источник данных — window.DAMU_DATA (data.js).
   =========================================================== */

(function () {
  'use strict';

  var D = window.DAMU_DATA;
  if (!D) { console.error('DAMU_DATA not loaded'); return; }

  // --- WA-ссылка с prefilled текстом ---
  function waLink(text) {
    var base = 'https://wa.me/' + D.contacts.wa_number;
    return text ? base + '?text=' + encodeURIComponent(text) : base;
  }

  // --- Форматирование цены ---
  function fmtPrice(p) {
    return p.toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₸';
  }

  // --- HTML-эскейп для текстовых вставок (защита от XSS, если кто-то поправит data.js руками) ---
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // --- SVG-иконки для trust-bar ---
  var ICONS = {
    doc:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
    truck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 4v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
    stairs:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h4v-4h4v-4h4V9h4V5h2"/></svg>',
    shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v7c0 5 4 9 8 10 4-1 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>'
  };

  // ===========================================================
  // HERO — статистики
  // ===========================================================
  (function renderStats() {
    var el = document.getElementById('hero-stats');
    if (!el) return;
    el.innerHTML = D.stats.map(function (s) {
      return '<li><span class="hero__stat-v">' + esc(s.value) + '</span>' +
             '<span class="hero__stat-l">' + esc(s.label) + '</span></li>';
    }).join('');
  })();

  // ===========================================================
  // TRUST
  // ===========================================================
  (function renderTrust() {
    var el = document.getElementById('trust-grid');
    if (!el) return;
    el.innerHTML = D.trust.map(function (t) {
      return '<li class="trust__item">' +
             '<span class="trust__icon" aria-hidden="true">' + (ICONS[t.icon] || '') + '</span>' +
             '<span class="trust__t">' + esc(t.title) + '</span>' +
             '<span class="trust__d">' + esc(t.text) + '</span>' +
             '</li>';
    }).join('');
  })();

  // ===========================================================
  // CATALOG — категории и позиции
  // ===========================================================
  (function renderCatalog() {
    var el = document.getElementById('catalog-grid');
    if (!el) return;

    el.innerHTML = D.categories.map(function (c, idx) {
      var itemsHtml = c.items.map(function (it, i) {
        var availTag = it.available
          ? '<span class="tag tag--ok">в наличии</span>'
          : '<span class="tag tag--warn">под заказ</span>';
        var waText = 'Здравствуйте! Интересует позиция: «' + it.name + '» (' + c.title + '). ' +
                     'Есть в наличии? Сколько и когда сможете доставить?';
        var search = (it.name + ' ' + it.brand + ' ' + c.title).toLowerCase();
        return '' +
          '<li class="item" data-search="' + esc(search) + '">' +
            '<div class="item__main">' +
              '<div class="item__name">' + esc(it.name) + '</div>' +
              '<div class="item__meta">' +
                (it.brand && it.brand !== '—' ? '<span class="item__brand">' + esc(it.brand) + '</span>' : '') +
                '<span class="item__price">от ' + fmtPrice(it.price_from) + '</span>' +
                availTag +
              '</div>' +
            '</div>' +
            '<a class="item__btn" href="' + waLink(waText) + '" target="_blank" rel="noopener" aria-label="Спросить про ' + esc(it.name) + ' в WhatsApp">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1s-1.3-.5-2.4-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>' +
              '<span>WhatsApp</span>' +
            '</a>' +
          '</li>';
      }).join('');

      // data-search категории — только её собственные поля (без items).
      // Items ищутся независимо: при совпадении в названии позиции — показывается только она.
      var catSearch = (c.title + ' ' + c.description).toLowerCase();
      var catWa = 'Здравствуйте! Хочу узнать наличие и цены в категории «' + c.title + '». Подскажете?';

      return '' +
        '<section class="cat" data-cat="' + esc(c.id) + '" data-search="' + esc(catSearch) + '">' +
          '<button class="cat__head" type="button" aria-expanded="false" data-cat-toggle>' +
            '<div class="cat__img" data-letter="' + esc(c.title.charAt(0).toUpperCase()) + '">' +
              '<img src="' + esc(c.image) + '" alt="' + esc(c.image_alt || c.title) + '" loading="lazy" decoding="async" width="96" height="80" onerror="this.remove()">' +
            '</div>' +
            '<div class="cat__txt">' +
              '<div class="cat__t">' + esc(c.title) + '</div>' +
              '<div class="cat__d">' + esc(c.description) + '</div>' +
              '<span class="cat__count">' + c.items.length + ' популярных позиций</span>' +
            '</div>' +
            '<span class="cat__chev" aria-hidden="true">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
            '</span>' +
          '</button>' +
          '<div class="cat__body">' +
            '<ul class="cat__items">' + itemsHtml + '</ul>' +
            '<div class="cat__footer">' +
              '<p>Нет нужного? Привезём под заказ.</p>' +
              '<a class="btn btn--wa" href="' + waLink(catWa) + '" target="_blank" rel="noopener">Спросить про «' + esc(c.title) + '» в WhatsApp</a>' +
            '</div>' +
          '</div>' +
        '</section>';
    }).join('');

    // Аккордеон
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-cat-toggle]');
      if (!btn) return;
      var cat = btn.closest('.cat');
      var isOpen = cat.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  })();

  // ===========================================================
  // CATALOG SEARCH — клиентский фильтр
  // ===========================================================
  (function setupSearch() {
    var input = document.getElementById('catalog-search');
    var clearBtn = document.getElementById('catalog-search-clear');
    var emptyEl = document.getElementById('catalog-empty');
    var emptyQ = document.getElementById('catalog-empty-query');
    var emptyWa = document.getElementById('catalog-empty-wa');
    if (!input) return;

    var headerInput = document.getElementById('search-input');

    function apply(query) {
      var q = query.trim().toLowerCase();
      var cats = document.querySelectorAll('.cat');
      var visibleCount = 0;

      cats.forEach(function (cat) {
        var catSearch = cat.getAttribute('data-search') || '';
        var items = cat.querySelectorAll('.item');
        var matchedItems = 0;

        if (q === '') {
          // нет запроса — всё видно, всё свёрнуто (если не было раскрыто)
          items.forEach(function (it) { it.classList.remove('is-hidden'); });
          cat.style.display = '';
          cat.classList.remove('is-search-open');
          visibleCount++;
          return;
        }

        var catMatch = catSearch.indexOf(q) !== -1;

        items.forEach(function (it) {
          var s = it.getAttribute('data-search') || '';
          if (s.indexOf(q) !== -1) { it.classList.remove('is-hidden'); matchedItems++; }
          else if (catMatch) { it.classList.remove('is-hidden'); matchedItems++; }
          else { it.classList.add('is-hidden'); }
        });

        if (matchedItems > 0) {
          cat.style.display = '';
          // авторазвёртывание при поиске
          cat.classList.add('is-open', 'is-search-open');
          var btn = cat.querySelector('[data-cat-toggle]');
          if (btn) btn.setAttribute('aria-expanded', 'true');
          visibleCount++;
        } else {
          cat.style.display = 'none';
        }
      });

      // empty state
      if (q !== '' && visibleCount === 0) {
        emptyEl.hidden = false;
        emptyQ.textContent = '«' + query + '»';
        emptyWa.href = waLink('Здравствуйте! Ищу: ' + query + '. У вас есть похожее?');
      } else {
        emptyEl.hidden = true;
      }

      // clear-кнопка
      clearBtn.hidden = q === '';
    }

    input.addEventListener('input', function () { apply(input.value); });
    clearBtn.addEventListener('click', function () {
      input.value = '';
      apply('');
      input.focus();
    });

    // Sync с мобильным sticky search
    if (headerInput) {
      headerInput.addEventListener('input', function () {
        input.value = headerInput.value;
        apply(headerInput.value);
      });
      // если пользователь печатает в каталоге — отразим в шапке
      input.addEventListener('input', function () {
        headerInput.value = input.value;
      });
    }
  })();

  // ===========================================================
  // MOBILE search bar toggle
  // ===========================================================
  (function setupMobileSearch() {
    var openBtn = document.querySelector('.js-search-open');
    var closeBtn = document.querySelector('.js-search-close');
    var bar = document.getElementById('search-bar');
    var input = document.getElementById('search-input');
    if (!openBtn || !bar) return;

    openBtn.addEventListener('click', function () {
      bar.hidden = false;
      setTimeout(function () { input && input.focus(); }, 30);
    });
    if (closeBtn) closeBtn.addEventListener('click', function () {
      bar.hidden = true;
      if (input) { input.value = ''; input.dispatchEvent(new Event('input')); }
    });
  })();

  // ===========================================================
  // STEPS
  // ===========================================================
  (function renderSteps() {
    var el = document.getElementById('steps-list');
    if (!el) return;
    el.innerHTML = D.steps.map(function (s) {
      return '<li class="steps__item">' +
               '<span class="steps__time">' + esc(s.time) + '</span>' +
               '<div class="steps__t">' + esc(s.title) + '</div>' +
               '<p class="steps__d">' + esc(s.text) + '</p>' +
             '</li>';
    }).join('');
  })();

  // ===========================================================
  // BRANDS
  // ===========================================================
  (function renderBrands() {
    var el = document.getElementById('brands-list');
    if (!el) return;
    el.innerHTML = D.brands.map(function (b) {
      return '<li class="brands__item">' + esc(b) + '</li>';
    }).join('');
  })();

  // ===========================================================
  // REVIEWS
  // ===========================================================
  (function renderReviews() {
    var el = document.getElementById('reviews-list');
    if (!el) return;
    el.innerHTML = D.reviews.map(function (r) {
      var initial = (r.name || '?').trim().charAt(0).toUpperCase();
      return '<li class="review">' +
        '<div class="review__head">' +
          '<span class="review__ava" aria-hidden="true">' + esc(initial) + '</span>' +
          '<div>' +
            '<div class="review__name">' + esc(r.name) + '</div>' +
            '<div class="review__role">' + esc(r.role) + '</div>' +
          '</div>' +
        '</div>' +
        '<p class="review__text">' + esc(r.text) + '</p>' +
        '<span class="review__date">' + esc(r.date) + '</span>' +
      '</li>';
    }).join('');
  })();

  // ===========================================================
  // CONTACTS — часы, ссылки, телефон из data.js
  // ===========================================================
  (function renderContacts() {
    // часы
    var hours = document.getElementById('contacts-hours');
    if (hours) {
      hours.innerHTML = D.contacts.hours_lines.map(function (h) {
        return '<li><span>' + esc(h.day) + '</span><span>' + esc(h.time) + '</span></li>';
      }).join('');
    }

    // адрес
    var addr = document.getElementById('contacts-address');
    if (addr) addr.textContent = D.contacts.address;

    // карта
    var mapOpen = document.getElementById('map-open');
    var mapRoute = document.getElementById('map-route');
    if (mapOpen) mapOpen.href = D.contacts.map_url;
    if (mapRoute) mapRoute.href = D.contacts.route_url;

    // реквизиты (если заполнены)
    if (D.contacts.bin)  document.getElementById('legal-bin').textContent  = D.contacts.bin;
    if (D.contacts.iban) document.getElementById('legal-iban').textContent = D.contacts.iban;
    if (D.contacts.bank) document.getElementById('legal-bank').textContent = D.contacts.bank;
  })();

  // ===========================================================
  // FAQ — accordion
  // ===========================================================
  (function renderFaq() {
    var el = document.getElementById('faq-list');
    if (!el) return;
    el.innerHTML = D.faq.map(function (f) {
      return '<li class="faq__item">' +
        '<button class="faq__q" type="button" aria-expanded="false" data-faq-toggle>' +
          '<span>' + esc(f.q) + '</span>' +
          '<span class="faq__chev" aria-hidden="true">+</span>' +
        '</button>' +
        '<div class="faq__a">' + esc(f.a) + '</div>' +
      '</li>';
    }).join('');

    el.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-faq-toggle]');
      if (!btn) return;
      var item = btn.closest('.faq__item');
      var isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  })();

  // ===========================================================
  // Год в футере
  // ===========================================================
  (function () {
    var y = document.getElementById('ftr-year');
    if (y) y.textContent = new Date().getFullYear();
  })();

})();
