// Данные сайта DamuMarket. Меняйте здесь — изменения подхватятся автоматически.
// Подробная инструкция в файле CONTENT.md.

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
    // Реквизиты для безнала — пусто, попросите клиента заполнить
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
  ]
};
