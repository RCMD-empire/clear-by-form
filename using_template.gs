/* 
version: 2025.01.23
https://github.com/RCMD-empire/clear-by-form
@rcmd
*/
let parameters = {

// configure these paramters
sheetName_TOBeCleared: "Clearable",
clearFormLogName: "Clear form log",
actionQuestionRow: 2,
submitterEmailRow: 3,
clearActionAnswer: "clear",
pingActionAnswer: "ping",
clearStartRow: 2,
checkboxHeaderCellName: "D1"
};

function myFunction() {
  let returnValue = spreadsheetExtractor(parameters);
  console.log("Returned: email: %s, Action: %d",returnValue.submitteremail,returnValue.retAction);
}
