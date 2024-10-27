const string = 'hello';

function anagram(str, str2) {
    const str1 = str.split('').sort().join('');
    const str22 = str2.split('').sort().join('');
    if(str1 === str22) {
        return true;
    }
    return false;
}

const x = anagram('hello', 'olelh');
console.log(x)