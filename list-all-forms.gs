function listLinkedForms() {
  
  // get the spreadsheet where from this function called
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();

  //Debug: sheets names
  for (const sheet of sheets) 
  { 
    console.log('Sheet name: %s, ID: %s',sheet.getName(),sheet.getSheetId());
    let formUrl = sheet.getFormUrl();
    console.log('Form URL: %s',formUrl);
    if (formUrl) {
    // Get the form object
    const form = FormApp.openByUrl(formUrl);
    const formName = form.getTitle();
    const formId = form.getId();
    
    Logger.log(`Linked Form: ${formName}`);
    Logger.log(`Form ID: ${formId}`);
    
    } else {
      Logger.log("No linked forms found for this spreadsheet.");
    }
  }
}
