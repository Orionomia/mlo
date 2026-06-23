import { useState } from "react";
import {
  Shield, Flame, Award, GraduationCap, Star, Camera,
  Zap, Users, Heart, MapPin, Globe, Building
} from "lucide-react";

const ITEMS = [
  { cat: 1, Icon: Shield,       ic: "#059669", bg: "#ecfdf5", t: "Zajęcia terenowe",   d: "Klasa policyjna" },
  { cat: 1, Icon: Flame,        ic: "#dc2626", bg: "#fef2f2", t: "Ćwiczenia gaśnicze", d: "Klasa pożarnicza" },
  { cat: 1, Icon: Award,        ic: "#475569", bg: "#f8fafc", t: "Apel wojskowy",       d: "Klasa wojskowa" },
  { cat: 2, Icon: GraduationCap,ic: "#E2A62D", bg: "#fff3e0", t: "Studniówka 2025",    d: "100 dni do matury" },
  { cat: 2, Icon: Star,         ic: "#7c3aed", bg: "#f5f3ff", t: "Pożegnanie klas",    d: "Ostatni dzwonek" },
  { cat: 2, Icon: Camera,       ic: "#0891b2", bg: "#ecfeff", t: "Po maturze",          d: "Absolwenci" },
  { cat: 3, Icon: Zap,          ic: "#d97706", bg: "#fffbeb", t: "Festiwal talentów",  d: "Coroczny przegląd" },
  { cat: 3, Icon: Users,        ic: "#2563eb", bg: "#eff6ff", t: "Turniej sportowy",    d: "Klasy vs klasy" },
  { cat: 3, Icon: Heart,        ic: "#e11d48", bg: "#fff1f2", t: "Spektakl teatralny", d: "Klasa filmowa" },
  { cat: 4, Icon: MapPin,       ic: "#059669", bg: "#ecfdf5", t: "Tatry 2024",          d: "Wycieczka górska" },
  { cat: 4, Icon: Globe,        ic: "#0891b2", bg: "#ecfeff", t: "Bałtyk",             d: "Wycieczka nadmorska" },
  { cat: 4, Icon: Building,     ic: "#7c3aed", bg: "#f5f3ff", t: "Gdańsk",             d: "Historia Trójmiasta" },
];

const CATS = ["Wszystkie", "Mundurowe", "Matura", "Eventy", "Wycieczki"];

export default function Gallery() {
  const [cat, setCat] = useState(0);
  const shown = cat === 0 ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <div>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
        {CATS.map((c, i) => (
          <button
            key={c}
            onClick={() => setCat(i)}
            style={{
              padding: ".55rem 1.2rem",
              borderRadius: "100px",
              fontSize: ".78rem",
              fontWeight: 600,
              border: `1.5px solid ${cat === i ? "#01214F" : "#e5e5e5"}`,
              background: cat === i ? "#01214F" : "#fff",
              color: cat === i ? "#fff" : "#767676",
              cursor: "pointer",
              transition: "all .2s",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
        gap: "1.25rem",
      }}>
        {shown.map((p, i) => {
          const Ic = p.Icon;
          return (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1.5px solid #ebebeb",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(1,33,79,.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ background: p.bg, height: 130, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 60, height: 60, background: "#fff",
                  borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 4px 18px ${p.ic}25`,
                }}>
                  <Ic size={28} color={p.ic} />
                </div>
              </div>
              <div style={{ padding: "1rem 1.25rem" }}>
                <div style={{ fontWeight: 700, fontSize: ".88rem", color: "#01214F", marginBottom: ".2rem" }}>{p.t}</div>
                <div style={{ fontSize: ".75rem", color: "#767676" }}>{p.d}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
