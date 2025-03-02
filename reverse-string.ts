// Using a for loop
function reverseMyString(str: String) {
  let reversed: string = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseMyString("Hello"));

// Without using Loop
function reverseMyStr(str: string) {
  if (str === "") return "";
  return reverseMyStr(str.slice(1)) + str[0];
}
console.log(reverseMyStr("Shivendra"));

// Using Predefined Method
function reversedStr(str: string) {
  return str.split("").reverse().join("");
}

console.log(reversedStr("Soni"));
