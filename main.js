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

function getAllDateFormats(date){
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}
console.log(getAllDateFormats(date));