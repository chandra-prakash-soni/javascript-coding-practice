// Check if two words are anagrams

function isAnagram(str1, str2) {
    const format = s => s.toLowerCase().split("").sort().join("");
    return format(str1) === format(str2);
}

//  Sample Inputs
const word1 = "triangle";
const word2 = "integral";

console.log(`Is "${word1}" an anagram of "${word2}"? ➤`, isAnagram(word1, word2)); // true

const word3 = "hello";
const word4 = "world";

console.log(`Is "${word3}" an anagram of "${word4}"? ➤`, isAnagram(word3, word4)); // false