function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
const output = checkPalindrom("eye");
console.log(output);