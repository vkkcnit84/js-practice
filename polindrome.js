// chaeck for polindrome without function
let str = 'vinay';
let result = isPolindrome(str);
console.log(result);

function isPolindrome(string1) {
    const reverseString = string1.split('').reverse().join('');
    if(string1 === reverseString) {
        return true;
    }
    return false;
    console.log(reverseString);
}