import { useState } from "react";

const BOOKS = [
  [
    {p:"Język polski",z:"Podstawowy i rozszerzony",t:["NOWE Ponad słowami 1.1.","NOWE Ponad słowami 1.2."],a:"M. Chmiel, A. Cisowska, J. Kościerzyńska, H. Kusy, A. Wróblewska",w:"NOWA ERA"},
    {p:"Język angielski",z:"Podstawowy i rozszerzony",t:["Focus 2 (second edition) + zeszyt ćwiczeń"],a:"D. Brayshaw, S. Kay, V. Jones",w:"PEARSON"},
    {p:"Język niemiecki",z:"Podstawowy",t:["Welttour Deutsch Neu część 1 + ćwiczenia"],a:"S. Mróz-Dwornikowska, K. Szachowska",w:"NOWA ERA"},
    {p:"Plastyka",z:"Podstawowy",t:["Spotkania ze sztuką"],a:"N. Mrozkowiak, M. Ipczyńska-Budziak",w:"NOWA ERA"},
    {p:"Historia",z:"Podstawowy",t:["Poznać przeszłość 1. (Edycja 2024)"],a:"M. Pawlak, A. Szweda",w:"NOWA ERA"},
    {p:"Historia",z:"Rozszerzony (profil humanistyczny)",t:["Zrozumieć przeszłość 1. (Edycja 2024)"],a:"R. Kulesza, K. Kowalewski",w:"NOWA ERA"},
    {p:"Wiedza o społeczeństwie",z:"Rozszerzony (profil mundurowy i psychologiczny)",t:["W centrum uwagi 1."],a:"A. Janicki, J. Komorowski, A. Peisert",w:"NOWA ERA"},
    {p:"Geografia",z:"Podstawowy",t:["NOWE Oblicza geografii 1. Zakres podstawowy"],a:"R. Malarz, M. Więckowski",w:"NOWA ERA"},
    {p:"Geografia",z:"Rozszerzony (profil mundurowy)",t:["NOWE Oblicza geografii 1. Zakres rozszerzony"],a:"R. Malarz, M. Więckowski, P. Kroh",w:"NOWA ERA"},
    {p:"Biologia",z:"Podstawowy",t:["NOWA Biologia na czasie 1. Zakres podstawowy"],a:"A. Helmin, J. Holeczek",w:"NOWA ERA"},
    {p:"Biologia",z:"Rozszerzony (profil psychologiczny)",t:["NOWA Biologia na czasie 1. Zakres rozszerzony"],a:"A. Guzik, R. Kozik",w:"NOWA ERA"},
    {p:"Chemia",z:"Podstawowy",t:["NOWA To jest chemia 1. (Edycja 2024)"],a:"J. Mrzigod, A. Mrzigod, R. Hassa",w:"NOWA ERA"},
    {p:"Fizyka",z:"Podstawowy",t:["NOWE Odkryć fizykę 1. (Edycja 2024)"],a:"M. Braun, W. Śliwa",w:"NOWA ERA"},
    {p:"Matematyka",z:"Podstawowy i rozszerzony",t:["NOWA MATeMAtyka 1. (Edycja 2024)"],a:"W. Babiański, L. Chańko, J. Janowicz, D. Ponczek, E. Szmytkiewicz, K. Wej",w:"NOWA ERA"},
    {p:"Edukacja dla bezpieczeństwa",z:"Podstawowy",t:["Edukacja dla bezpieczeństwa"],a:"B. Boniek, A. Kruczyński",w:"OPERON"},
    {p:"Informatyka",z:"Podstawowy",t:["NOWA Informatyka na czasie 1. (Edycja 2024)"],a:"J. Mazur, P. Pierekietka, Z. Talaga, J. S. Wierzbicki",w:"NOWA ERA"},
    {p:"Biznes i zarządzanie",z:"Podstawowy",t:["Biznes i zarządzanie 1. Zakres podstawowy"],a:"J. Korba, Z. Smutek",w:"OPERON"},
    {p:"Język kaszubski",z:"Podstawowy",t:["Podręczniki zapewnia szkoła"],a:"",w:""},
  ],
  [
    {p:"Język polski",z:"Podstawowy i rozszerzony",t:["Sztuka wyrazu. Pozytywizm. Część 1","Sztuka wyrazu. Pozytywizm. Część 2"],a:"A. Równy, J. Kościerzyńska, A. Cisowska, A. Wróblewska, H. Kusy",w:"NOWA ERA"},
    {p:"Język angielski",z:"Podstawowy i rozszerzony",t:["Focus 3 (second edition) + zeszyt ćwiczeń"],a:"S. Kay, V. Jones, D. Brayshaw",w:"PEARSON"},
    {p:"Język niemiecki",z:"Podstawowy",t:["Welttour Deutsch Neu część 1 (kontynuacja)"],a:"S. Mróz-Dwornikowska",w:"NOWA ERA"},
    {p:"Historia",z:"Podstawowy",t:["Poznać przeszłość 2."],a:"A. Kucharski, A. Niewęgłowska",w:"NOWA ERA"},
    {p:"Historia",z:"Rozszerzony (profil humanistyczny)",t:["Zrozumieć przeszłość 2."],a:"P. Klint",w:"NOWA ERA"},
    {p:"Wiedza o społeczeństwie",z:"Rozszerzony (profil mundurowy i psychologiczny)",t:["W centrum uwagi 2."],a:"S. Drelich, A. Janicki, E. Martinek",w:"NOWA ERA"},
    {p:"Geografia",z:"Podstawowy",t:["Oblicza geografii 2."],a:"T. Rachwał",w:"NOWA ERA"},
    {p:"Geografia",z:"Rozszerzony (profil mundurowy)",t:["Oblicza geografii 2."],a:"T. Rachwał, W. Kilar",w:"NOWA ERA"},
    {p:"Biologia",z:"Podstawowy",t:["Biologia na czasie 2."],a:"A. Helmin, J. Holeczek",w:"NOWA ERA"},
    {p:"Biologia",z:"Rozszerzony (profil psychologiczny)",t:["Biologia na czasie 2."],a:"A. Guzik, R. Kozik",w:"NOWA ERA"},
    {p:"Chemia",z:"Podstawowy",t:["To jest chemia 1. (ten sam co w klasie 1)"],a:"R. Hassa",w:"NOWA ERA"},
    {p:"Fizyka",z:"Podstawowy",t:["Odkryć fizykę 2."],a:"M. Braun",w:"NOWA ERA"},
    {p:"Matematyka",z:"Podstawowy",t:["Nowa Matematyka 2. Zakres podstawowy"],a:"W. Babiański, L. Chańko",w:"NOWA ERA"},
    {p:"Biznes i zarządzanie",z:"Podstawowy",t:["Biznes i zarządzanie 2. Zakres podstawowy"],a:"Z. Smutek, J. Korba",w:"OPERON"},
    {p:"Informatyka",z:"Podstawowy",t:["Informatyka na czasie 2."],a:"J. Mazur, P. Pierekietka, Z. Talaga, J. S. Wierzbicki",w:"NOWA ERA"},
    {p:"Edukacja obywatelska",z:"Podstawowy",t:["Podręcznik zostanie podany we wrześniu na pierwszych zajęciach"],a:"",w:""},
  ],
  [
    {p:"Język polski",z:"Podstawowy i rozszerzony",t:["Ponad słowami 3. Część 1. (Edycja 2024)","Ponad słowami 3. Część 2. (Edycja 2024)"],a:"A. Równy, J. Ginter, J. Kościerzyńska, A. Cisowska, A. Wróblewska, M. Matecka",w:"NOWA ERA"},
    {p:"Język angielski",z:"Podstawowy i rozszerzony",t:["Repetytorium maturalne poz. podstawowy z rozszerzonym (2025)"],a:"S. Kay, V. Jones, R. Hastings",w:"PEARSON"},
    {p:"Język niemiecki",z:"Podstawowy",t:["Welttour Deutsch Neu część 2 + ćwiczenia"],a:"S. Mróz-Dwornikowska",w:"NOWA ERA"},
    {p:"Historia",z:"Podstawowy",t:["Poznać przeszłość 3."],a:"J. Kłaczkow, A. Łaszkiewicz, S. Roszak",w:"NOWA ERA"},
    {p:"Historia",z:"Rozszerzony (profil humanistyczny)",t:["Zrozumieć przeszłość 3."],a:"A. Niewęgłowska, T. Krzemiński",w:"NOWA ERA"},
    {p:"Wiedza o społeczeństwie",z:"Rozszerzony (profil psychologiczny i mundurowy)",t:["W centrum uwagi 3."],a:"S. Drelich, A. Janicki, J. Kięczkowska",w:"NOWA ERA"},
    {p:"Geografia",z:"Podstawowy",t:["Oblicza geografii 3."],a:"Opracowanie zbiorowe",w:"NOWA ERA"},
    {p:"Geografia",z:"Rozszerzony (profil mundurowy)",t:["Oblicza geografii 3."],a:"Opracowanie zbiorowe",w:"NOWA ERA"},
    {p:"Biologia",z:"Podstawowy",t:["Biologia na czasie 3."],a:"J. Holeczek",w:"NOWA ERA"},
    {p:"Biologia",z:"Rozszerzony (profil psychologiczny)",t:["Biologia na czasie 2. (kontynuacja z klasy 2)"],a:"A. Guzik, R. Kozik",w:"NOWA ERA"},
    {p:"Chemia",z:"Podstawowy",t:["To jest chemia 2. Chemia organiczna"],a:"R. Hassa",w:"NOWA ERA"},
    {p:"Fizyka",z:"Podstawowy",t:["Odkryć fizykę 3."],a:"M. Braun",w:"NOWA ERA"},
    {p:"Matematyka",z:"Podstawowy",t:["Matematyka 3."],a:"W. Babiański, L. Chańko, J. Czarnowska, G. Janocha, J. Wesołowska",w:"NOWA ERA"},
    {p:"Matematyka",z:"Rozszerzony (profil ogólny)",t:["Do uzgodnienia z nauczycielem na pierwszych zajęciach"],a:"",w:""},
    {p:"Informatyka",z:"Podstawowy",t:["Informatyka na czasie 3."],a:"J. Mazur, P. Pierekietka, Z. Talaga, J. S. Wierzbicki",w:"NOWA ERA"},
  ],
  [
    {p:"Język polski",z:"Podstawowy i rozszerzony",t:["Język polski 4. Sztuka wyrazu."],a:"D. Dąbrowska, E. Prylińska, C. Ratajczak, A. Regiewicz",w:"GWO"},
    {p:"Język angielski",z:"Podstawowy i rozszerzony",t:["Repetytorium maturalne. Poziom podstawowy z materiałem rozszerzonym"],a:"S. Kay, V. Jones, R. Hastings",w:"PEARSON"},
    {p:"Język niemiecki",z:"Podstawowy",t:["Welttour Deutsch Neu część 2 (kontynuacja) + ćwiczenia"],a:"S. Mróz-Dwornikowska",w:"NOWA ERA"},
    {p:"Historia",z:"Podstawowy",t:["Poznać przeszłość 4."],a:"J. Kłaczkow, S. Roszak",w:"NOWA ERA"},
    {p:"Historia",z:"Rozszerzony (profil humanistyczny)",t:["Zrozumieć przeszłość 4."],a:"R. Śniegocki, A. Zielińska",w:"NOWA ERA"},
    {p:"Wiedza o społeczeństwie",z:"Rozszerzony (profil psychologiczny i mundurowy)",t:["W centrum uwagi 4."],a:"L. Czechowska, S. Drelich",w:"NOWA ERA"},
    {p:"Geografia",z:"Rozszerzony (profil mundurowy)",t:["Oblicza geografii 4."],a:"T. Rachwał, Cz. Adamiak",w:"NOWA ERA"},
    {p:"Matematyka",z:"Podstawowy",t:["Matematyka 4."],a:"W. Babiański, L. Chańko, J. Czarnowska, J. Wesołowska",w:"NOWA ERA"},
    {p:"Biologia",z:"Rozszerzony (profil psychologiczny)",t:["Biologia 3."],a:"F. Dubert, M. Guzik, A. Helmin",w:"NOWA ERA"},
  ],
];

const TABS = ["Klasa I","Klasa II","Klasa III","Klasa IV"];
const PDFS = [
  "/dokumenty/spis_podrecznikow_do_klasy_1_2025.pdf",
  "/dokumenty/spis_podrecznikow_do_klasy_2_2025.pdf",
  "/dokumenty/spis_podrecznikow_do_klasy_3_2025.pdf",
  "/dokumenty/spis_podrecznikow_do_klasy_4_2025.pdf",
];

export default function Podreczniki() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div style={{display:"flex",gap:".5rem",marginBottom:"2rem",flexWrap:"wrap"}} role="tablist" aria-label="Klasy">
        {TABS.map((t,i) => (
          <button key={t}
            className={`tab-btn ${tab===i?"on":""}`}
            onClick={() => setTab(i)}
            role="tab"
            aria-selected={tab===i}
          >{t}</button>
        ))}
      </div>

      {BOOKS.map((list,i) => tab===i && (
        <div key={i}>
          <div style={{overflowX:"auto",borderRadius:16,border:"1.5px solid #ebebeb",marginBottom:"1.5rem"}}>
          <div style={{minWidth:"700px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr 2fr .8fr",background:"#01214F",padding:".75rem 1.25rem",gap:"1rem"}}>
              {["Przedmiot","Zakres","Tytuł / Autorzy","Wydawnictwo"].map(h=>(
                <div key={h} style={{fontSize:".82rem",fontWeight:700,color:"rgba(255,255,255,.85)",letterSpacing:".04em",textTransform:"uppercase"}}>{h}</div>
              ))}
            </div>
            {list.map((b,j) => (
              <div key={j} style={{display:"grid",gridTemplateColumns:"1.4fr 1fr 2fr .8fr",padding:".9rem 1.25rem",gap:"1rem",borderBottom:"1px solid #f0f0f0",background:j%2===0?"#fff":"#fafafa",alignItems:"start"}}>
                <div style={{fontWeight:700,fontSize:".88rem",color:"#01214F"}}>{b.p}</div>
                <div style={{fontSize:".78rem",color:"#767676",lineHeight:1.4}}>{b.z}</div>
                <div>
                  {b.t.map(tyt=><div key={tyt} style={{fontSize:".85rem",color:"#333",fontWeight:500,marginBottom:".15rem"}}>{tyt}</div>)}
                  <div style={{fontSize:".75rem",color:"#767676",marginTop:".2rem"}}>{b.a}</div>
                </div>
                <div style={{fontSize:".78rem",fontWeight:600,color:"#01214F"}}>{b.w}</div>
              </div>
            ))}
          </div></div>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <a href={PDFS[i]} style={{display:"inline-flex",alignItems:"center",gap:8,background:"#01214F",color:"#fff",padding:".8rem 1.75rem",borderRadius:10,fontWeight:700,fontSize:".88rem",textDecoration:"none"}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Pobierz PDF
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
