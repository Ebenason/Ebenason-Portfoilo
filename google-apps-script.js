function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('17OSgkbmqtCJf26Qz5PLWIjvbKmOpqsM7X8YfHlTQJ00').getActiveSheet()
    sheet.appendRow([
      new Date(),
      e.parameter.fullName,
      e.parameter.email,
      e.parameter.subject,
      e.parameter.message
    ])
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'alive' }))
    .setMimeType(ContentService.MimeType.JSON)
}
