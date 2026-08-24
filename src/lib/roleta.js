export function contaVal(conta) {
  return parseFloat(String(conta).replace(/\./g, "").replace(",", ".")) || 0;
}

export function isValid(lead) {
  return lead.nome.trim().length >= 3
    && /\S+@\S+\.\S+/.test(lead.email.trim())
    && lead.zap.replace(/\D/g, "").length >= 10
    && contaVal(lead.conta) > 0;
}

export function money(v) {
  return "R$ " + (v || 0).toFixed(2).replace(".", ",");
}

export function savingsText(result, lead) {
  if (!result || result.kind === "nada") return "";
  const v = contaVal(lead.conta);
  if (!v) return "";
  const pct = parseFloat(result.short) || 0;
  const val = (v * pct) / 100;
  return result.kind === "life"
    ? "≈ " + money(val) + " por mês, em todas as faturas"
    : "≈ " + money(val) + " de abatimento na 1ª fatura";
}
