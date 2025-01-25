/* 
version: 2025.01.22
https://github.com/RCMD-empire/clear-by-form
@rcmd
*/
function clearing(clearStartRow,clearsheet) {
  let lastRow = clearsheet.getLastRow();
  if (clearStartRow <= lastRow) {
    clearsheet.deleteRows(clearStartRow, (lastRow-clearStartRow+1));
    Logger.log(`Deleted rows from ${clearStartRow} to ${lastRow}`);
  } 
  else {
    Logger.log(`No rows to delete from row ${clearStartRow}.`);
  }
}
