// Using Loop
function isPalindrome(str: string) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

console.log(isPalindrome("madam"));

// using Function

function isPalin(str: string) {
  return str === str.split("").reverse().join("");
}
console.log(isPalin("racecar"));
