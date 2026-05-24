// Данные сайта DamuMarket. Меняйте здесь — изменения подхватятся автоматически.
// Подробная инструкция в файле CONTENT.md.
// Раздел ui — тексты интерфейса на двух языках (ru / kz).
// Раздел kz — переводы контента (trust, stats, категории, шаги, отзывы, FAQ).

window.DAMU_DATA = {
  contacts: {
    phone_display: '+7 700 215 28 93',
    phone_tel: '+77002152893',
    wa_number: '77002152893',
    address: 'г. Алматы, ул. Толе би 285',
    hours_short: 'Пн–Сб 9:00–19:00 · Вс 10:00–17:00',
    hours_lines: [
      { day: 'Пн–Сб', time: '9:00 – 19:00' },
      { day: 'Воскресенье', time: '10:00 – 17:00' }
    ],
    email: 'sales@damumarket.kz',
    map_url: 'https://2gis.kz/almaty/search/строительные%20материалы',
    route_url: 'https://2gis.kz/almaty/directions/to/строительные%20материалы',
    bin: '',
    iban: '',
    bank: ''
  },

  trust: [
    { icon: 'doc', title: 'Работаем с ИП и ТОО', text: 'Безнал, договор, ЭСФ за день' },
    { icon: 'truck', title: 'Доставка за 2 часа', text: 'По Алматы, на объект или к подъезду' },
    { icon: 'stairs', title: 'Подъём и разгрузка', text: 'Поднимем на этаж, привезём вовремя' },
    { icon: 'shield', title: 'Возврат 14 дней', text: 'Не подошло — заберём и вернём деньги' }
  ],

  stats: [
    { value: 'с 2008', label: 'года на рынке Алматы' },
    { value: '3 500+', label: 'позиций на складе' },
    { value: '2 часа', label: 'средняя доставка' }
  ],

  categories: [
    {
      id: 'mixes',
      title: 'Сухие смеси',
      description: 'Штукатурки, шпаклёвки, наливные полы, клей для плитки',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Мешки сухих строительных смесей на складе',
      items: [
        { name: 'Штукатурка Knauf Ротбанд 30 кг', brand: 'Knauf', price_from: 5500, available: true },
        { name: 'Шпаклёвка Knauf Финиш ПГ 25 кг', brand: 'Knauf', price_from: 4200, available: true },
        { name: 'Клей плиточный Ceresit CM 11 25 кг', brand: 'Ceresit', price_from: 4800, available: true },
        { name: 'Наливной пол Bergauf Boden 25 кг', brand: 'Bergauf', price_from: 5900, available: true },
        { name: 'Грунтовка Ceresit CT 17 10 л', brand: 'Ceresit', price_from: 7800, available: true },
        { name: 'Штукатурка цементная Геркулес 25 кг', brand: 'Геркулес', price_from: 2300, available: true },
        { name: 'Клей для газоблока Bergauf Block 25 кг', brand: 'Bergauf', price_from: 3400, available: false },
        { name: 'Гидроизоляция Ceresit CR 65 20 кг', brand: 'Ceresit', price_from: 12500, available: true }
      ]
    },
    {
      id: 'drywall',
      title: 'Гипсокартон и профиль',
      description: 'ГКЛ, ГКЛВ, ГКЛО, профили, подвесы, крепёж',
      image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Листы гипсокартона на стеллаже',
      items: [
        { name: 'ГКЛ Knauf 2500×1200×12,5 мм', brand: 'Knauf', price_from: 2700, available: true },
        { name: 'ГКЛВ Knauf влагостойкий 2500×1200×12,5 мм', brand: 'Knauf', price_from: 3600, available: true },
        { name: 'ГКЛО Knauf огнестойкий 2500×1200×12,5 мм', brand: 'Knauf', price_from: 4200, available: false },
        { name: 'Профиль CD-60 направляющий 3 м', brand: 'Knauf', price_from: 1350, available: true },
        { name: 'Профиль UD-27 стартовый 3 м', brand: 'Knauf', price_from: 950, available: true },
        { name: 'Подвес прямой 60×27, упак. 100 шт', brand: 'Knauf', price_from: 4200, available: true },
        { name: 'Лента серпянка 50 мм × 45 м', brand: 'Knauf', price_from: 850, available: true }
      ]
    },
    {
      id: 'paint',
      title: 'Лакокраска',
      description: 'Краски, эмали, лаки, кисти, валики, малярный инструмент',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Палитра красок и кисти',
      items: [
        { name: 'Краска Caparol Samtex 7 матовая 2,5 л', brand: 'Caparol', price_from: 11500, available: true },
        { name: 'Краска Tikkurila Harmony 2,7 л', brand: 'Tikkurila', price_from: 14900, available: true },
        { name: 'Эмаль ПФ-115 белая Лакра 2,7 кг', brand: 'Лакра', price_from: 4800, available: true },
        { name: 'Грунт-эмаль по ржавчине Hammerite 0,75 л', brand: 'Hammerite', price_from: 6900, available: true },
        { name: 'Валик меховой 250 мм + бугель', brand: 'Stayer', price_from: 1400, available: true },
        { name: 'Кисть плоская 75 мм натуральная щетина', brand: 'Stayer', price_from: 950, available: true },
        { name: 'Малярная лента 48 мм × 25 м', brand: 'Зубр', price_from: 480, available: true }
      ]
    },
    {
      id: 'power-tools',
      title: 'Электроинструмент',
      description: 'Дрели, перфораторы, шуруповёрты, болгарки, лобзики',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Электроинструмент: дрель и шуруповёрт',
      items: [
        { name: 'Перфоратор Makita HR2470 780 Вт', brand: 'Makita', price_from: 62000, available: true },
        { name: 'Дрель ударная Bosch GSB 16 RE 750 Вт', brand: 'Bosch', price_from: 38500, available: true },
        { name: 'Шуруповёрт аккум. Makita DF333DWAE 12V', brand: 'Makita', price_from: 49000, available: true },
        { name: 'Болгарка DeWALT DWE4157 125 мм 900 Вт', brand: 'DeWALT', price_from: 41000, available: true },
        { name: 'Лобзик Bosch GST 90 BE 650 Вт', brand: 'Bosch', price_from: 52000, available: false },
        { name: 'Циркулярка Makita HS7601 1200 Вт', brand: 'Makita', price_from: 58000, available: true },
        { name: 'Краскопульт электрический Зубр 350 Вт', brand: 'Зубр', price_from: 12500, available: true }
      ]
    },
    {
      id: 'hand-tools',
      title: 'Ручной инструмент',
      description: 'Молотки, ключи, отвёртки, рулетки, уровни, ножовки',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Ручной слесарный инструмент на верстаке',
      items: [
        { name: 'Молоток слесарный 500 г Stanley', brand: 'Stanley', price_from: 3800, available: true },
        { name: 'Набор отвёрток 6 шт. Stayer SL/PH', brand: 'Stayer', price_from: 4200, available: true },
        { name: 'Рулетка Stanley FatMax 5 м', brand: 'Stanley', price_from: 4900, available: true },
        { name: 'Уровень пузырьковый 1000 мм Зубр', brand: 'Зубр', price_from: 3600, available: true },
        { name: 'Ножовка по дереву 500 мм Stanley', brand: 'Stanley', price_from: 4200, available: true },
        { name: 'Набор ключей рожково-накидных 12 шт.', brand: 'Stayer', price_from: 9800, available: true },
        { name: 'Шпатель нержавеющий 100 мм', brand: 'Зубр', price_from: 650, available: true }
      ]
    },
    {
      id: 'plumbing',
      title: 'Сантехника',
      description: 'Трубы, фитинги, смесители, инсталляции, сифоны',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Сантехнические трубы и фитинги',
      items: [
        { name: 'Труба полипропилен PN20 25 мм, 4 м', brand: 'Valtec', price_from: 1850, available: true },
        { name: 'Уголок PPR 25 мм × 90°', brand: 'Valtec', price_from: 180, available: true },
        { name: 'Смеситель для кухни Gappo G4398', brand: 'Gappo', price_from: 18500, available: true },
        { name: 'Смеситель для ванны Grohe Start', brand: 'Grohe', price_from: 42000, available: true },
        { name: 'Унитаз-компакт Cersanit Parva', brand: 'Cersanit', price_from: 56000, available: true },
        { name: 'Сифон для раковины 1 1/2" с переливом', brand: 'АНИ', price_from: 1900, available: true },
        { name: 'Шланг гибкий 1/2" 60 см нерж.', brand: 'TIM', price_from: 980, available: true }
      ]
    },
    {
      id: 'electrical',
      title: 'Электрика',
      description: 'Кабель, автоматы, розетки, выключатели, светильники',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Электрический кабель и автоматы',
      items: [
        { name: 'Кабель ВВГ-нг 3×2,5 мм², 100 м', brand: 'KazEnergyKabel', price_from: 38000, available: true },
        { name: 'Кабель ВВГ-нг 3×1,5 мм², 100 м', brand: 'KazEnergyKabel', price_from: 26000, available: true },
        { name: 'Автомат IEK ВА47-29 1P 16А', brand: 'IEK', price_from: 850, available: true },
        { name: 'УЗО IEK ВД1-63 2P 32А 30мА', brand: 'IEK', price_from: 4600, available: true },
        { name: 'Розетка Schneider Glossa белая 2P+E', brand: 'Schneider', price_from: 2200, available: true },
        { name: 'Выключатель Schneider Glossa одноклавишный', brand: 'Schneider', price_from: 1850, available: true },
        { name: 'Светильник LED накладной 18 Вт 6500K', brand: 'Эра', price_from: 3400, available: true }
      ]
    },
    {
      id: 'fasteners',
      title: 'Крепёж и расходники',
      description: 'Саморезы, дюбели, анкеры, перчатки, мешки',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=70',
      image_alt: 'Саморезы и крепёжные элементы',
      items: [
        { name: 'Саморез по дереву 3,5×35 мм, упак. 1 кг', brand: 'Зубр', price_from: 1400, available: true },
        { name: 'Саморез по металлу 4,2×16 мм, упак. 1 кг', brand: 'Зубр', price_from: 1800, available: true },
        { name: 'Дюбель-гвоздь 6×40 мм, упак. 100 шт.', brand: 'Stayer', price_from: 950, available: true },
        { name: 'Анкер клиновой 10×100 мм, 50 шт.', brand: 'Sormat', price_from: 7800, available: true },
        { name: 'Перчатки ХБ с ПВХ-точкой, 10 пар', brand: '—', price_from: 1200, available: true },
        { name: 'Мешок строительный 70 л, упак. 100 шт.', brand: '—', price_from: 4500, available: true },
        { name: 'Лента армированная фольга 75 мм × 50 м', brand: 'Tytan', price_from: 2900, available: true }
      ]
    }
  ],

  brands: [
    'Knauf', 'Ceresit', 'Tytan', 'Makita', 'Bosch', 'DeWALT',
    'Tikkurila', 'Caparol', 'Зубр', 'Stayer', 'Schneider', 'IEK'
  ],

  steps: [
    { time: '1 минута', title: 'Напишите в WhatsApp', text: 'Тапните на нужную позицию или просто опишите задачу — мы разберёмся.' },
    { time: '5 минут', title: 'Подтвердим наличие и цену', text: 'Проверим склад, рассчитаем сумму, согласуем удобное время доставки.' },
    { time: '2 часа', title: 'Привезём на объект', text: 'Доставка по Алматы, разгрузка и подъём на этаж по договорённости.' }
  ],

  reviews: [
    {
      name: 'Айдар',
      role: 'Прораб, ремонт квартиры',
      text: 'Заказывал гипсокартон и профиль на объект в Алмалинском районе. Привезли через 1 ч 40 мин, разгрузили на 4 этаж. По цене лучше, чем на Северном кольце.',
      date: 'март 2026'
    },
    {
      name: 'Марина',
      role: 'Делаю ремонт сама',
      text: 'Не разбираюсь в материалах, написала «нужна штукатурка под обои в спальню 18 м²». Подобрали Ротбанд, рассчитали мешки, привезли вместе с грунтовкой. Очень удобно.',
      date: 'февраль 2026'
    },
    {
      name: 'ТОО «Стройуют»',
      role: 'Подрядная организация',
      text: 'Работаем с ребятами третий год. Безнал, ЭСФ всегда вовремя, по сложным позициям подвозят с заводов. На крупные объёмы дают хорошую скидку.',
      date: 'январь 2026'
    }
  ],

  faq: [
    {
      q: 'Доставляете за город?',
      a: 'Да, по области — Талгар, Каскелен, Иссык, Капчагай. Стоимость рассчитываем индивидуально, обычно от 5 000 ₸ в одну сторону.'
    },
    {
      q: 'От какого объёма работаете оптом?',
      a: 'Оптовые цены — от 300 000 ₸ единоразово или от 1 500 000 ₸ в месяц. Для постоянных подрядчиков — отдельные условия и менеджер.'
    },
    {
      q: 'Что с возвратом и браком?',
      a: 'Невскрытые упаковки принимаем обратно в течение 14 дней. Заводской брак меняем сразу, бесплатно. Резаный кабель и колерованную краску вернуть нельзя — это законом.'
    },
    {
      q: 'Можно ли работать по гос. закупкам?',
      a: 'Да, мы зарегистрированы как поставщик в Goszakup.gov.kz. Подаём заявки, отгружаем по договору, закрываем накладными и ЭСФ.'
    }
  ],

  // ============================================================
  // UI — тексты интерфейса на двух языках
  // ============================================================
  ui: {
    ru: {
      site_title: 'DamuMarket — стройматериалы и инструмент в Алматы. Доставка за 2 часа',
      hero_title: 'Стройматериалы и инструмент с доставкой по Алматы за 2 часа',
      hero_sub: 'Более 3 500 позиций на складе. Привезём к подъезду или на объект. Работаем с физлицами, ИП и ТОО.',
      wa_write: 'Написать в WhatsApp',
      catalog_link: 'Каталог ↓',
      catalog_title: 'Каталог',
      catalog_sub: 'Тапните на категорию — раскроется прайс с популярными позициями. На каждой строке — кнопка WhatsApp с уже готовым сообщением.',
      search_placeholder: 'Что ищем? Например: гипсокартон, makita, краска',
      catalog_search_placeholder: 'Поиск по каталогу: бренд, название…',
      items_suffix: 'популярных позиций',
      in_stock: 'в наличии',
      to_order: 'под заказ',
      price_from: 'от ',
      no_item_text: 'Нет нужного? Привезём под заказ.',
      ask_about_pre: 'Спросить про «',
      ask_about_post: '» в WhatsApp',
      not_found_pre: 'По запросу ',
      not_found_post: ' ничего не нашли. Напишите нам — подберём по описанию.',
      ask_in_wa: 'Спросить в WhatsApp',
      steps_title: 'Как заказать',
      steps_sub: 'Три шага. Никаких корзин и регистраций.',
      brands_title: 'Работаем напрямую с производителями',
      reviews_title: 'Что говорят клиенты',
      contacts_title: 'Контакты и адрес',
      contacts_sub: 'Заберите сами или закажите доставку. Показывайте этот экран продавцу — менеджер уже в курсе.',
      label_phone: 'Телефон',
      label_wa: 'WhatsApp',
      label_email: 'Email',
      label_address: 'Адрес',
      label_hours: 'Часы работы',
      call_btn: 'Позвонить',
      map_open: 'Открыть в 2GIS',
      map_route: 'Построить маршрут',
      legal_title: 'Для безналичной оплаты',
      legal_recipient: 'Получатель',
      legal_bin: 'БИН',
      legal_iban: 'IBAN',
      legal_bank: 'Банк',
      legal_name_default: 'ТОО «DamuMarket» — ',
      legal_pending: 'уточняется',
      legal_ask: 'попросите у менеджера',
      legal_hint: 'Договор и счёт на оплату пришлём в WhatsApp или на email в течение часа. ЭСФ оформляем в день отгрузки.',
      faq_title: 'Частые вопросы',
      ftr_about: 'Стройматериалы и инструмент в Алматы. Доставка по городу за 2 часа.',
      ftr_contact: 'Связь',
      ftr_store: 'Магазин',
      ftr_rights: 'Все права защищены.',
      wa_hello: 'Здравствуйте! Хочу уточнить наличие и сделать заказ.',
      wa_order: 'Здравствуйте! Хочу сделать заказ.',
      wa_item_pre: 'Здравствуйте! Интересует позиция: «',
      wa_item_mid: '» (',
      wa_item_post: '). Есть в наличии? Сколько и когда сможете доставить?',
      wa_cat_pre: 'Здравствуйте! Хочу узнать наличие и цены в категории «',
      wa_cat_post: '». Подскажете?',
      wa_search_pre: 'Здравствуйте! Ищу: ',
      wa_search_post: '. У вас есть похожее?'
    },
    kz: {
      site_title: 'DamuMarket — Алматыдағы құрылыс материалдары мен аспаптар. 2 сағатта жеткізу',
      hero_title: 'Алматы бойынша 2 сағатта жеткізумен құрылыс материалдары мен аспаптар',
      hero_sub: 'Қоймада 3 500-ден астам түр. Үйге немесе нысанға жеткіземіз. Жеке тұлғалар, ЖК және ЖШС-мен жұмыс істейміз.',
      wa_write: 'WhatsApp-қа жазу',
      catalog_link: 'Каталог ↓',
      catalog_title: 'Каталог',
      catalog_sub: 'Санатты басыңыз — танымал позициялар прайсы ашылады. Әр жолда — дайын хабарламасы бар WhatsApp түймесі.',
      search_placeholder: 'Не іздейсіз? Мысалы: гипсокартон, makita, бояу',
      catalog_search_placeholder: 'Каталогтан іздеу: бренд, атауы…',
      items_suffix: 'танымал позиция',
      in_stock: 'қоймада бар',
      to_order: 'тапсырыспен',
      price_from: 'бастап ',
      no_item_text: 'Қажетті жоқ па? Тапсырыспен жеткіземіз.',
      ask_about_pre: '«',
      ask_about_post: '» туралы WhatsApp-та сұрау',
      not_found_pre: '«',
      not_found_post: '» сұрауы бойынша ештеңе табылмады. Бізге жазыңыз — сипаттама бойынша таңдаймыз.',
      ask_in_wa: 'WhatsApp-та сұрау',
      steps_title: 'Қалай тапсырыс беруге болады',
      steps_sub: 'Үш қадам. Себеттер мен тіркелу жоқ.',
      brands_title: 'Өндірушілермен тікелей жұмыс істейміз',
      reviews_title: 'Клиенттер не дейді',
      contacts_title: 'Байланыс және мекенжай',
      contacts_sub: 'Өзіңіз алыңыз немесе жеткізуге тапсырыс беріңіз. Бұл экранды сатушыға көрсетіңіз — менеджер хабардар.',
      label_phone: 'Телефон',
      label_wa: 'WhatsApp',
      label_email: 'Email',
      label_address: 'Мекенжай',
      label_hours: 'Жұмыс уақыты',
      call_btn: 'Қоңырау шалу',
      map_open: '2GIS-те ашу',
      map_route: 'Маршрут құру',
      legal_title: 'Қолма-қол емес төлем үшін',
      legal_recipient: 'Алушы',
      legal_bin: 'БСН',
      legal_iban: 'IBAN',
      legal_bank: 'Банк',
      legal_name_default: 'ЖШС «DamuMarket» — ',
      legal_pending: 'нақтыланады',
      legal_ask: 'менеджерден сұраңыз',
      legal_hint: 'Шарт пен төлем шотын WhatsApp немесе email арқылы бір сағат ішінде жібереміз. ЭШФ жөнелту күні рәсімделеді.',
      faq_title: 'Жиі қойылатын сұрақтар',
      ftr_about: 'Алматыдағы құрылыс материалдары мен аспаптар. Қала бойынша 2 сағатта жеткізу.',
      ftr_contact: 'Байланыс',
      ftr_store: 'Дүкен',
      ftr_rights: 'Барлық құқықтар қорғалған.',
      wa_hello: 'Сәлеметсіз бе! Бар-жоғын нақтылап, тапсырыс бергім келеді.',
      wa_order: 'Сәлеметсіз бе! Тапсырыс бергім келеді.',
      wa_item_pre: 'Сәлеметсіз бе! Мына позиция қызықтырады: «',
      wa_item_mid: '» (',
      wa_item_post: '). Қоймада бар ма? Қанша және қашан жеткізе аласыз?',
      wa_cat_pre: 'Сәлеметсіз бе! «',
      wa_cat_post: '» санатындағы бар-жоғы мен бағаларды білгім келеді. Айтып бере аласыз ба?',
      wa_search_pre: 'Сәлеметсіз бе! Іздеп жатырмын: ',
      wa_search_post: '. Сізде ұқсас бар ма?'
    }
  },

  // ============================================================
  // KZ — переводы контента (trust, stats, категории, шаги, отзывы, FAQ)
  // Названия товаров (item.name) не переводятся — это бренды + артикулы,
  // одинаково понятные на обоих языках.
  // ============================================================
  kz: {
    contacts: {
      address: 'Алматы қ., Төле би к. 285',
      hours_lines: [
        { day: 'Дс–Сб', time: '9:00 – 19:00' },
        { day: 'Жексенбі', time: '10:00 – 17:00' }
      ]
    },

    trust: [
      { title: 'ЖК және ЖШС-мен жұмыс', text: 'Қолма-қол емес төлем, шарт, ЭШФ бір күнде' },
      { title: '2 сағатта жеткізу', text: 'Алматы бойынша, нысанға немесе үйге' },
      { title: 'Көтеру және түсіру', text: 'Қабатқа көтереміз, уақытында жеткіземіз' },
      { title: '14 күн қайтару', text: 'Сәйкес келмесе — аламыз, ақшаны қайтарамыз' }
    ],

    stats: [
      { value: '2008 ж.', label: 'Алматы нарығында' },
      { value: '3 500+', label: 'түр қоймада' },
      { value: '2 сағат', label: 'орташа жеткізу' }
    ],

    categories: {
      'mixes':       { title: 'Құрғақ қоспалар',           description: 'Сылақ, шпатлёвка, құйма еден, плитка желімі' },
      'drywall':     { title: 'Гипсокартон және профиль',  description: 'ГКП, ГКПС, ГКПО, профильдер, ілгіштер, бекіткіштер' },
      'paint':       { title: 'Бояу-лак',                  description: 'Бояулар, эмальдар, лактар, щёткалар, валиктер, маляр аспаптары' },
      'power-tools': { title: 'Электр аспаптар',           description: 'Бұрғылар, перфораторлар, бұрағыштар, кескіштер, лобзиктер' },
      'hand-tools':  { title: 'Қол аспаптары',             description: 'Балғалар, кілттер, бұрағыштар, рулеткалар, деңгейлер, аралар' },
      'plumbing':    { title: 'Сантехника',                description: 'Құбырлар, фитингтер, араластырғыштар, сифондар' },
      'electrical':  { title: 'Электрика',                 description: 'Кабель, автоматтар, розеткалар, ажыратқыштар, жарықтандырғыштар' },
      'fasteners':   { title: 'Бекіткіштер мен шығындар',  description: 'Бұрандалар, дюбельдер, анкерлер, қолғаптар, қаптар' }
    },

    steps: [
      { time: '1 минут',  title: 'WhatsApp-қа жазыңыз',                 text: 'Қажетті позицияны басыңыз немесе тапсырманы сипаттаңыз — біз шешеміз.' },
      { time: '5 минут',  title: 'Бар-жоғын және бағасын растаймыз',     text: 'Қойманы тексереміз, соманы есептейміз, жеткізу уақытын келісеміз.' },
      { time: '2 сағат',  title: 'Нысанға жеткіземіз',                   text: 'Алматы бойынша жеткізу, түсіру және қабатқа көтеру келісім бойынша.' }
    ],

    reviews: [
      {
        name: 'Айдар',
        role: 'Прораб, пәтер жөндеу',
        text: 'Алмалы ауданындағы нысанға гипсокартон мен профиль тапсырыс бердім. 1 сағат 40 минутта жеткізді, 4-қабатқа көтерді. Бағасы Солтүстік шеңберге қарағанда жақсы.',
        date: 'наурыз 2026'
      },
      {
        name: 'Марина',
        role: 'Өзім жөндеп жатырмын',
        text: 'Материалдарды білмеймін, «жатын бөлмеге 18 м² сылақ керек» деп жаздым. Ротбанд таңдап берді, қаптарды есептеді, грунтовкамен бірге жеткізді. Өте ыңғайлы.',
        date: 'ақпан 2026'
      },
      {
        name: 'ЖШС «Стройуют»',
        role: 'Мердігерлік ұйым',
        text: 'Балалармен үшінші жыл жұмыс істейміз. Қолма-қол емес, ЭШФ әрқашан уақытында, күрделі позициялар бойынша зауыттардан әкеліп береді. Үлкен көлемдерге жақсы жеңілдік.',
        date: 'қаңтар 2026'
      }
    ],

    faq: [
      {
        q: 'Қала сыртына жеткізесіздер ме?',
        a: 'Иә, облыс бойынша — Талғар, Қаскелең, Есік, Қапшағай. Құнын жеке есептейміз, әдетте бір бағытқа 5 000 ₸-ден.'
      },
      {
        q: 'Қандай көлемнен бастап көтерме?',
        a: 'Көтерме бағалар — бір реттік 300 000 ₸-ден немесе айына 1 500 000 ₸-ден. Тұрақты мердігерлерге — жеке шарттар мен менеджер.'
      },
      {
        q: 'Қайтару және ақаулы тауар жайлы не айтасыз?',
        a: 'Ашылмаған қаптамаларды 14 күн ішінде қабылдаймыз. Зауыттық ақауды бірден ауыстырамыз, тегін. Кесілген кабель мен боялған бояуды қайтаруға болмайды — бұл заңмен.'
      },
      {
        q: 'Мемлекеттік сатып алу бойынша жұмыс істейсіздер ме?',
        a: 'Иә, біз Goszakup.gov.kz-де жеткізуші ретінде тіркелгенбіз. Өтінім береміз, шарт бойынша жөнелтеміз, жүкқұжаттар мен ЭШФ-мен жабамыз.'
      }
    ]
  }
};
