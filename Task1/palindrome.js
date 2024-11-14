function isPalindrome(str) {
     return  str.split('').reverse().join('').toLowerCase().replaceAll(" ",'') === str.toLowerCase().replaceAll(" ",'');
    }

console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Привет")); // false