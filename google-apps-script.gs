/**
 * Cole este código no editor de Apps Script da planilha
 * (Extensões → Apps Script) e implante como Web App.
 * Não faz parte do site — é o código que roda dentro do Google Sheets.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),           // A: Timestamp
    data.nome || "",      // B: Nome
    data.email || "",     // C: Email
    data.celular || "",   // D: Celular / WhatsApp
    data.conta || "",     // E: Valor médio da conta
    data.resultado || ""  // F: Resultado da roleta
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}