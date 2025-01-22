/* 
version: 2025.01.22
https://github.com/RCMD-empire/clear-by-form
@rcmd
*/
function clearing(clearStartRow,clearsheet) {
  let lastRow = clearsheet.getLastRow();
  if (clearStartRow <= lastRow) {
    // Clear rows from the specified clearStartRow to the last row
    clearsheet.getRange(clearStartRow, 1, lastRow - clearStartRow + 1, clearsheet.getLastColumn()).clearContent();
    Logger.log(`Cleared rows from ${clearStartRow} to ${lastRow}`);
  } 
  else {
    Logger.log(`No rows to clear from row ${clearStartRow}.`);
  }
}
