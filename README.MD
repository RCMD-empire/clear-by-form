clear-by-form script

Script to clear a (Google Spreadsheet's) specific sheet's table, filled with data. Its useful if you need to clear it, but dont have / couldnt have Editor access to it.

Technical stuffs
- written in Google AppScript
- Need a G. Form for input
- linked with G. Spreadsheet
- the script must tied to the Spreadsheet
- configure the Spreadsheet correctly (check the template code and the template excel file)

Use-cases
- if you dont have direct Edit access to the spreasheet, but need to delete the an another Forms inputs sometimes.

Recommendation
- If you use this multiple times, then
- Put the base code to an independent Script Project,
- link it to each Spreadsheet's srcipts editor as a library,
- in there, just use the orifinal script template, configure it,
- and call the Base code's function.
- Test it before using in 'production'
- Deploy the scripts for do not get it modified accidently.

Project OAuth Scopes
- Read, compose, send, and permanently delete all your email from Gmail	https://mail.google.com/
- View and manage your forms in Google Drive	https://www.googleapis.com/auth/forms
- See, edit, create, and delete all your Google Sheets spreadsheets	https://www.googleapis.com/auth/spreadsheets