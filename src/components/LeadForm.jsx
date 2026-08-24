export default function LeadForm({ lead, onChange, hint, hintOk, onSpin, spinDisabled }) {
  return (
    <div className="hero-left">
      <div className="badge">
        <span className="badge-dot"></span>
        <span>Campanha de estreia · 1 giro por cadastro</span>
      </div>

      <h1>
        Gire uma vez.<br />
        Pague menos<br />
        <span className="gold">até o fim.</span>
      </h1>

      <p className="lede">
        Onze fatias, um giro. Pode sair desconto nas próximas faturas — ou um
        abatimento que fica em <strong>todas as suas faturas futuras</strong>.
        Sim, para sempre.
      </p>

      <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
        <div className="lead-form-head">
          <span>Passo 1 · seus dados</span>
          <span className="lead-form-hint">libera 1 giro</span>
        </div>
        <div className="lead-form-grid">
          <input
            id="f-nome"
            type="text"
            placeholder="Nome completo"
            autoComplete="name"
            className="span2"
            value={lead.nome}
            onChange={(e) => onChange("nome", e.target.value)}
          />
          <input
            id="f-email"
            type="email"
            placeholder="E-mail"
            autoComplete="email"
            value={lead.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <input
            id="f-zap"
            type="tel"
            placeholder="WhatsApp"
            autoComplete="tel"
            value={lead.zap}
            onChange={(e) => onChange("zap", e.target.value)}
          />
          <div className="money-field span2">
            <span className="money-prefix">R$</span>
            <input
              id="f-conta"
              type="text"
              placeholder="Valor médio da conta de luz"
              inputMode="decimal"
              value={lead.conta}
              onChange={(e) => onChange("conta", e.target.value)}
            />
          </div>
        </div>
      </form>

      <div className="cta-row">
        <button id="btn-spin-panel" type="button" className="btn-primary" disabled={spinDisabled} onClick={onSpin}>
          Girar a roleta
        </button>
        <span id="hint" className={"hint-text" + (hintOk ? " hint-ok" : "")}>{hint}</span>
      </div>

      <div className="pill-row">
        <span className="pill pill-gold">10% a 50% na 1ª fatura</span>
        <span className="pill pill-teal">+1% a +3% para sempre</span>
        <span className="pill pill-muted">3 fatias vazias — jogo é jogo</span>
      </div>
    </div>
  );
}
