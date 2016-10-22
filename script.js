
"use strict";

/**

*/

function sendEmail(recipient, subject, body, parseIntoHTML) {
  window.open('mailto:test@example.com?subject=subject&body=as+d%0D%0Afas<br>' +
    'fasdaf\nasdf</html>');
}

google.script.run
  .withSuccessHandler(sendEmail("Hi!"))
  .log("Logged");
  
