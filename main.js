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

function convertDateToString(date){
    var dateStr = {
        day: '',
        month: '',
        year: ''
    }
    if(date.day < 10){
        dateStr.day = '0' + date.day; // convert dateStr.day to string internally
    } else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = '0' + date.month;
    } else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}
var date={
    day: 14,
    month: 9,
    year: 2020
}
console.log(convertDateToString(date));
