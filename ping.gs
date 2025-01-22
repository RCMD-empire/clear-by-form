/* 
version: 2025.01.22
https://github.com/RCMD-empire/clear-by-form
@rcmd
*/
function ping(submitteremail, logsheet, clearsheet, spreadsheet) {
  let recipient = submitteremail;
  let subject = "Ping - clear by form Script";
  let emailBody = `
    <h2>Pinged successfully!</h2>
    <p>Used form linked to "${logsheet.getName()}" sheet, clears "${clearsheet.getName()}" sheet.</p>
    <p> Localated in <a href="${spreadsheet.getUrl()}" target="_blank">${spreadsheet.getName()}</a> Spreadsheet.</p>
    <p>by clear by form Script<br>@rcmd</p>
  `;
  // Send the email
  GmailApp.sendEmail(recipient, subject, "", { htmlBody: emailBody });
  
  console.log("Ping email sent successfully to "+submitteremail);
}
