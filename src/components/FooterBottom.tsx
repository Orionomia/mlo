import { FileText, ShieldCheck, Smartphone } from "lucide-react";

interface Props {
  onPolityka: () => void;
  onDeklaracja: () => void;
}

export default function FooterBottom({ onPolityka, onDeklaracja }: Props) {
  return (
    <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"1.5rem"}}>
      <button onClick={onPolityka} style={{display:"flex",alignItems:"center",gap:5,background:"none",border:"none",fontSize:".73rem",color:"rgba(255,255,255,.32)",cursor:"pointer",padding:0,fontFamily:"inherit",transition:"color .2s"}}
        onMouseEnter={e=>e.currentTarget.style.color="rgba(255,255,255,.6)"}
        onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.32)"}
      >
        <FileText size={12}/>Polityka prywatności i cookies
      </button>
      <button onClick={onDeklaracja} style={{display:"flex",alignItems:"center",gap:5,background:"none",border:"none",fontSize:".73rem",color:"rgba(255,255,255,.32)",cursor:"pointer",padding:0,fontFamily:"inherit",transition:"color .2s"}}
        onMouseEnter={e=>e.currentTarget.style.color="rgba(255,255,255,.6)"}
        onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.32)"}
      >
        <ShieldCheck size={12}/>Deklaracja dostępności
      </button>
      <div style={{display:"flex",alignItems:"center",gap:5,fontSize:".73rem",color:"rgba(255,255,255,.32)"}}>
        <Smartphone size={12}/>Strona dostępna jako aplikacja PWA na telefon
      </div>
    </div>
  );
}
