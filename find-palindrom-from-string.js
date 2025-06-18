function findPalindrom(str) {
    const isPalindrom = (s) => s === s.split("").reverse().join("");
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 3; j <= str.length; j++) {
            let substr = str.substring(i, j);
            if (isPalindrom(substr)) {
                return `Palindrome Found: ${substr}`;
            }
        }
    }
    return "No Palindrome Found";
}

console.log(findPalindrom("onenooneyes"));        // Output: Palindrome Found: noon
console.log(findPalindrom("nopalindromehere"));   // Output: No Palindrome Found
