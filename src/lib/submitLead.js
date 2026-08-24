import { contaVal } from "./roleta.js";

// Configure VITE_SHEET_ENDPOINT_URL em um arquivo .env (veja .env.example)
// com a URL do Web App do Apps Script (google-apps-script.gs).
const SHEET_ENDPOINT_URL = import.meta.env.VITE_SHEET_ENDPOINT_URL;

export function submitLead(lead, result) {
  try {
    const entries = JSON.parse(localStorage.getItem("fist_leads") || "[]");
    entries.push({ lead, result: result.short, at: new Date().toISOString() });
    localStorage.setItem("fist_leads", JSON.stringify(entries));
  } catch (e) {}
  console.log("[Fist] lead capturado", lead, result);

  if (!SHEET_ENDPOINT_URL) return;
  fetch(SHEET_ENDPOINT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      nome: lead.nome,
      email: lead.email,
      conta: contaVal(lead.conta),
      resultado: result.title
    })
  }).catch(() => {});
}
