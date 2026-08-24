export default function ResultCard({ result, savings, onReset }) {
  if (!result) return null;
  return (
    <div id="result-card" className="result-card">
      <div id="result-eyebrow" className="result-eyebrow">{result.eyebrow}</div>
      <div id="result-title" className="result-title">{result.title}</div>
      <div id="result-desc" className="result-desc">{result.desc}</div>
      {savings && <div id="result-savings" className="result-savings">{savings}</div>}
      <button id="btn-reset" type="button" className="btn-ghost-gold" onClick={onReset}>
        Ver estado inicial
      </button>
    </div>
  );
}
