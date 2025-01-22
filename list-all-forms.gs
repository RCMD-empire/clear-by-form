function listLinkedForms() {
  // Open the active spreadsheet
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the form URL associated with the spreadsheet
  const formUrl = spreadsheet.getFormUrl());
  
  if (formUrl) {
    // Get the form object
    const form = FormApp.openByUrl(formUrl);
    const formName = form.getTitle();
    const formId = form.getId();
    
    Logger.log(`Linked Form: ${formName}`);
    Logger.log(`Form ID: ${formId}`);
    
    // Output to the user
    SpreadsheetApp.getUi().alert(`Linked Form:\nName: ${formName}\nID: ${formId}`);
  } else {
    Logger.log("No linked forms found for this spreadsheet.");
    SpreadsheetApp.getUi().alert("No linked forms found for this spreadsheet.");
  }
}
