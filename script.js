
"use strict";

/**

*/

function sendEmail(recipient, subject, body, parseIntoHTML) {
  if (parseIntoHTML) {
    // http://www.w3schools.com/jsref/jsref_replace.asp
    // Doesn't modify the string in-place.
  } else {
    window.open("mailto:" + recipient + "?subject=" + subject + "&body=" + body);
  }
}

google.script.run
  .withSuccessHandler(sendEmail("Hi!"))
  .log("Logged");
  
