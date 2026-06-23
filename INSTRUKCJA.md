# Instrukcja obsługi strony MLO Słupsk

## Wymagania

Konto GitHub z dostępem do repozytorium szkoły. W razie problemów kontakt z Orionomia: orionomia@gmail.com

---

## Ważne zasady przed rozpoczęciem

**Nazwy plików i folderów:**
Używaj wyłącznie małych liter, cyfr i myślników. Unikaj polskich znaków i spacji — zamiast `Święto Niepodległości.jpg` wpisz `swieto-niepodleglosci.jpg`. GitHub i przeglądarka mogą mieć problem z polskimi znakami w adresach URL.

**Rozmiar zdjęć:**
Przed wgraniem skompresuj zdjęcia — strona będzie ładować się znacznie szybciej. Darmowe narzędzie online: **squoosh.app** — wejdź na stronę, przeciągnij zdjęcie, ustaw jakość na 80% i pobierz. Docelowy rozmiar to 200-500 KB na zdjęcie. Zdjęcia z telefonu lub aparatu często mają 3-8 MB — to za dużo dla strony internetowej.

---

## 1. Jak dodać aktualność

1. Wejdź na github.com i zaloguj się
2. Otwórz repozytorium MLO Słupsk
3. Kliknij plik `src/data.ts`
4. Kliknij ikonę ołówka (Edytuj) w prawym górnym rogu
5. Znajdź sekcję `export const NEWS = [`
6. Po nawiasie `[` dodaj nowy wpis:

```typescript
{
  date: '11.11.2026',
  cat: 'Uroczystości',
  hot: true,
  title: 'Święto Niepodległości 2026',
  body: 'Zapraszamy na uroczystości z okazji Święta Niepodległości.',
  link: null,
},
```

7. Kliknij zielony przycisk "Commit changes"
8. Kliknij ponownie "Commit changes" w okienku które się pojawi
9. Strona zaktualizuje się w ciągu 2-3 minut

**Uwagi:**
- Tylko jedna aktualność może mieć `hot: true` — oznacza wyróżnioną aktualność z etykietą "Nowe ●"
- Na stronie głównej wyświetlają się tylko 3 pierwsze aktualności — najstarsze można usunąć
- `link` może być `null` (brak linku), `/rekrutacja` (link do podstrony) lub `"https://zewnętrzna-strona.pl"` (link zewnętrzny)

---

## 2. Jak dodać zdjęcia do galerii

1. Wejdź na github.com i zaloguj się
2. Otwórz repozytorium MLO Słupsk
3. Wejdź do folderu `public/galeria/`
4. Kliknij "Add file" → "Upload files"
5. W polu u góry wpisz nazwę nowego folderu np. `2026-11-swieto-niepodleglosci/` — ukośnik na końcu tworzy folder
6. Przeciągnij zdjęcia z komputera
7. Jedno zdjęcie nazwij `cover.jpg` — będzie okładką kafla w galerii
8. Kliknij zielony przycisk "Commit changes"
9. Kliknij ponownie "Commit changes" w okienku które się pojawi
10. Kafel z wydarzeniem pojawi się w galerii automatycznie w ciągu 2-3 minut

**Zasady nazewnictwa folderu:** rok-miesiąc-nazwa, np. `2026-11-swieto-niepodleglosci`. Bez polskich znaków, bez spacji, bez wielkich liter.

**Kolejność zdjęć:** zdjęcia wyświetlają się alfabetycznie. Jeśli zależy Ci na kolejności — nazwij je `001.jpg`, `002.jpg`, `003.jpg`.

**Limit:** maksymalnie 100 zdjęć naraz przez interfejs GitHub — przy większej liczbie wgrywaj partiami.

---

## 3. Jak usunąć aktualność

1. Otwórz `src/data.ts`
2. Kliknij ikonę ołówka
3. Znajdź wpis który chcesz usunąć i usuń cały blok od `{` do `},`
4. Kliknij "Commit changes" dwa razy

---

## 4. Jak usunąć wydarzenie z galerii

1. Wejdź do `public/galeria/`
2. Otwórz folder `2026-11-swieto-niepodleglosci/`
3. Dla każdego pliku kliknij ikonę kosza i zatwierdź
4. Po usunięciu wszystkich plików folder zniknie automatycznie

---

## 5. Jak cofnąć błędną zmianę

1. Otwórz plik który zepsułeś
2. Kliknij "History" (historia) w prawym górnym rogu
3. Kliknij wersję sprzed błędu
4. Kliknij ikonę `<>` (Browse files)
5. Otwórz plik i kliknij ołówek
6. Skopiuj całą zawartość
7. Wróć do aktualnej wersji pliku i wklej poprawną treść
8. Commit changes

---

## 6. Strona nie zaktualizowała się po 5 minutach

1. Wejdź do repozytorium
2. Kliknij zakładkę "Actions"
3. Jeśli widzisz czerwoną ikonę — kliknij ją i przeczytaj błąd
4. Najczęstszy powód — błąd w pliku `data.ts` (brakujący przecinek lub cudzysłów)
5. Cofnij zmianę zgodnie z punktem 5 lub skontaktuj się z Orionomia: orionomia@gmail.com
