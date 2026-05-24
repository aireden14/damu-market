/* ===========================================================
   DamuMarket — динамика + i18n (RU / KZ)
   Источник данных — window.DAMU_DATA (data.js).
   =========================================================== */

(function () {
  'use strict';

  var D = window.DAMU_DATA;
  if (!D) { console.error('DAMU_DATA not loaded'); return; }

  // --- Текущий язык (ru | kz), хранится в localStorage ---
  var LANG = localStorage.getItem('damu-lang') || 'ru';

  // --- UI-строка по ключу на текущем языке ---
  function t(key) {
    if (D.ui && D.ui[LANG] && D.ui[LANG][key] != null) return D.ui[LANG][key];
    if (D.ui && D.ui.ru  && D.ui.ru[key]  != null) return D.ui.ru[key];
    return key;
  }

  // --- Перевод массива данных (trust, stats, steps, reviews, faq) ---
  // Возвращает поле KZ-перевода, если язык = kz и перевод есть; иначе — оригинал.
  function td(section, index, field) {
    if (LANG === 'kz' && D.kz && D.kz[section] && D.kz[section][index]) {
      var v = D.kz[section][index][field];
      if (v != null) return v;
    }
    return D[section][index][field];
  }

  // --- Перевод категории по id ---
  function tCat(catId, field) {
    if (LANG === 'kz' && D.kz && D.kz.categories && D.kz.categories[catId]) {
      var v = D.kz.categories[catId][field];
      if (v != null) return v;
    }
    return null; // caller must fall back
  }

  // --- WA-ссылка с prefilled текстом ---
  function waLink(text) {
    var base = 'https://wa.me/' + D.contacts.wa_number;
    return text ? base + '?text=' + encodeURIComponent(text) : base;
  }

  // --- Форматирование цены ---
  function fmtPrice(p) {
    return p.toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₸';
  }

  // --- HTML-эскейп ---
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
  // RENDER FUNCTIONS (re-callable for language switch)
  // ===========================================================

  function renderStats() {
    var el = document.getElementById('hero-stats');
    if (!el) return;
    el.innerHTML = D.stats.map(function (s, i) {
      return '<li><span class="hero__stat-v">' + esc(td('stats', i, 'value')) + '</span>' +
             '<span class="hero__stat-l">' + esc(td('stats', i, 'label')) + '</span></li>';
    }).join('');
  }

  function renderTrust() {
    var el = document.getElementById('trust-grid');
    if (!el) return;
    el.innerHTML = D.trust.map(function (item, i) {
      return '<li class="trust__item">' +
             '<span class="trust__icon" aria-hidden="true">' + (ICONS[item.icon] || '') + '</span>' +
             '<span class="trust__t">' + esc(td('trust', i, 'title')) + '</span>' +
             '<span class="trust__d">' + esc(td('trust', i, 'text')) + '</span>' +
             '</li>';
    }).join('');
  }

  function renderCatalog() {
    var el = document.getElementById('catalog-grid');
    if (!el) return;

    el.innerHTML = D.categories.map(function (c) {
      var catTitle = tCat(c.id, 'title') || c.title;
      var catDesc  = tCat(c.id, 'description') || c.description;

      var itemsHtml = c.items.map(function (it) {
        var availTag = it.available
          ? '<span class="tag tag--ok">' + esc(t('in_stock')) + '</span>'
          : '<span class="tag tag--warn">' + esc(t('to_order')) + '</span>';
        var waText = t('wa_item_pre') + it.name + t('wa_item_mid') + catTitle + t('wa_item_post');
        var search = (it.name + ' ' + it.brand + ' ' + catTitle + ' ' + c.title).toLowerCase();
        return '' +
          '<li class="item" data-search="' + esc(search) + '">' +
            '<div class="item__main">' +
              '<div class="item__name">' + esc(it.name) + '</div>' +
              '<div class="item__meta">' +
                (it.brand && it.brand !== '—' ? '<span class="item__brand">' + esc(it.brand) + '</span>' : '') +
                '<span class="item__price">' + esc(t('price_from')) + fmtPrice(it.price_from) + '</span>' +
                availTag +
              '</div>' +
            '</div>' +
            '<a class="item__btn" href="' + waLink(waText) + '" target="_blank" rel="noopener" aria-label="' + esc(it.name) + ' — WhatsApp">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1s-1.3-.5-2.4-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>' +
              '<span>WhatsApp</span>' +
            '</a>' +
          '</li>';
      }).join('');

      var catSearch = (catTitle + ' ' + catDesc + ' ' + c.title + ' ' + c.description).toLowerCase();
      var catWa = t('wa_cat_pre') + catTitle + t('wa_cat_post');

      return '' +
        '<section class="cat" data-cat="' + esc(c.id) + '" data-search="' + esc(catSearch) + '">' +
          '<button class="cat__head" type="button" aria-expanded="false" data-cat-toggle>' +
            '<div class="cat__img" data-letter="' + esc(catTitle.charAt(0).toUpperCase()) + '">' +
              '<img src="' + esc(c.image) + '" alt="' + esc(c.image_alt || catTitle) + '" loading="lazy" decoding="async" width="96" height="80" onerror="this.remove()">' +
            '</div>' +
            '<div class="cat__txt">' +
              '<div class="cat__t">' + esc(catTitle) + '</div>' +
              '<div class="cat__d">' + esc(catDesc) + '</div>' +
              '<span class="cat__count">' + c.items.length + ' ' + esc(t('items_suffix')) + '</span>' +
            '</div>' +
            '<span class="cat__chev" aria-hidden="true">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
            '</span>' +
          '</button>' +
          '<div class="cat__body">' +
            '<ul class="cat__items">' + itemsHtml + '</ul>' +
            '<div class="cat__footer">' +
              '<p>' + esc(t('no_item_text')) + '</p>' +
              '<a class="btn btn--wa" href="' + waLink(catWa) + '" target="_blank" rel="noopener">' + esc(t('ask_about_pre')) + esc(catTitle) + esc(t('ask_about_post')) + '</a>' +
            '</div>' +
          '</div>' +
        '</section>';
    }).join('');
  }

  function renderSteps() {
    var el = document.getElementById('steps-list');
    if (!el) return;
    el.innerHTML = D.steps.map(function (s, i) {
      return '<li class="steps__item">' +
               '<span class="steps__time">' + esc(td('steps', i, 'time')) + '</span>' +
               '<div class="steps__t">' + esc(td('steps', i, 'title')) + '</div>' +
               '<p class="steps__d">' + esc(td('steps', i, 'text')) + '</p>' +
             '</li>';
    }).join('');
  }

  function renderBrands() {
    var el = document.getElementById('brands-list');
    if (!el) return;
    el.innerHTML = D.brands.map(function (b) {
      return '<li class="brands__item">' + esc(b) + '</li>';
    }).join('');
  }

  function renderReviews() {
    var el = document.getElementById('reviews-list');
    if (!el) return;
    var reviews = D.reviews;
    el.innerHTML = reviews.map(function (r, i) {
      var name = td('reviews', i, 'name');
      var role = td('reviews', i, 'role');
      var text = td('reviews', i, 'text');
      var date = td('reviews', i, 'date');
      var initial = (name || '?').trim().charAt(0).toUpperCase();
      return '<li class="review">' +
        '<div class="review__head">' +
          '<span class="review__ava" aria-hidden="true">' + esc(initial) + '</span>' +
          '<div>' +
            '<div class="review__name">' + esc(name) + '</div>' +
            '<div class="review__role">' + esc(role) + '</div>' +
          '</div>' +
        '</div>' +
        '<p class="review__text">' + esc(text) + '</p>' +
        '<span class="review__date">' + esc(date) + '</span>' +
      '</li>';
    }).join('');
  }

  function renderContacts() {
    // Address
    var addr = document.getElementById('contacts-address');
    if (addr) {
      if (LANG === 'kz' && D.kz && D.kz.contacts && D.kz.contacts.address) {
        addr.textContent = D.kz.contacts.address;
      } else {
        addr.textContent = D.contacts.address;
      }
    }

    // Hours
    var hours = document.getElementById('contacts-hours');
    if (hours) {
      var lines = (LANG === 'kz' && D.kz && D.kz.contacts && D.kz.contacts.hours_lines)
        ? D.kz.contacts.hours_lines : D.contacts.hours_lines;
      hours.innerHTML = lines.map(function (h) {
        return '<li><span>' + esc(h.day) + '</span><span>' + esc(h.time) + '</span></li>';
      }).join('');
    }

    // Map links
    var mapOpen = document.getElementById('map-open');
    var mapRoute = document.getElementById('map-route');
    if (mapOpen) mapOpen.href = D.contacts.map_url;
    if (mapRoute) mapRoute.href = D.contacts.route_url;

    // Map SVG address text
    var mapText = document.getElementById('map-address-text');
    if (mapText) {
      if (LANG === 'kz' && D.kz && D.kz.contacts && D.kz.contacts.address) {
        mapText.textContent = D.kz.contacts.address.replace(/^.*?,\s*/, '');
      } else {
        mapText.textContent = 'ул. Толе би 285';
      }
    }

    // Legal
    var legalName = document.getElementById('legal-name');
    var legalBin  = document.getElementById('legal-bin');
    var legalIban = document.getElementById('legal-iban');
    var legalBank = document.getElementById('legal-bank');

    if (legalName) legalName.innerHTML = esc(t('legal_name_default')) + (D.contacts.bin ? '' : '<em>' + esc(t('legal_pending')) + '</em>');
    if (legalBin)  legalBin.innerHTML  = D.contacts.bin  ? esc(D.contacts.bin)  : '— <em>' + esc(t('legal_ask')) + '</em>';
    if (legalIban) legalIban.innerHTML = D.contacts.iban ? esc(D.contacts.iban) : '— <em>' + esc(t('legal_ask')) + '</em>';
    if (legalBank) legalBank.innerHTML = D.contacts.bank ? esc(D.contacts.bank) : '— <em>' + esc(t('legal_ask')) + '</em>';

    // WA links with localized prefilled text
    var heroWa = document.getElementById('hero-wa');
    if (heroWa) heroWa.href = waLink(t('wa_hello'));

    var contactsWa = document.getElementById('contacts-wa');
    if (contactsWa) contactsWa.href = waLink(t('wa_order'));

    var bottomWa = document.getElementById('bottom-wa');
    if (bottomWa) bottomWa.href = waLink(t('wa_order'));

    // Footer store info
    var ftrAddr = document.getElementById('ftr-address');
    var ftrH1   = document.getElementById('ftr-hours-1');
    var ftrH2   = document.getElementById('ftr-hours-2');
    if (ftrAddr) {
      if (LANG === 'kz' && D.kz && D.kz.contacts && D.kz.contacts.address) {
        ftrAddr.textContent = D.kz.contacts.address;
      } else {
        ftrAddr.textContent = 'ул. Толе би 285, Алматы';
      }
    }
    if (ftrH1 && ftrH2) {
      var hl = (LANG === 'kz' && D.kz && D.kz.contacts && D.kz.contacts.hours_lines)
        ? D.kz.contacts.hours_lines : D.contacts.hours_lines;
      if (hl[0]) ftrH1.textContent = hl[0].day + ': ' + hl[0].time;
      if (hl[1]) ftrH2.textContent = hl[1].day + ': ' + hl[1].time;
    }
  }

  function renderFaq() {
    var el = document.getElementById('faq-list');
    if (!el) return;
    var faq = D.faq;
    el.innerHTML = faq.map(function (f, i) {
      return '<li class="faq__item">' +
        '<button class="faq__q" type="button" aria-expanded="false" data-faq-toggle>' +
          '<span>' + esc(td('faq', i, 'q')) + '</span>' +
          '<span class="faq__chev" aria-hidden="true">+</span>' +
        '</button>' +
        '<div class="faq__a">' + esc(td('faq', i, 'a')) + '</div>' +
      '</li>';
    }).join('');
  }

  // ===========================================================
  // i18n — обновить текст в data-i18n элементах
  // ===========================================================
  function applyI18n() {
    // HTML lang
    document.documentElement.lang = LANG === 'kz' ? 'kk' : 'ru';

    // Page title
    document.title = t('site_title');

    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    // data-i18n-placeholder → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    // Toggle active state
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === LANG;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  // ===========================================================
  // RENDER ALL — вызывается при инициализации и при смене языка
  // ===========================================================
  function renderAll() {
    renderStats();
    renderTrust();
    renderCatalog();
    renderSteps();
    renderBrands();
    renderReviews();
    renderContacts();
    renderFaq();
    applyI18n();
  }

  // --- Первоначальный рендер ---
  renderAll();

  // ===========================================================
  // CATALOG — аккордеон (делегирование на контейнер, один раз)
  // ===========================================================
  (function () {
    var el = document.getElementById('catalog-grid');
    if (!el) return;
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
          cat.classList.add('is-open', 'is-search-open');
          var btn = cat.querySelector('[data-cat-toggle]');
          if (btn) btn.setAttribute('aria-expanded', 'true');
          visibleCount++;
        } else {
          cat.style.display = 'none';
        }
      });

      if (q !== '' && visibleCount === 0) {
        emptyEl.hidden = false;
        emptyQ.textContent = '«' + query + '»';
        emptyWa.href = waLink(t('wa_search_pre') + query + t('wa_search_post'));
      } else {
        emptyEl.hidden = true;
      }

      clearBtn.hidden = q === '';
    }

    input.addEventListener('input', function () { apply(input.value); });
    clearBtn.addEventListener('click', function () {
      input.value = '';
      apply('');
      input.focus();
    });

    if (headerInput) {
      headerInput.addEventListener('input', function () {
        input.value = headerInput.value;
        apply(headerInput.value);
      });
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
  // FAQ — аккордеон (делегирование, один раз)
  // ===========================================================
  (function () {
    var el = document.getElementById('faq-list');
    if (!el) return;
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-faq-toggle]');
      if (!btn) return;
      var item = btn.closest('.faq__item');
      var isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  })();

  // ===========================================================
  // LANGUAGE TOGGLE — переключение RU / KZ
  // ===========================================================
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-toggle__btn');
    if (!btn) return;
    var newLang = btn.getAttribute('data-lang');
    if (newLang === LANG) return;
    LANG = newLang;
    localStorage.setItem('damu-lang', LANG);
    renderAll();
    // Clear search on language switch
    var searchInput = document.getElementById('catalog-search');
    var headerInput = document.getElementById('search-input');
    if (searchInput) { searchInput.value = ''; searchInput.dispatchEvent(new Event('input')); }
    if (headerInput) headerInput.value = '';
  });

  // ===========================================================
  // Footer year
  // ===========================================================
  (function () {
    var y = document.getElementById('ftr-year');
    if (y) y.textContent = new Date().getFullYear();
  })();

})();
