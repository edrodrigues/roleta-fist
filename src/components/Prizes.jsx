export default function Prizes() {
  return (
    <section className="prizes" id="premios">
      <div className="prizes-head">
        <h2>As 11 fatias</h2>
        <span>Probabilidade igual em todas</span>
      </div>
      <div className="prizes-grid">
        <div className="prizes-col">
          <div className="prize-row"><span className="muted">Nada</span><span className="muted">—</span></div>
          <div className="prize-row"><span>10% a mais de desconto</span><span className="gold">1ª fatura</span></div>
          <div className="prize-row"><span>20% a mais de desconto</span><span className="gold">1ª fatura</span></div>
          <div className="prize-row"><span>30% a mais de desconto</span><span className="gold">1ª fatura</span></div>
          <div className="prize-row"><span>40% a mais de desconto</span><span className="gold">1ª fatura</span></div>
          <div className="prize-row prize-row-last"><span>50% a mais de desconto</span><span className="gold">1ª fatura</span></div>
        </div>
        <div className="prizes-col">
          <div className="prize-row"><span className="muted">Nada</span><span className="muted">—</span></div>
          <div className="prize-row"><span>1% a mais de desconto</span><span className="teal">todas as futuras</span></div>
          <div className="prize-row"><span>2% a mais de desconto</span><span className="teal">todas as futuras</span></div>
          <div className="prize-row"><span>3% a mais de desconto</span><span className="teal">todas as futuras</span></div>
          <div className="prize-row"><span className="muted">Nada</span><span className="muted">—</span></div>
          <div className="prize-row prize-row-note">Descontos por fatura não acumulam entre si; o percentual vitalício acumula com eles.</div>
        </div>
      </div>
    </section>
  );
}
