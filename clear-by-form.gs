function getFormResponses() {
  const form = FormApp.openById('YOUR_FORM_ID'); // Replace with your Google Form ID
  const formResponses = form.getResponses(); // Get all form responses
  
  formResponses.forEach(response => {
    const email = response.getRespondentEmail(); // Get responder's email (if the Form collects emails)
    const itemResponses = response.getItemResponses(); // Get all item responses for this submission
    
    let answer1 = ""; // Placeholder for the first target question
    let answer2 = ""; // Placeholder for the second target question
    
    // Loop through the responses to find the answers to specific questions
    itemResponses.forEach(itemResponse => {
      const question = itemResponse.getItem().getTitle(); // Get the question title
      const answer = itemResponse.getResponse(); // Get the answer to this question
      
      // Match the question titles to your target questions
      if (question === "Your first target question") {
        answer1 = answer;
      } else if (question === "Your second target question") {
        answer2 = answer;
      }
    });
    
    // Log or use the retrieved information
    Logger.log(`Email: ${email}`);
    Logger.log(`Answer 1: ${answer1}`);
    Logger.log(`Answer 2: ${answer2}`);
  });
}
