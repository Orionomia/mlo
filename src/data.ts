export const SITE_URL = 'https://mlo.slupsk.pl';

export const PROFILES = [
  {
    id: 'ogolny', slug: 'profil-ogolny', num: '01',
    title: 'Ogólny', sub: 'Twoje tempo, Twój kierunek',
    badge: false,
    iconPath: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`, color: '#b45309', pale: '#fffbeb',
    desc: 'Profil dla tych, którzy chcą mieć otwarte drzwi na wiele kierunków studiów. Różnorodny zestaw przedmiotów i swoboda wyboru rozszerzeń maturalnych.',
    items: ['Matematyka rozszerzona', 'Język angielski', 'Historia', 'Biologia', 'Przedmioty do wyboru'],
    career: ['Studia na dowolnym kierunku', 'Biznes i przedsiębiorczość', 'Administracja publiczna', 'IT i nowe technologie', 'Nauki ścisłe i przyrodnicze'],
    unis: ['Uniwersytet Gdański', 'Politechnika Gdańska', 'Uniwersytet Pomorski w Słupsku', 'SGH Warszawa', 'Dowolna uczelnia w Polsce'],
    metaDesc: 'Klasa ogólna MLO Słupsk – elastyczny program, szeroki wybór rozszerzeń maturalnych. Idealna dla uczniów planujących różne kierunki studiów.',
  },
  {
    id: 'humanistyczny', slug: 'profil-humanistyczny', num: '02',
    title: 'Humanistyczny', sub: 'Słowo, historia, kultura',
    badge: false,
    iconPath: `<path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"/>`, color: '#7c3aed', pale: '#f5f3ff',
    desc: 'Dla pasjonatów literatury i humanistyki. Rozwijasz talent analityczny, piszesz i odkrywasz świat poprzez historię i kulturę.',
    items: ['Język polski rozszerzony', 'Historia rozszerzona', 'WoS', 'Filozofia', 'Łacina'],
    career: ['Dziennikarz / redaktor', 'Prawnik / adwokat', 'Nauczyciel', 'Dyplomata / politolog', 'Historyk / archiwista'],
    unis: ['Uniwersytet Gdański — prawo, filologia', 'Uniwersytet Warszawski', 'Uniwersytet Jagielloński', 'Uniwersytet Pomorski w Słupsku'],
    metaDesc: 'Klasa humanistyczna MLO Słupsk – język polski, historia, filozofia. Przygotowanie do studiów humanistycznych, prawniczych i dziennikarskich.',
  },
  {
    id: 'psychologiczny', slug: 'profil-psychologiczny', num: '03',
    title: 'Psychologiczny', sub: 'Zrozumieć człowieka',
    badge: false,
    iconPath: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`, color: '#0891b2', pale: '#ecfeff',
    desc: 'Chcesz rozumieć ludzi i im pomagać? Doskonały start do psychologii, pedagogiki i socjologii na najlepszych uczelniach.',
    items: ['Biologia rozszerzona', 'Psychologia', 'Socjologia', 'Angielski C1', 'Etyka'],
    career: ['Psycholog / terapeuta', 'Pedagog szkolny', 'Pracownik socjalny', 'HR / zasoby ludzkie', 'Lekarz / pielęgniarka'],
    unis: ['Uniwersytet Gdański — psychologia', 'Gdański Uniwersytet Medyczny', 'Uniwersytet Pomorski w Słupsku', 'SWPS Warszawa / Sopot'],
    metaDesc: 'Klasa psychologiczna MLO Słupsk – biologia, psychologia, socjologia. Przygotowanie do studiów psychologicznych, pedagogicznych i medycznych.',
  },
  {
    id: 'filmowo-aktorski', slug: 'profil-filmowo-aktorski', num: '04',
    title: 'Filmowo-Aktorski', sub: 'Scena należy do Ciebie',
    badge: false,
    iconPath: `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>` , color: '#d97706', pale: '#fffbeb',
    desc: 'Klasa dla pasjonatów kina i teatru. Praktyczne zajęcia artystyczne, autoprezentacja i praca z kamerą pod okiem profesjonalistów.',
    items: ['Wiedza o kulturze', 'Język polski rozszerzony', 'Sztuka teatru', 'Techniki filmowe', 'Autoprezentacja'],
    career: ['Aktor / artysta sceniczny', 'Reżyser / operator kamery', 'Dziennikarz TV / radiowiec', 'Animator kultury', 'PR i marketing'],
    unis: ['PWSFTviT Łódź — reżyseria/aktorstwo', 'AST Kraków / Wrocław', 'Akademia Sztuk Pięknych', 'Uczelnie medialne i kulturoznawcze'],
    metaDesc: 'Klasa filmowo-aktorska MLO Słupsk – teatr, film, autoprezentacja. Praktyczne przygotowanie do kariery w mediach, kulturze i sztuce.',
  },
  {
    id: 'policyjny', slug: 'profil-policyjny', num: '05',
    title: 'Policyjny', sub: 'Mundur. Prawo. Służba.',
    badge: true,
    iconPath: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`, color: '#2563eb', pale: '#eff6ff',
    desc: 'Intensywne przygotowanie do służby w Policji — prawo, taktyka, samoobrona i sprawność fizyczna. Klasa mundurowa we współpracy z Policją Pomorską.',
    items: ['Prawo karne', 'Samoobrona', 'Pierwsza pomoc', 'Psychologia kryminalna', 'WF wyczynowy'],
    career: ['Policjant / funkcjonariusz Policji', 'Strażnik miejski', 'Agent ABW / CBA', 'Pracownik ochrony', 'Studia prawnicze / kryminologia'],
    unis: ['Wyższa Szkoła Policji w Szczytnie', 'Szkoła Policji w Słupsku', 'Uniwersytet Gdański — prawo', 'WSB w Gdańsku — bezpieczeństwo'],
    metaDesc: 'Klasa policyjna MLO Słupsk – mundurowa klasa licealna przygotowująca do służby w Policji. Prawo karne, taktyka, samoobrona, pierwsza pomoc.',
  },
  {
    id: 'wojskowy', slug: 'profil-wojskowy', num: '06',
    title: 'Wojskowy', sub: 'Siły Zbrojne RP',
    badge: true,
    iconPath: `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>`, color: '#059669', pale: '#f0fdf4',
    desc: 'Dla kandydatów na żołnierzy zawodowych. Musztra, historia wojskowości, techniki przeżycia i sprawność fizyczna na najwyższym poziomie.',
    items: ['Edukacja dla bezpieczeństwa', 'Musztra', 'Historia wojskowości', 'Techniki przeżycia', 'WF sportowy'],
    career: ['Żołnierz zawodowy Sił Zbrojnych RP', 'Oficer Wojska Polskiego', 'Służby specjalne', 'Ratownik / funkcjonariusz', 'Studia wojskowe'],
    unis: ['Akademia Wojsk Lądowych Wrocław', 'Akademia Marynarki Wojennej Gdynia', 'Wojskowa Akademia Techniczna Warszawa', 'LOK / studia cywilne'],
    metaDesc: 'Klasa wojskowa MLO Słupsk – mundurowa klasa licealna dla przyszłych żołnierzy Sił Zbrojnych RP. Musztra, edukacja dla bezpieczeństwa, sprawność.',
  },
  {
    id: 'pozarniczy', slug: 'profil-pozarniczy', num: '07',
    title: 'Pożarniczy', sub: 'Ratujemy życie.',
    badge: true,
    iconPath: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>`, color: '#dc2626', pale: '#fef2f2',
    desc: 'Klasa przygotowująca do służby w Państwowej Straży Pożarnej. Ratownictwo medyczne, ćwiczenia gaśnicze i służba społeczeństwu.',
    items: ['Ratownictwo medyczne', 'Techniki gaśnicze', 'Chemia pożaru', 'Prawo pożarnicze', 'Sprawność fizyczna'],
    career: ['Strażak PSP / OSP', 'Ratownik medyczny', 'Inspektor ochrony przeciwpożarowej', 'Ratownik GOPR / WOPR', 'Służby ratownicze'],
    unis: ['Szkoła Główna Służby Pożarniczej Warszawa', 'Centrum Szkolenia PSP', 'Gdański Uniwersytet Medyczny', 'WSB — bezpieczeństwo i ratownictwo'],
    metaDesc: 'Klasa pożarnicza MLO Słupsk – mundurowa klasa licealna dla przyszłych strażaków PSP. Ratownictwo medyczne, techniki gaśnicze, sprawność fizyczna.',
  },
];

export const NAV_LINKS = [
  { href: '/',                label: 'Start' },
  { href: '/o-szkole',        label: 'O Szkole' },
  { href: '/profile',         label: 'Profile' },
  { href: '/rekrutacja',      label: 'Rekrutacja' },
  { href: '/matura',          label: 'Matura' },
  { href: '/jezyk-kaszubski', label: 'Kaszubski' },
  { href: '/galeria',         label: 'Galeria' },
  { href: '/podreczniki',     label: 'Podręczniki' },
  { href: '/kalendarz',       label: 'Kalendarz' },
  { href: '/kadra',           label: 'Kadra' },
  { href: '/kontakt',         label: 'Kontakt' },
];

export const NEWS = [
  {
    date: '15.06.2026', cat: 'Aktualności', hot: true,
    title: 'Nowa strona internetowa MLO Słupsk',
    body: 'Zapraszamy do odwiedzenia nowej strony szkoły. Znajdziesz tu informacje o profilach klas, rekrutacji, podręcznikach i wiele więcej.',
    link: null,
  },
  {
    date: '28.08.2025', cat: 'Rok szkolny', hot: false,
    title: 'Uroczyste rozpoczęcie roku szkolnego 2025/2026',
    body: '1 września 2025 r. o godz. 11:00. Zapraszamy wszystkich uczniów i rodziców.',
    link: null,
  },
  {
    date: '01.07.2025', cat: 'Dokumenty', hot: false,
    title: 'Wykaz podręczników 2025/2026 dostępny',
    body: 'Lista podręczników na nowy rok szkolny jest już dostępna w zakładce Podręczniki i Dokumenty.',
    link: '/podreczniki',
  },
  {
    date: '23.03.2025', cat: 'Kariery', hot: false,
    title: 'Zostań pomorskim policjantem',
    body: 'Policja Pomorska zaprasza absolwentów do służby. Stabilna praca, możliwość awansu i 13. pensja.',
    link: 'https://dobor.pomorska.policja.gov.pl',
  },
];

export const BOOKS = [
  { cls: 'Klasa 1', pdf: '/dokumenty/spis_podrecznikow_do_klasy_1_2025.pdf' },
  { cls: 'Klasa 2', pdf: '/dokumenty/spis_podrecznikow_do_klasy_2_2025.pdf' },
  { cls: 'Klasa 3', pdf: '/dokumenty/spis_podrecznikow_do_klasy_3_2025.pdf' },
  { cls: 'Klasa 4', pdf: '/dokumenty/spis_podrecznikow_do_klasy_4_2025.pdf' },
];

// Galeria — metadane albumów
// Sekretariat edytuje: title (nazwa), description (opis), date (data)
export const GALLERY_META: Record<string, { title: string; description: string; date: string; longDescription?: string }> = {
  '2026-06-bal-maturalny': {
    title: 'Bal maturalny 2026',
    description: 'Uroczyste pożegnanie maturzystów rocznika 2025/2026.',
    date: 'Czerwiec 2026',
    longDescription: 'Bal maturalny to jedno z najważniejszych wydarzeń w życiu szkoły. Maturzyści rocznika 2025/2026 pożegnali MLO Słupsk w wyjątkowej atmosferze. Wieczór pełen wspomnień, tańców i emocji — ostatni raz razem jako klasa.',
  },
  '2026-05-wycieczka-gdansk': {
    title: 'Wycieczka do Gdańska',
    description: 'Jednodniowa wycieczka klas mundurowych do Trójmiasta.',
    date: 'Maj 2026',
    longDescription: 'Klasy mundurowe odwiedziły Gdańsk i Gdynię. Program obejmował wizytę w Muzeum II Wojny Światowej, spacer po Starym Mieście oraz zwiedzanie okrętów wojennych w Gdyni.',
  },
  '2026-04-dzien-sportu': {
    title: 'Dzień Sportu',
    description: 'Zawody sportowe i rywalizacja między klasami.',
    date: 'Kwiecień 2026',
  },
  '2025-09-rozpoczecie-roku': {
    title: 'Rozpoczęcie roku szkolnego',
    description: 'Uroczyste rozpoczęcie roku szkolnego 2025/2026.',
    date: 'Wrzesień 2025',
  },
};
