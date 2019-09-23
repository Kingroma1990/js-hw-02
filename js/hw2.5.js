"use strict";
function checkForSpam(string) {
  const array = string.toLowerCase().split(" ");

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (word == "spam" || word == "sale") {
      return true;
    }
  }

  return false;
}

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('SPAM How to earn fast money?')); 