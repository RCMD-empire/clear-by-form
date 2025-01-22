/* 
version: 2025.01.22
https://github.com/RCMD-empire/clear-by-form
@rcmd
*/
function spreadsheetExtractor(parameters) {
  const sheetName_TOBeCleared= "Clearable";
  const clearFormLogName = "Clear form log";
  const actionQuestionRow= 2;
  const submitterEmailRow= 3;
  const clearActionAnswer = "clear";
  const pingActionAnswer = "ping";
  const clearStartRow = 2;
  
  // get the spreadsheet where from this function called
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();

  //Debug: sheets names
  for (const sheet of sheets) 
  { console.log('name: %s, ID: %s',sheet.getName(),sheet.getSheetId()) }
  
  //define the nessesary sheets
  let clearsheet = spreadsheet.getSheetByName(sheetName_TOBeCleared);
  let logsheet= spreadsheet.getSheetByName(clearFormLogName);
  if (!clearsheet) {
    throw new Error('Sheet '+sheetName_TOBeCleared+' not found!');
  }
  if (!logsheet) {
    throw new Error('Sheet '+clearFormLogName+' not found!');
  }
  // init done here

  let lastRow = logsheet.getLastRow();
  let submittedaction = logsheet.getRange(lastRow,actionQuestionRow).getValue();
  console.log("Submitted action: "+submittedaction);
  let submitteremail = logsheet.getRange(lastRow,submitterEmailRow).getValue();
  console.log("Submitter email: "+submitteremail);

  switch (submittedaction.toString().toLowerCase()) {
    case pingActionAnswer:
      ping(submitteremail, logsheet, clearsheet, spreadsheet);
      break;
    case clearActionAnswer:
      clearing(clearStartRow,clearsheet);
      break;
    default:
      throw Error("Undefined action: "+submittedaction);
  }
}