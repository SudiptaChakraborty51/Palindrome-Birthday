function reverseStr(str){
    var listOfChars = str.split('');
    var reverseListofChars = listOfChars.reverse();
    var reversedStr = reverseListofChars.join('');
    return reversedStr;
}
console.log(reverseStr('sudipta'));