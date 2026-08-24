const STEPS = [
  { num: "01", title: "Você se apresenta", desc: "Nome, e-mail, WhatsApp e o valor médio da sua conta de luz. É o que libera o giro." },
  { num: "02", title: "Gira a roleta", desc: "Um giro por cadastro. O resultado aparece na hora, sem sorteio depois." },
  { num: "03", title: "Cai na fatura", desc: "O abatimento entra automaticamente no boleto, já com o valor novo." }
];

export default function Steps() {
  return (
    <section className="steps" id="como-funciona">
      {STEPS.map((s) => (
        <div className="step" key={s.num}>
          <div className="step-num">{s.num}</div>
          <div className="step-title">{s.title}</div>
          <div className="step-desc">{s.desc}</div>
        </div>
      ))}
    </section>
  );
}
