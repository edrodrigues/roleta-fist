# Roleta FIST

Landing page de captura de leads para a Fist: o visitante preenche seus dados e gira uma roleta de prêmios (descontos na fatura, alguns nada) para desbloquear uma condição especial.

## Stack

- React + Vite
- Google Apps Script como backend (grava os leads direto numa planilha Google Sheets)

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Configuração do envio de leads

Os leads são enviados para uma planilha Google Sheets via um Web App do Apps Script.

1. Abra a planilha de destino → **Extensões → Apps Script**.
2. Cole o conteúdo de [google-apps-script.gs](google-apps-script.gs) no editor.
3. Implante como **Web App** (execução como você, acesso para qualquer pessoa) e copie a URL gerada.
4. Copie `.env.example` para `.env` e preencha `VITE_SHEET_ENDPOINT_URL` com essa URL.

Sem essa variável configurada, o resultado do giro ainda funciona normalmente, mas o lead não é enviado para a planilha (fica só salvo no `localStorage` do navegador).

## Estrutura

```
src/
  components/   # Header, LeadForm, Wheel, ResultCard, Steps, Prizes, Footer
  data/         # prizes.js — configuração dos prêmios/fatias da roleta
  lib/          # roleta.js (validação/regras), submitLead.js (envio do lead)
google-apps-script.gs  # código do backend (roda dentro do Google Sheets, não faz parte do build)
```
