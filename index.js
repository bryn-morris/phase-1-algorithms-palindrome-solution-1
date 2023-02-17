function reverseString(word){
  // TODO: implement string reversing functionality
  const reversedWord = wordArray.split("").reverse().join("");
  return reversedWord;
}

function isPalindrome(word) {
  
  // Reverse input string.
  const reversedWord = reverseString(word)
  // IF string reversed is same as input word, return true,
  return word === reversedWord
  // else
  // return false



  // Need to make isPalindrome function return either true or false.
  // When input string is the same forwards and backwards, isPalindrome should return true.
  // This means that if input string is the same after I reverse it, it should be true.

  // IE: "mom" in reverse is also "mom", so my solution should return true. 
  // IE: "hi" in reverse is "ih" so it should return false.
}

/* 
  Reverse input string.

  IF string reversed is same as input word, return true,
  else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
