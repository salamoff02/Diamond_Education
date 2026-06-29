/* =============================================
   i18n.js — Diamond Education
   5 Language support: Turkmen, English, Russian, Turkish, Chinese
   ============================================= */

const LANGS = {

  /* ==================== TÜRKMEN ==================== */
  tk: {
    langName: 'Türkmen',
    langFlag: '🇹🇲',
    dir: 'ltr',
    meta: {
      title: 'Diamond Education | Türkiýede bilim boýunça hünärmenler',
      description: 'Türkiýede okamagy üçin halkara talyplar üçin ýöriteleşdirilen ilkinji saýt.'
    },
    topbar: { becomeAgent: 'Biziň agentimiz boluň' },
    nav: {
      home: 'Baş sahypa',
      universities: 'Uniwersitetler',
      schools: 'Biziň mekdeplerimiz',
      services: 'Hyzmatlar',
      servicesMenu: {
        general: 'Umumy hyzmatlarymyz',
        uniEquiv: 'Türkiýede uniwersitet şahadatnamasynyň deňeçerligi',
        schoolEquiv: 'Türkiýede orta mekdep şahadatnamasynyň deňeçerligi',
        housing: 'Talyp ýaşaýyş jaýy',
        turkish: 'Türk dilini öwrenmek'
      },
      about: 'Biz hakda',
      contact: 'Habarlaşyň'
    },
    hero: {
      title: 'Türkiýede okamagy üçin siziň ilkinji bilim maslahatçyňyz',
      sub: 'Türkiýede halkara talyplar üçin ýöriteleşdirilen ilkinji saýt.'
    },
    search: {
      title: 'Isleýän hünäriňizi tapyň',
      step1Label: '1-nji ädim: Dereje saýlaň',
      step1Ph: 'Isleýän derejeňizi saýlaň',
      bachelor: 'Bakalawr', master: 'Magistr', phd: 'Doktorantura', vocational: 'Orta hünär',
      step2Label: '2-nji ädim: Dil saýlaň',
      step2Ph: 'Okuw dilini saýlaň',
      langEn: 'Iňlis dili', langTr: 'Türk dili', langAr: 'Arap dili',
      step3Label: '3-nji ädim: Hünär saýlaň',
      step3Ph: 'Isleýän hünäriňizi saýlaň',
      medicine: 'Lukmançylyk', engineering: 'Inženerlik', business: 'Işewürlik',
      law: 'Hukuk', architecture: 'Binagärlik', cs: 'Kompýuter ylymy', psychology: 'Psihologiýa',
      btn: 'Gözle'
    },
    stats: {
      admissions: 'uniwersitet kabul etme',
      experience: 'ýyl tejribe',
      advisors: 'akademik maslahatçylar',
      universities: 'hususy uniwersitetler'
    },
    about: { title: 'Diamond Education hakda' },
    services: [
      { title: 'Türk uniwersitetlerinde okamagy barada mugt maslahat', desc: '70-den gowrak hünärli bilim maslahatçymyzdan ybarat işgärlerimiz Türk uniwersitetlerinde okamagy we Türkiýede ýaşamagy baradaky ähli maglumatlary berýär.' },
      { title: 'Degişli hünäri saýlamak barada maslahat', desc: 'Talyby tanaýandan soň, maslahatçylarymyz iň amatly hünärleri maslahat berýär.' },
      { title: 'Talyplar üçin dogry uniwersiteti saýlamaga kömek', desc: 'Bilim maslahatçymyz islenilýän hünärleri öwredýän uniwersitetleriň iň gowy wariantlaryny teklip eder.' },
      { title: 'Mugt uniwersitet kabul etmesini almak', desc: 'Islenilýän uniwersitetden kabul etme almak üçin ähli proseduralarny doly mugt ýerine ýetirýäris.' },
      { title: 'Talyp ýaşaýyş jaýy üpjün etmek', desc: 'Ýöriteleşdirilen toparymyz ýaşaýyş jaýy wariantlaryny teklip edýär we talyplar üçin ýer bron etmäge kömek edýär.' },
      { title: 'Talyp ýaşaýyş rugsatnamasy', desc: 'Hukuk departamentimiz Türk hukukyna ýöriteleşen bolup, ýaşaýyş resminamalarynyň kämil derejede tertibini üpjün edýär.' },
      { title: 'Şahadatnamalar we derejeler üçin deňeçerlik almak', desc: 'Türkiýeden daşarda berlen orta ýa-da uniwersitet şahadatnamalarynyň deňeçerligini almaga talyplar kömek edýäris.' },
      { title: 'Saglyk ätiýaçlandyrmasyny almak', desc: 'Toparymyz talyplar üçin okuw döwründe elýeterli nyrhlarda saglyk ätiýaçlandyrmasyny almaga kömek edýär.' },
      { title: 'Talyp bank hasabyny açmak', desc: 'Soňky bellige alnandan soň, toparymyz talyplar üçin zerurlyklaryna laýyk bank hasaplaryny açmaga kömek edýär.' },
      { title: 'Kasam bilen tassyklanan terjime', desc: 'Hünärmen terjimeçilerimiz ýöriteleşdirilen terjime hyzmatlaryny berýär we resminamalary Türk notariusy bilen tassyklaýar.' },
      { title: 'Ulag we garşylamak hyzmatlary', desc: 'Diamond Education Türkiýä gelen talyplar üçin howa menziline garşylamak hyzmatyny hödürleýär.' },
      { title: 'Arap we halkara mekdeplere bellige almak', desc: 'United iň gowy Arap we halkara mekdeplerde talyplar üçin bellige almak hyzmatlaryny üpjün edýär.' }
    ],
    howStart: {
      title: 'Türkiýede okamagy nädip başlaryn?',
      desc: 'Dogry hünäri we uniwersiteti saýlamakdan başlap, bellige almagy tamamlamaga, ýaşaýyş jaýy üpjün etmäge we Türkiýedäki ýaşaýşa uýgunlaşmaga çenli akademik ýoluňyzyň her ädiminde size gollanma berýäris.',
      btn: 'Koprak oka'
    },
    unis: {
      title: 'Hyzmatdaş Uniwersitetler',
      showAll: 'Ähli uniwersitetleri görkeziň',
      list: [
        { name: 'Istanbul Aydın Uniwersiteti', location: 'Türkiýe — Stambul' },
        { name: 'Nişantaşı Uniwersiteti', location: 'Türkiýe — Stambul' },
        { name: 'Bahçeşehir Uniwersiteti', location: 'Türkiýe — Stambul' },
        { name: 'Stambul Söwda Uniwersiteti', location: 'Türkiýe — Stambul' },
        { name: 'Yeditepe Uniwersiteti', location: 'Türkiýe — Stambul' },
        { name: 'Gündogar Ortaýer Deňzi Uniwersiteti', location: 'Demirgazyk Kipr' }
      ]
    },
    consult: {
      title: 'Häzir wideo jaň arkaly maslahatyňyzy bron ediň!',
      desc: 'Öýüňiziň rahatlygyndan hünärmen akademik maslahatçylarymyzdan biri bilen göni gürleşiň. Türkiýede iň amatly uniwersitete we hünäre doly mugt gollanma bereris.',
      btn: 'Maslahat belligi'
    },
    edis: {
      title: 'EDIS Sergisi',
      desc: 'Bilim we akademik pudakda 10 ýyldan gowrak tejribesi bolan Diamond Education tarapyndan guralan Türk uniwersitetleri we bilim edaralary üçin ýyllyk halkara sergi. Halkara mekdeplerde, dil institutlarynda we Türkiýedäki uniwersitetlerde talyplar üçin gollanma bermek we bellige almak boýunça ýöriteleşen.'
    },
    news: {
      title: 'Habarlar',
      readMore: 'Koprak oka',
      item1: { title: 'EDIS 2025 — Halkara Sergi Habarlary', desc: 'Diamond Education 2025-nji ýyldaky EDIS sergisine gatnaşdy. Türkiýäniň öňdebaryjy uniwersitetleri bilen täze ylalaşyklar baglaşyldy.' },
      item2: { title: 'Täze Hyzmatdaş Uniwersitetler', desc: 'Diamond Education hyzmatdaş uniwersitetleriniň sanawyny giňeltdi. Indi 60-dan gowrak uniwersitet bilen hyzmatdaşlyk edilýär.' },
      item3: { title: '500+ Talyp Kabul Edişlik Rekord', desc: 'Bu ýyl Diamond Education arkaly 500-den gowrak talyp Türkiýäniň uniwersitetlerine kabul edildi.' }
    },
    team: {
      title: 'Ýolbaşçylyk Topary',
      roles: ['Baş Müdir', 'Baş Ýerine Ýetiriji Direktor', 'Korporatiw Jemgyýetçilik Gatnaşyklary Müdiri', 'Satuw Müdiri', 'Adam Resurslary Müdiri', 'Talyp Işleri Müdiri', 'Agentler Departamenti Müdiri', 'Tehnologiýa Departamenti Müdiri']
    },
    testimonials: {
      title: 'Olar Biz Hakda Näme Aýtdy',
      role: 'Talyp',
      list: [
        { text: '"Söhbetdeşlikde kämillik we bilim maslahatlarynda dogruçyllyk bilen tapawutlanýan topar. Size üstünlik arzuw edýärin we edaraňyz ygtybarlylyk we dogruçyllyk gözleýän her talyp üçin ýer bolar diýip umyt edýärin."', name: 'Ahmed Raad' },
        { text: '"Türk uniwersitetlerine kabul edilmegiň ähli ýollaryndan nägile bolan bir dostuň maslahatyndan soň United Foundation hakda öwrendim. Indi olaryň kömegi bilen uniwersitet durmuşymy başladym."', name: 'Muhammad Janu' },
        { text: '"Olaryň topary meni daşary ýurtly talyp hökmünde ilkinji pursatdan goldady. Amallary we kagyzlary tamamlamakda işleriň şeýle çalt we sada boljakdygyny göz öňünde tutmandym."', name: 'Mohamed Rami' },
        { text: '"Siziň zerurlyklaryňyzy düşünýän we almagyna kömek edýän birini tapmak ajaýyp. Gowy gatnaşygyňyz üçin we amatly uniwersitet ýaşaýyş jaýy üçin sag boluň."', name: 'Mohamed Shaker Al-Nayal' },
        { text: '"Maňa iş alyp baran iň ajaýyp adamlaryň biri. Talyplar bilen gatnaşyklary örän ajaýyp we kabul etmeleri bermekde örän çalt."', name: 'Mustafa Assar' }
      ]
    },
    contact: {
      title: 'Siz bilen habarlaşalyň',
      sub: 'Sorawyňyz näme bolsa-da, size mugt maslahat bereris!',
      h2: 'Habarlaşyň',
      p: 'Her ädimde size gollanma bermäge taýýar.',
      whatsapp: 'WhatsApp arkaly ýaz',
      telegram: 'Telegram'
    },
    form: {
      firstName: 'Ady', lastName: 'Familiýasy',
      firstNamePh: 'Adyňyz', lastNamePh: 'Familiýaňyz',
      gender: 'Jynsy', male: 'Erkek', female: 'Aýal',
      country: 'Ýurt', countryPh: 'Ýurduňyzy saýlaň',
      phone: 'Telefon', phonePh: '+1 234 567 890',
      message: 'Size nähili kömek edip bileris?',
      messagePh: 'Sorawyňyz hakda aýdyň...',
      submit: 'Iber', submitting: 'Iberilýär...', submitted: 'Iberildi! ✓'
    },
    footer: {
      desc: 'Diamond Education akademik hyzmatlar pudagynda öňdebaryjy kompaniýa bolup, halkara talyplar Türkiýede okamaga kömek edýär.',
      programs: { title: 'Programmalar', item1: 'Türk uniwersitetleri', item2: 'Halkara mekdepler', item3: 'Bize goşuluň' },
      links: { title: 'Peýdaly Baglanyşyklar', item1: 'Türkiýede okamagy', item2: 'Talyp ýaşaýyş jaýy', item3: 'Habarlaşyň', item4: 'Türk stipendiýasy', item5: 'Türk dili', item6: 'United Klub', item7: 'Hyzmatlar', item8: 'Biz hakda' },
      newsletter: { title: 'Habarnamasy', desc: 'Aýratyn tekliplerimiz barada habarly bolmak üçin ýazyl.', ph: 'E-poçta salgyňyz' },
      unitime: 'UNITIME Programmasy',
      copyright: 'Ähli hukuklar goralýar © 2025 Diamond Education',
      agent: 'Biziň agentimiz boluň', privacy: 'Gizlinlik syýasaty', dataProtection: 'Maglumatlary goramak syýasaty'
    },
    float: { whatsapp: 'WhatsApp', messenger: 'Messenger', contact: 'Habarlaşyň' }
  },

  /* ==================== ENGLISH ==================== */
  en: {
    langName: 'English',
    langFlag: '🇬🇧',
    dir: 'ltr',
    meta: {
      title: 'Diamond Education | Education Specialists in Türkiye',
      description: 'The first specialized site for international students studying in Türkiye.'
    },
    topbar: { becomeAgent: 'Become Our Agent' },
    nav: {
      home: 'Home', universities: 'Universities', schools: 'Our Schools', services: 'Services',
      servicesMenu: { general: 'Our General Services', uniEquiv: 'University Certificate Equivalency in Türkiye', schoolEquiv: 'High School Certificate Equivalency in Türkiye', housing: 'Student Housing', turkish: 'Learn Turkish' },
      about: 'About Us', contact: 'Contact Us'
    },
    hero: {
      title: 'Your First Educational Consultant for Studying in Türkiye',
      sub: 'The first specialized site for international students studying in Türkiye.'
    },
    search: {
      title: 'Find Your Desired Major',
      step1Label: 'Step 1: Select Degree', step1Ph: 'Select your desired degree',
      bachelor: 'Bachelor', master: 'Master', phd: 'PhD', vocational: 'Vocational',
      step2Label: 'Step 2: Select Language', step2Ph: 'Select language of study',
      langEn: 'English', langTr: 'Turkish', langAr: 'Arabic',
      step3Label: 'Step 3: Select Major', step3Ph: 'Select your desired major',
      medicine: 'Medicine', engineering: 'Engineering', business: 'Business',
      law: 'Law', architecture: 'Architecture', cs: 'Computer Science', psychology: 'Psychology',
      btn: 'Search'
    },
    stats: { admissions: 'university admissions', experience: 'years of experience', advisors: 'academic advisors', universities: 'private universities' },
    about: { title: 'About Diamond Education' },
    services: [
      { title: 'Free Consultation on Studying at Turkish Universities', desc: 'Our team of over 70 qualified educational consultants provides all information about studying at Turkish universities and living in Türkiye.' },
      { title: 'Guidance on Choosing the Right Major', desc: 'After getting to know the student, our advisors recommend the most suitable majors.' },
      { title: 'Help Students Choose the Right University', desc: 'Our education consultant will offer the best university options that teach your desired majors.' },
      { title: 'Get Free University Admission', desc: 'We complete all procedures to obtain admission from your desired university, completely free of charge.' },
      { title: 'Providing Student Housing', desc: 'Our specialized team offers housing options and helps students book their place.' },
      { title: 'Student Residence Permit', desc: 'Our legal department specializes in Turkish law and ensures perfect arrangement of residence documents.' },
      { title: 'Getting Equivalency for Certificates and Degrees', desc: 'We help students obtain equivalency for high school or university certificates issued outside Türkiye.' },
      { title: 'Getting Health Insurance', desc: 'Our team helps students get health insurance at affordable prices during their study period.' },
      { title: 'Opening a Student Bank Account', desc: 'After final registration, our team helps students open bank accounts suitable for their needs.' },
      { title: 'Sworn Translation', desc: 'Our expert translators provide specialized translation services and certify documents with Turkish notary.' },
      { title: 'Transportation and Reception Services', desc: 'Diamond Education offers airport reception service for students arriving in Türkiye.' },
      { title: 'Registration in Arabic and International Schools', desc: 'United provides registration services for students at the best Arabic and international schools.' }
    ],
    howStart: {
      title: 'How Do I Start Studying in Türkiye?',
      desc: 'From choosing the right major and university, to completing registration, providing housing, and adapting to life in Türkiye — we guide you at every step of your academic journey.',
      btn: 'Read More'
    },
    unis: {
      title: 'Partner Universities', showAll: 'Show All Universities',
      list: [
        { name: 'Istanbul Aydın University', location: 'Türkiye — Istanbul' },
        { name: 'Nişantaşı University', location: 'Türkiye — Istanbul' },
        { name: 'Bahçeşehir University', location: 'Türkiye — Istanbul' },
        { name: 'Istanbul Commerce University', location: 'Türkiye — Istanbul' },
        { name: 'Yeditepe University', location: 'Türkiye — Istanbul' },
        { name: 'Eastern Mediterranean University', location: 'Northern Cyprus' }
      ]
    },
    consult: {
      title: 'Book Your Consultation via Video Call Now!',
      desc: 'Speak directly with one of our expert academic advisors from the comfort of your home. We will provide complete free guidance on the most suitable university and major in Türkiye.',
      btn: 'Book Consultation'
    },
    edis: {
      title: 'EDIS Exhibition',
      desc: 'An annual international exhibition for Turkish universities and educational institutions, organized by Diamond Education with over 10 years of experience in the education sector. Specialized in guiding and registering students at international schools, language institutes, and universities in Türkiye.'
    },
    news: {
      title: 'News',
      readMore: 'Read More',
      item1: { title: 'EDIS 2025 — International Exhibition News', desc: 'Diamond Education participated in EDIS 2025 exhibition. New agreements were signed with leading Turkish universities.' },
      item2: { title: 'New Partner Universities', desc: 'Diamond Education expanded its list of partner universities. Now partnered with over 60 universities.' },
      item3: { title: '500+ Student Admissions Record', desc: 'This year, over 500 students were admitted to Turkish universities through Diamond Education, a record high.' }
    },
    team: {
      title: 'Management Team',
      roles: ['CEO', 'Chief Executive Director', 'Corporate Public Relations Director', 'Sales Director', 'Human Resources Director', 'Student Affairs Director', 'Agents Department Director', 'Technology Department Director']
    },
    testimonials: {
      title: 'What They Said About Us', role: 'Student',
      list: [
        { text: '"A team distinguished by professionalism and honesty in educational consultations. I wish you success and hope your agency will be the place for every student looking for reliability and integrity."', name: 'Ahmed Raad' },
        { text: '"I learned about United Foundation from a friend who was dissatisfied with all ways of getting admitted to Turkish universities. Now I started my university life with their help."', name: 'Muhammad Janu' },
        { text: '"Their team supported me as an international student from the very first moment. I did not expect things to be so fast and easy in completing the procedures and paperwork."', name: 'Mohamed Rami' },
        { text: '"It is wonderful to find someone who understands your needs and helps you achieve them. Thank you for the good relationship and convenient student housing."', name: 'Mohamed Shaker Al-Nayal' },
        { text: '"One of the most wonderful people I have worked with. Their relationship with students is excellent and they are very fast in providing admissions."', name: 'Mustafa Assar' }
      ]
    },
    contact: { title: 'Let\'s Get in Touch', sub: 'Whatever your question, we\'ll give you free advice!', h2: 'Contact Us', p: 'Ready to guide you at every step.', whatsapp: 'Write via WhatsApp', telegram: 'Telegram' },
    form: {
      firstName: 'First Name', lastName: 'Last Name', firstNamePh: 'Your first name', lastNamePh: 'Your last name',
      gender: 'Gender', male: 'Male', female: 'Female',
      country: 'Country', countryPh: 'Select your country',
      phone: 'Phone', phonePh: '+1 234 567 890',
      message: 'How can we help you?', messagePh: 'Tell us about your inquiry...',
      submit: 'Send', submitting: 'Sending...', submitted: 'Sent! ✓'
    },
    footer: {
      desc: 'Diamond Education is a leading company in the academic services sector, helping international students study in Türkiye.',
      programs: { title: 'Programs', item1: 'Turkish Universities', item2: 'International Schools', item3: 'Join Us' },
      links: { title: 'Useful Links', item1: 'Studying in Türkiye', item2: 'Student Housing', item3: 'Contact', item4: 'Turkish Scholarship', item5: 'Turkish Language', item6: 'United Club', item7: 'Services', item8: 'About Us' },
      newsletter: { title: 'Newsletter', desc: 'Subscribe to stay informed about our exclusive offers.', ph: 'Your email address' },
      unitime: 'UNITIME Program',
      copyright: 'All rights reserved © 2025 Diamond Education',
      agent: 'Become Our Agent', privacy: 'Privacy Policy', dataProtection: 'Data Protection Policy'
    },
    float: { whatsapp: 'WhatsApp', messenger: 'Messenger', contact: 'Contact Us' }
  },

  /* ==================== РУССКИЙ ==================== */
  ru: {
    langName: 'Русский',
    langFlag: '🇷🇺',
    dir: 'ltr',
    meta: {
      title: 'Diamond Education | Специалисты по образованию в Турции',
      description: 'Первый специализированный сайт для иностранных студентов, обучающихся в Турции.'
    },
    topbar: { becomeAgent: 'Стать нашим агентом' },
    nav: {
      home: 'Главная', universities: 'Университеты', schools: 'Наши школы', services: 'Услуги',
      servicesMenu: { general: 'Наши общие услуги', uniEquiv: 'Нострификация университетского диплома в Турции', schoolEquiv: 'Нострификация аттестата в Турции', housing: 'Жильё для студентов', turkish: 'Изучить турецкий язык' },
      about: 'О нас', contact: 'Связаться'
    },
    hero: {
      title: 'Ваш первый образовательный консультант по обучению в Турции',
      sub: 'Первый специализированный сайт для иностранных студентов, обучающихся в Турции.'
    },
    search: {
      title: 'Найдите желаемую специальность',
      step1Label: 'Шаг 1: Выберите степень', step1Ph: 'Выберите желаемую степень',
      bachelor: 'Бакалавр', master: 'Магистр', phd: 'Докторантура', vocational: 'Среднее специальное',
      step2Label: 'Шаг 2: Выберите язык', step2Ph: 'Выберите язык обучения',
      langEn: 'Английский', langTr: 'Турецкий', langAr: 'Арабский',
      step3Label: 'Шаг 3: Выберите специальность', step3Ph: 'Выберите желаемую специальность',
      medicine: 'Медицина', engineering: 'Инженерное дело', business: 'Бизнес',
      law: 'Право', architecture: 'Архитектура', cs: 'Информатика', psychology: 'Психология',
      btn: 'Найти'
    },
    stats: { admissions: 'поступлений в университеты', experience: 'лет опыта', advisors: 'академических консультантов', universities: 'частных университетов' },
    about: { title: 'О Diamond Education' },
    services: [
      { title: 'Бесплатная консультация по обучению в турецких университетах', desc: 'Наша команда из более чем 70 квалифицированных консультантов предоставляет всю информацию об обучении в турецких университетах и жизни в Турции.' },
      { title: 'Помощь в выборе подходящей специальности', desc: 'После знакомства со студентом наши консультанты рекомендуют наиболее подходящие специальности.' },
      { title: 'Помощь студентам в выборе правильного университета', desc: 'Наш образовательный консультант предложит лучшие варианты университетов по вашей специальности.' },
      { title: 'Бесплатное получение университетского допуска', desc: 'Мы выполняем все процедуры для получения зачисления в желаемый университет совершенно бесплатно.' },
      { title: 'Обеспечение жильём для студентов', desc: 'Наша специализированная команда предлагает варианты жилья и помогает студентам забронировать место.' },
      { title: 'Вид на жительство для студентов', desc: 'Наш юридический отдел специализируется на турецком праве и обеспечивает идеальное оформление документов на проживание.' },
      { title: 'Нострификация дипломов и сертификатов', desc: 'Мы помогаем студентам получить нострификацию аттестатов или дипломов, выданных за пределами Турции.' },
      { title: 'Оформление медицинской страховки', desc: 'Наша команда помогает студентам получить медицинскую страховку по доступным ценам в период обучения.' },
      { title: 'Открытие студенческого банковского счёта', desc: 'После окончательной регистрации наша команда помогает студентам открыть банковские счета, соответствующие их потребностям.' },
      { title: 'Заверенный перевод', desc: 'Наши опытные переводчики предоставляют специализированные услуги перевода и заверяют документы у турецкого нотариуса.' },
      { title: 'Услуги трансфера и встречи', desc: 'Diamond Education предлагает услугу встречи в аэропорту для студентов, прибывающих в Турцию.' },
      { title: 'Зачисление в арабские и международные школы', desc: 'Мы предоставляем услуги зачисления студентов в лучшие арабские и международные школы.' }
    ],
    howStart: {
      title: 'Как начать учёбу в Турции?',
      desc: 'От выбора правильной специальности и университета до завершения регистрации, обеспечения жильём и адаптации к жизни в Турции — мы сопровождаем вас на каждом этапе академического пути.',
      btn: 'Читать далее'
    },
    unis: {
      title: 'Университеты-партнёры', showAll: 'Показать все университеты',
      list: [
        { name: 'Стамбульский университет Айдын', location: 'Турция — Стамбул' },
        { name: 'Университет Нишанташи', location: 'Турция — Стамбул' },
        { name: 'Университет Бахчешехир', location: 'Турция — Стамбул' },
        { name: 'Стамбульский коммерческий университет', location: 'Турция — Стамбул' },
        { name: 'Университет Едитепе', location: 'Турция — Стамбул' },
        { name: 'Восточно-Средиземноморский университет', location: 'Северный Кипр' }
      ]
    },
    consult: {
      title: 'Забронируйте консультацию по видеозвонку прямо сейчас!',
      desc: 'Поговорите напрямую с одним из наших экспертных консультантов, не выходя из дома. Мы предоставим полное бесплатное руководство по наиболее подходящему университету и специальности в Турции.',
      btn: 'Записаться на консультацию'
    },
    edis: {
      title: 'Выставка EDIS',
      desc: 'Ежегодная международная выставка турецких университетов и образовательных учреждений, организованная Diamond Education с более чем 10-летним опытом. Специализируется на консультировании и зачислении студентов в международные школы, языковые институты и университеты Турции.'
    },
    news: {
      title: 'Новости',
      readMore: 'Читать далее',
      item1: { title: 'EDIS 2025 — Новости международной выставки', desc: 'Diamond Education приняла участие в выставке EDIS 2025. Подписаны новые соглашения с ведущими турецкими университетами.' },
      item2: { title: 'Новые университеты-партнёры', desc: 'Diamond Education расширила список университетов-партнёров. Теперь сотрудничество ведётся с более чем 60 университетами.' },
      item3: { title: 'Рекорд: 500+ зачислений студентов', desc: 'В этом году через Diamond Education в турецкие университеты поступили более 500 студентов.' }
    },
    team: {
      title: 'Команда управления',
      roles: ['Генеральный директор', 'Исполнительный директор', 'Директор по корпоративным связям', 'Директор по продажам', 'Директор по персоналу', 'Директор по делам студентов', 'Директор отдела агентов', 'Директор технологического отдела']
    },
    testimonials: {
      title: 'Что они говорят о нас', role: 'Студент',
      list: [
        { text: '"Команда, отличающаяся профессионализмом и честностью в образовательном консультировании. Желаю вам успехов и надеюсь, что ваше агентство станет местом для каждого студента, ищущего надёжность."', name: 'Ahmed Raad' },
        { text: '"Я узнал о United Foundation по совету друга, который был недоволен всеми способами поступления в турецкие университеты. Теперь я начал студенческую жизнь с их помощью."', name: 'Muhammad Janu' },
        { text: '"Их команда поддержала меня как иностранного студента с самого первого момента. Я не ожидал, что всё будет так быстро и легко при оформлении документов."', name: 'Mohamed Rami' },
        { text: '"Замечательно найти человека, который понимает ваши потребности и помогает их реализовать. Спасибо за хорошие отношения и удобное студенческое жильё."', name: 'Mohamed Shaker Al-Nayal' },
        { text: '"Один из самых замечательных людей, с которыми мне приходилось работать. Их отношения со студентами превосходны, и они очень быстро оформляют зачисление."', name: 'Mustafa Assar' }
      ]
    },
    contact: { title: 'Давайте свяжемся', sub: 'Какой бы ни был ваш вопрос, мы дадим бесплатный совет!', h2: 'Связаться с нами', p: 'Готовы направлять вас на каждом шагу.', whatsapp: 'Написать через WhatsApp', telegram: 'Telegram' },
    form: {
      firstName: 'Имя', lastName: 'Фамилия', firstNamePh: 'Ваше имя', lastNamePh: 'Ваша фамилия',
      gender: 'Пол', male: 'Мужской', female: 'Женский',
      country: 'Страна', countryPh: 'Выберите вашу страну',
      phone: 'Телефон', phonePh: '+1 234 567 890',
      message: 'Как мы можем вам помочь?', messagePh: 'Расскажите о вашем запросе...',
      submit: 'Отправить', submitting: 'Отправка...', submitted: 'Отправлено! ✓'
    },
    footer: {
      desc: 'Diamond Education — ведущая компания в сфере академических услуг, помогающая иностранным студентам учиться в Турции.',
      programs: { title: 'Программы', item1: 'Турецкие университеты', item2: 'Международные школы', item3: 'Присоединиться к нам' },
      links: { title: 'Полезные ссылки', item1: 'Обучение в Турции', item2: 'Жильё для студентов', item3: 'Контакты', item4: 'Турецкая стипендия', item5: 'Турецкий язык', item6: 'United Клуб', item7: 'Услуги', item8: 'О нас' },
      newsletter: { title: 'Рассылка', desc: 'Подпишитесь, чтобы узнавать о наших эксклюзивных предложениях.', ph: 'Ваш email' },
      unitime: 'Программа UNITIME',
      copyright: 'Все права защищены © 2025 Diamond Education',
      agent: 'Стать нашим агентом', privacy: 'Политика конфиденциальности', dataProtection: 'Политика защиты данных'
    },
    float: { whatsapp: 'WhatsApp', messenger: 'Messenger', contact: 'Связаться' }
  },

  /* ==================== TÜRKÇE ==================== */
  tr: {
    langName: 'Türkçe',
    langFlag: '🇹🇷',
    dir: 'ltr',
    meta: {
      title: 'Diamond Education | Türkiye\'de Eğitim Uzmanları',
      description: 'Türkiye\'de eğitim alan uluslararası öğrenciler için ilk uzman site.'
    },
    topbar: { becomeAgent: 'Temsilcimiz Olun' },
    nav: {
      home: 'Ana Sayfa', universities: 'Üniversiteler', schools: 'Okullarımız', services: 'Hizmetler',
      servicesMenu: { general: 'Genel Hizmetlerimiz', uniEquiv: 'Türkiye\'de Üniversite Diploması Denkliği', schoolEquiv: 'Türkiye\'de Lise Diploması Denkliği', housing: 'Öğrenci Konutu', turkish: 'Türkçe Öğren' },
      about: 'Hakkımızda', contact: 'İletişim'
    },
    hero: {
      title: 'Türkiye\'de Eğitim İçin İlk Danışmanınız',
      sub: 'Türkiye\'de uluslararası öğrenciler için özelleştirilmiş ilk site.'
    },
    search: {
      title: 'İstediğiniz Bölümü Bulun',
      step1Label: 'Adım 1: Derece Seçin', step1Ph: 'İstediğiniz dereceyi seçin',
      bachelor: 'Lisans', master: 'Yüksek Lisans', phd: 'Doktora', vocational: 'Ön Lisans',
      step2Label: 'Adım 2: Dil Seçin', step2Ph: 'Eğitim dilini seçin',
      langEn: 'İngilizce', langTr: 'Türkçe', langAr: 'Arapça',
      step3Label: 'Adım 3: Bölüm Seçin', step3Ph: 'İstediğiniz bölümü seçin',
      medicine: 'Tıp', engineering: 'Mühendislik', business: 'İşletme',
      law: 'Hukuk', architecture: 'Mimarlık', cs: 'Bilgisayar Bilimleri', psychology: 'Psikoloji',
      btn: 'Ara'
    },
    stats: { admissions: 'üniversite kabulü', experience: 'yıl deneyim', advisors: 'akademik danışman', universities: 'özel üniversite' },
    about: { title: 'Diamond Education Hakkında' },
    services: [
      { title: 'Türk Üniversitelerinde Eğitim Hakkında Ücretsiz Danışmanlık', desc: '70\'den fazla nitelikli eğitim danışmanından oluşan ekibimiz, Türk üniversitelerinde eğitim ve Türkiye\'de yaşam hakkında tüm bilgileri sunmaktadır.' },
      { title: 'Doğru Bölümü Seçme Konusunda Rehberlik', desc: 'Öğrenciyi tanıdıktan sonra danışmanlarımız en uygun bölümleri önerir.' },
      { title: 'Öğrencilerin Doğru Üniversiteyi Seçmesine Yardım', desc: 'Eğitim danışmanımız istediğiniz bölümleri öğreten en iyi üniversite seçeneklerini sunar.' },
      { title: 'Ücretsiz Üniversite Kabulü Alma', desc: 'İstediğiniz üniversiteden kabul almak için tüm prosedürleri tamamen ücretsiz olarak tamamlıyoruz.' },
      { title: 'Öğrenci Konutu Sağlama', desc: 'Uzman ekibimiz konut seçenekleri sunar ve öğrencilerin yer rezervasyonu yapmasına yardımcı olur.' },
      { title: 'Öğrenci Oturma İzni', desc: 'Hukuk departmanımız Türk hukukunda uzmanlaşmış olup ikamet belgelerinin mükemmel şekilde düzenlenmesini sağlar.' },
      { title: 'Diploma ve Sertifika Denkliği Alma', desc: 'Türkiye dışında verilen lise veya üniversite diplomaları için denklik alınmasına yardımcı oluyoruz.' },
      { title: 'Sağlık Sigortası Yaptırma', desc: 'Ekibimiz, öğrencilerin eğitim döneminde uygun fiyatlarla sağlık sigortası yaptırmasına yardımcı olur.' },
      { title: 'Öğrenci Banka Hesabı Açma', desc: 'Son kayıttan sonra ekibimiz, öğrencilerin ihtiyaçlarına uygun banka hesabı açmasına yardımcı olur.' },
      { title: 'Yeminli Tercüme', desc: 'Uzman tercümanlarımız özel tercüme hizmetleri sunar ve belgeleri Türk noterinde onaylar.' },
      { title: 'Ulaşım ve Karşılama Hizmetleri', desc: 'Diamond Education, Türkiye\'ye gelen öğrenciler için havalimanı karşılama hizmeti sunmaktadır.' },
      { title: 'Arap ve Uluslararası Okullara Kayıt', desc: 'En iyi Arap ve uluslararası okullarda öğrenciler için kayıt hizmetleri sağlıyoruz.' }
    ],
    howStart: {
      title: 'Türkiye\'de Eğitime Nasıl Başlarım?',
      desc: 'Doğru bölüm ve üniversiteyi seçmekten kayıt tamamlamaya, konut sağlamaya ve Türkiye\'deki yaşama alışmaya kadar akademik yolculuğunuzun her adımında size rehberlik ediyoruz.',
      btn: 'Daha Fazla Oku'
    },
    unis: {
      title: 'Ortak Üniversiteler', showAll: 'Tüm Üniversiteleri Göster',
      list: [
        { name: 'İstanbul Aydın Üniversitesi', location: 'Türkiye — İstanbul' },
        { name: 'Nişantaşı Üniversitesi', location: 'Türkiye — İstanbul' },
        { name: 'Bahçeşehir Üniversitesi', location: 'Türkiye — İstanbul' },
        { name: 'İstanbul Ticaret Üniversitesi', location: 'Türkiye — İstanbul' },
        { name: 'Yeditepe Üniversitesi', location: 'Türkiye — İstanbul' },
        { name: 'Doğu Akdeniz Üniversitesi', location: 'Kuzey Kıbrıs' }
      ]
    },
    consult: {
      title: 'Şimdi Video Görüşmesi ile Danışmanızı Rezerve Edin!',
      desc: 'Evinizdeki konforla uzman akademik danışmanlarımızdan biriyle doğrudan konuşun. Türkiye\'deki en uygun üniversite ve bölüm hakkında tam ücretsiz rehberlik sağlayacağız.',
      btn: 'Danışma Rezervasyonu'
    },
    edis: {
      title: 'EDIS Fuarı',
      desc: 'Eğitim ve akademik alanda 10 yılı aşkın deneyime sahip Diamond Education tarafından düzenlenen Türk üniversiteleri ve eğitim kurumları için yıllık uluslararası fuar. Uluslararası okullarda, dil enstitülerinde ve Türkiye\'deki üniversitelerde öğrencilere rehberlik ve kayıt konusunda uzmanlaşmış.'
    },
    news: {
      title: 'Haberler',
      readMore: 'Daha Fazla Oku',
      item1: { title: 'EDIS 2025 — Uluslararası Fuar Haberleri', desc: 'Diamond Education, EDIS 2025 fuarına katıldı. Türkiye\'nin önde gelen üniversiteleriyle yeni anlaşmalar imzalandı.' },
      item2: { title: 'Yeni Ortak Üniversiteler', desc: 'Diamond Education ortak üniversite listesini genişletti. Artık 60\'tan fazla üniversiteyle iş birliği yapılıyor.' },
      item3: { title: '500+ Öğrenci Kabul Rekoru', desc: 'Bu yıl Diamond Education aracılığıyla 500\'den fazla öğrenci Türk üniversitelerine kabul edildi.' }
    },
    team: {
      title: 'Yönetim Ekibi',
      roles: ['Genel Müdür', 'İcra Direktörü', 'Kurumsal Halkla İlişkiler Direktörü', 'Satış Direktörü', 'İnsan Kaynakları Direktörü', 'Öğrenci İşleri Direktörü', 'Temsilciler Departmanı Direktörü', 'Teknoloji Departmanı Direktörü']
    },
    testimonials: {
      title: 'Bizim Hakkımızda Ne Dediler', role: 'Öğrenci',
      list: [
        { text: '"Eğitim danışmanlığında profesyonellik ve dürüstlükle öne çıkan bir ekip. Size başarılar dilerim ve ajansınızın güvenilirlik ve dürüstlük arayan her öğrenci için ideal yer olacağını umuyorum."', name: 'Ahmed Raad' },
        { text: '"Türk üniversitelerine kabul için tüm yollardan hayal kırıklığına uğrayan bir arkadaşımın tavsiyesiyle United Foundation\'ı öğrendim. Şimdi onların yardımıyla üniversite hayatıma başladım."', name: 'Muhammad Janu' },
        { text: '"Ekipleri beni yabancı öğrenci olarak ilk andan itibaren destekledi. Prosedürleri tamamlamada işlerin bu kadar hızlı ve kolay olacağını beklemiyordum."', name: 'Mohamed Rami' },
        { text: '"İhtiyaçlarınızı anlayan ve gerçekleştirmenize yardım eden birini bulmak harika. İyi ilişkiniz ve uygun öğrenci konutu için teşekkürler."', name: 'Mohamed Shaker Al-Nayal' },
        { text: '"Çalıştığım en harika insanlardan biri. Öğrencilerle ilişkileri mükemmel ve kabul sağlamada çok hızlılar."', name: 'Mustafa Assar' }
      ]
    },
    contact: { title: 'İletişime Geçelim', sub: 'Sorunuz ne olursa olsun, ücretsiz tavsiye vereceğiz!', h2: 'İletişim', p: 'Her adımda size rehberlik etmeye hazırız.', whatsapp: 'WhatsApp ile Yazın', telegram: 'Telegram' },
    form: {
      firstName: 'Ad', lastName: 'Soyad', firstNamePh: 'Adınız', lastNamePh: 'Soyadınız',
      gender: 'Cinsiyet', male: 'Erkek', female: 'Kadın',
      country: 'Ülke', countryPh: 'Ülkenizi seçin',
      phone: 'Telefon', phonePh: '+1 234 567 890',
      message: 'Size nasıl yardımcı olabiliriz?', messagePh: 'Sorunuz hakkında bilgi verin...',
      submit: 'Gönder', submitting: 'Gönderiliyor...', submitted: 'Gönderildi! ✓'
    },
    footer: {
      desc: 'Diamond Education, uluslararası öğrencilerin Türkiye\'de eğitim almasına yardımcı olan akademik hizmetler sektöründe öncü bir şirkettir.',
      programs: { title: 'Programlar', item1: 'Türk Üniversiteleri', item2: 'Uluslararası Okullar', item3: 'Bize Katılın' },
      links: { title: 'Faydalı Bağlantılar', item1: 'Türkiye\'de Eğitim', item2: 'Öğrenci Konutu', item3: 'İletişim', item4: 'Türk Bursu', item5: 'Türk Dili', item6: 'United Kulüp', item7: 'Hizmetler', item8: 'Hakkımızda' },
      newsletter: { title: 'Bülten', desc: 'Özel tekliflerimizden haberdar olmak için abone olun.', ph: 'E-posta adresiniz' },
      unitime: 'UNITIME Programı',
      copyright: 'Tüm hakları saklıdır © 2025 Diamond Education',
      agent: 'Temsilcimiz Olun', privacy: 'Gizlilik Politikası', dataProtection: 'Veri Koruma Politikası'
    },
    float: { whatsapp: 'WhatsApp', messenger: 'Messenger', contact: 'İletişim' }
  },

};

/* =============================================
   I18N Engine
   ============================================= */

let currentLang = localStorage.getItem('de_lang') || 'tk';
window.LANGS = LANGS;

function t(keyPath) {
  const keys = keyPath.split('.');
  let val = LANGS[currentLang];
  for (const k of keys) {
    if (val == null) return keyPath;
    val = val[k];
  }
  return (val != null && typeof val !== 'object') ? val : keyPath;
}

function applyLang() {
  const L = LANGS[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = L.dir;
  document.title = L.meta.title;
  document.querySelector('meta[name="description"]').content = L.meta.description;

  // Apply data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== key) el.textContent = val;
  });

  // Apply placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = t(key);
    if (val !== key) el.placeholder = val;
  });

  // Rebuild services
  const servGrid = document.getElementById('servicesGrid');
  if (servGrid) {
    const icons = [
      'https://api.unitededucation.com.tr/services/الاستشارة المجانية.svg',
      'https://api.unitededucation.com.tr/services/توجيه الطلاب.svg',
      'https://api.unitededucation.com.tr/services/مساعدتك في اختيار الجامع.svg',
      'https://api.unitededucation.com.tr/services/قبول-جامعي.svg',
      'https://api.unitededucation.com.tr/services/سكن-جامعي.svg',
      'https://api.unitededucation.com.tr/services/الاقامة-الطلابية.svg',
      'https://api.unitededucation.com.tr/services/معادلة-الشهادة-الجامعية-01.svg',
      'https://api.unitededucation.com.tr/services/التامين-الصحي-01.svg',
      'https://api.unitededucation.com.tr/services/حسابات-بنكية.svg',
      'https://api.unitededucation.com.tr/services/الترجمة-المحلفة.svg',
      'https://api.unitededucation.com.tr/services/خدمة-النقل-والاستقبال-01.svg',
      'https://api.unitededucation.com.tr/services/المدارس-الدولية-01.svg'
    ];
    servGrid.innerHTML = L.services.map((s, i) => `
      <div class="service-card">
        <img src="${icons[i]}" alt="" loading="lazy" />
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`).join('');
  }

  // Rebuild universities
  const uniGrid = document.getElementById('uniGrid');
  if (uniGrid) {
    const uniData = [
      { cover: 'https://unitededucation.com/images/unidaynantsen/enIstanbul%20Aydin%20University%20-%20Copy.JPG', logo: 'https://unitededucation.com/linklogoch/arpreview-istanbul_aydin_universitesi_logo__1_00-removebg-preview.png', views: '40,441' },
      { cover: 'https://unitededucation.com/images/unidaynants/ar2008nisantasi%20cover.png', logo: 'https://unitededucation.com/linklogoch/Nişantaşı-University-logo.png', views: '33,855' },
      { cover: 'https://unitededucation.com/images/unidaynants/AR1200%20.%201920.jpg', logo: 'https://unitededucation.com/linklogoch/Bahcesehir-University-logo.png', views: '27,624' },
      { cover: 'https://unitededucation.com/images/unidaynants/ar20012.jpg', logo: 'https://unitededucation.com/linklogoch/Istanbul-ticaret-university-logo.png', views: '15,863' },
      { cover: 'https://unitededucation.com/images/unidaynants/ar19961.jpg', logo: 'https://unitededucation.com/linklogoch/Yeditepe-University-logo.png', views: '14,594' },
      { cover: 'https://unitededucation.com/images/unidaynants/AR1979dau_son_56e3d249.gif', logo: 'https://unitededucation.com/linklogoch/Akdeniz-University-logo.png', views: '14,930' }
    ];
    uniGrid.innerHTML = L.unis.list.map((u, i) => `
      <div class="uni-card">
        <div class="uni-card-img">
          <img class="cover" src="${uniData[i].cover}" alt="${u.name}" loading="lazy" />
          <img class="uni-logo" src="${uniData[i].logo}" alt="" loading="lazy" />
          <span class="uni-views"><i class="fas fa-eye"></i> ${uniData[i].views}</span>
        </div>
        <div class="uni-body">
          <h3>${u.name}</h3>
          <span><i class="fas fa-map-marker-alt" style="color:var(--accent)"></i> ${u.location}</span>
        </div>
      </div>`).join('');
  }

  // Rebuild testimonials
  const tTrack = document.getElementById('tTrack');
  if (tTrack) {
    const imgs = [
      'https://unitededucation.com/image/img/stu1.png',
      'https://unitededucation.com/image/img/stu5.png',
      'https://unitededucation.com/image/img/stu4.png',
      'https://unitededucation.com/image/img/stu3.png',
      'https://unitededucation.com/image/img/stu2.png'
    ];
    tTrack.innerHTML = L.testimonials.list.map((t, i) => `
      <div class="t-card">
        <p class="t-text">${t.text}</p>
        <div class="t-author">
          <img src="${imgs[i]}" alt="${t.name}" loading="lazy" />
          <div><h5>${t.name}</h5><span>${L.testimonials.role}</span></div>
        </div>
      </div>`).join('');
    // Reset slider position
    tTrack.style.transform = 'translateX(0)';
    if (window._sliderCur !== undefined) window._sliderCur = 0;
  }

  // Rebuild team roles
  document.querySelectorAll('.team-card span[data-role-idx]').forEach(el => {
    const idx = parseInt(el.getAttribute('data-role-idx'));
    el.textContent = L.team.roles[idx];
  });

  // Search wizard options
  const selDereje = document.getElementById('selDereje');
  if (selDereje) {
    selDereje.options[0].text = L.search.step1Ph;
    selDereje.options[1].text = L.search.bachelor;
    selDereje.options[2].text = L.search.master;
    selDereje.options[3].text = L.search.phd;
    selDereje.options[4].text = L.search.vocational;
  }
  const selDil = document.getElementById('selDil');
  if (selDil) {
    selDil.options[0].text = L.search.step2Ph;
    selDil.options[1].text = L.search.langEn;
    selDil.options[2].text = L.search.langTr;
  }
  const selHunar = document.getElementById('selHunar');
  if (selHunar) {
    selHunar.options[0].text = L.search.step3Ph;
    selHunar.options[1].text = L.search.medicine;
    selHunar.options[2].text = L.search.engineering;
    selHunar.options[3].text = L.search.business;
    selHunar.options[4].text = L.search.law;
    selHunar.options[5].text = L.search.architecture;
    selHunar.options[6].text = L.search.cs;
    selHunar.options[7].text = L.search.psychology;
  }

  // Form submit button
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn && !submitBtn.dataset.busy) {
    submitBtn.innerHTML = `${L.form.submit} &nbsp;<i class="fas fa-paper-plane"></i>`;
  }

  // Rebuild news section
  const newsGrid = document.getElementById('newsGrid');
  if (newsGrid && L.news) {
    const items = [L.news.item1, L.news.item2, L.news.item3];
    const dates = ['2025-01-15', '2024-11-20', '2024-09-05'];
    newsGrid.innerHTML = items.map((item, i) => `
      <div class="news-card">
        <div class="news-card-img">
          <img src="https://unitededucation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fedislogo.5bd73a38.png&w=256&q=60" alt="${item.title}" loading="lazy" />
        </div>
        <div class="news-card-body">
          <span class="news-date"><i class="fas fa-calendar-alt"></i> ${dates[i]}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <a href="#" class="news-read-more">${L.news.readMore} <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>`).join('');
  }

  // Update lang button
  const langNameEl = document.getElementById('langCurrent');
  if (langNameEl) langNameEl.textContent = L.langName;

  // Mark active lang
  document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  window.currentLang = lang;
  localStorage.setItem('de_lang', lang);
  applyLang();
}
window.currentLang = currentLang;

// Init lang selector toggle
document.addEventListener('DOMContentLoaded', () => {
  const langSel = document.getElementById('langSelector');
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn && langSel) {
    langBtn.addEventListener('click', e => {
      e.stopPropagation();
      langSel.classList.toggle('open');
    });
    document.querySelectorAll('.lang-dropdown button').forEach(btn => {
      btn.addEventListener('click', () => {
        setLang(btn.dataset.lang);
        langSel.classList.remove('open');
      });
    });
    document.addEventListener('click', () => langSel.classList.remove('open'));
  }
  applyLang();
});
