import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import LeadForm from "./components/LeadForm.jsx";
import Wheel from "./components/Wheel.jsx";
import ResultCard from "./components/ResultCard.jsx";
import Steps from "./components/Steps.jsx";
import Prizes from "./components/Prizes.jsx";
import Footer from "./components/Footer.jsx";
import { prizes, SEG } from "./data/prizes.js";
import { isValid, savingsText } from "./lib/roleta.js";
import { submitLead } from "./lib/submitLead.js";

const SPIN_SECONDS = 4.2;
const RESULT_CLEAR_SECONDS = 10;
const EMPTY_LEAD = { nome: "", email: "", zap: "", conta: "" };

export default function App() {
  const [lead, setLead] = useState(EMPTY_LEAD);
  const [rot, setRot] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | spinning | result
  const [result, setResult] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const timeoutRef = useRef(null);
  const clearLeadRef = useRef(null);

  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(clearLeadRef.current);
  }, []);

  const ok = isValid(lead);
  const locked = hasSpun || phase === "spinning";

  function handleChange(key, value) {
    setLead((l) => ({ ...l, [key]: value }));
  }

  function spin() {
    if (phase === "spinning" || hasSpun || !ok) return;
    const i = Math.floor(Math.random() * prizes.length);
    const center = i * SEG + SEG / 2;
    setRot((prevRot) => {
      const needed = ((-center - prevRot) % 360 + 360) % 360;
      return prevRot + 360 * 4 + needed;
    });
    setPhase("spinning");
    setDismissed(false);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setPhase("result");
      setResult(prizes[i]);
      setHasSpun(true);
      submitLead(lead, prizes[i]);

      clearTimeout(clearLeadRef.current);
      clearLeadRef.current = setTimeout(() => {
        setLead(EMPTY_LEAD);
      }, RESULT_CLEAR_SECONDS * 1000);
    }, SPIN_SECONDS * 1000 + 220);
  }

  function reset() {
    setDismissed(true);
    clearTimeout(clearLeadRef.current);
    setLead(EMPTY_LEAD);
  }

  let hubCta = "DADOS";
  let hint = "Preencha os quatro campos para\ndesbloquear o giro.";
  let hintOk = false;
  if (phase === "spinning") {
    hubCta = "···";
    hint = "Girando…";
  } else if (hasSpun) {
    hubCta = "FEITO";
    hint = "Giro já utilizado neste cadastro.";
    hintOk = true;
  } else if (ok) {
    hubCta = "GIRAR";
    hint = "Tudo certo. A roleta está liberada.";
    hintOk = true;
  }

  const showResult = phase === "result" && !dismissed;

  return (
    <>
      <Header />
      <main id="topo">
        <section className="hero">
          <LeadForm
            lead={lead}
            onChange={handleChange}
            hint={hint}
            hintOk={hintOk}
            onSpin={spin}
            spinDisabled={!ok || locked}
          />
          <div className="hero-right">
            <Wheel rot={rot} ctaLabel={hubCta} disabled={!ok || locked} onSpin={spin} />
            {showResult && (
              <ResultCard result={result} savings={savingsText(result, lead)} onReset={reset} />
            )}
          </div>
        </section>
        <Steps />
        <Prizes />
        <Footer />
      </main>
    </>
  );
}
