import { prizes, SEG, SLICE_TEXT_COLOR } from "../data/prizes.js";

export default function Wheel({ rot, ctaLabel, disabled, onSpin }) {
  return (
    <div className="wheel-wrap">
      <div className="wheel-pointer"></div>
      <div id="wheel" className="wheel" style={{ transform: `rotate(${rot}deg)` }}>
        <div className="wheel-labels">
          {prizes.map((p, i) => (
            <div
              key={i}
              className="wheel-label-slot"
              style={{ transform: `rotate(${i * SEG + SEG / 2}deg)` }}
            >
              <span style={{ color: SLICE_TEXT_COLOR[p.kind] }}>{p.short}</span>
            </div>
          ))}
        </div>
      </div>
      <button id="btn-spin-hub" type="button" className="wheel-hub" disabled={disabled} onClick={onSpin}>
        <span id="hub-cta">{ctaLabel}</span>
        <span className="hub-sub">FIST</span>
      </button>
    </div>
  );
}
