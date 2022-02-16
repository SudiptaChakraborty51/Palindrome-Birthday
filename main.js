function reverseStr(str){
    // var listOfChars = str.split('');
    // var reverseListofChars = listOfChars.reverse();
    // var reversedStr = reverseListofChars.join('');
    // return reversedStr;
    return str.split('').reverse().join('');
}
console.log(reverseStr('sudipta'));

function isPalindrome(str){
    var reversedStr = reverseStr(str);
    return str === reversedStr;
}
console.log(isPalindrome('madam'));

