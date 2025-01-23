/* 
version: 2025.01.23
https://github.com/RCMD-empire/clear-by-form
@rcmd
*/
function spreadsheetExtractor(parameters) {
  const sheetName_TOBeCleared= parameters.sheetName_TOBeCleared;
  const clearFormLogName = parameters.clearFormLogName;
  const actionQuestionRow= parameters.actionQuestionRow;
  const submitterEmailRow= parameters.submitterEmailRow;
  const clearActionAnswer = parameters.clearActionAnswer;
  const pingActionAnswer = parameters.pingActionAnswer;
  const clearStartRow = parameters.clearStartRow;
  const checkboxHeaderCellName = parameters.checkboxHeaderCellName;


  
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
  // init is done here

  let lastRow = logsheet.getLastRow();

  // checkbox things
  const checkboxHeaderCell = logsheet.getRange(checkboxHeaderCellName);
  const checkboxHeaderText= checkboxHeaderCell.getValue();
  const checkboxColumn = checkboxHeaderCell.getColumn();
  var checkboxCell = logsheet.getRange(lastRow,checkboxColumn);
  var isDone = checkboxCell.getValue();
  Logger.log("Checkbox is: %s",isDone);

  let submittedaction = logsheet.getRange(lastRow,actionQuestionRow).getValue();
  console.log("Submitted action: "+submittedaction);
  let submitteremail = logsheet.getRange(lastRow,submitterEmailRow).getValue();
  console.log("Submitter email: "+submitteremail);
  
  let retAction = 0; 
  // 0: nothing happened, '-1': undefined action. Otherwise returns the custom action name.

  //if undifined, nonexistent, or just false -> it's our turn to precced.
  if (isDone != true)
  {
    if (isDone == checkboxHeaderText)
    {
      console.log("Empty input table");
    }
    else
    {
      retAction= submittedaction;
      switch (submittedaction.toString().toLowerCase()) {
        case pingActionAnswer:
          ping(submitteremail, logsheet, clearsheet, spreadsheet);
          break;
        case clearActionAnswer:
          clearing(clearStartRow,clearsheet);
          break;
        default:
          retAction = -1;
          throw Error("Undefined action: "+submittedaction);
      }
    }
    checkboxCell.setValue(true);
  }
  let returner = {submitteremail,retAction};
  return returner;
}