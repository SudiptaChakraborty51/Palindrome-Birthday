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
    day: 2,
    month: 2,
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

function checkPalindromeForAllDateFormats(date){
    var listOfAllDateFormats = getAllDateFormats(date);
    var flag = false;

    for(var i = 0; i < listOfAllDateFormats.length; i++){
        if(isPalindrome(listOfAllDateFormats[i])){
            flag = true;
            break;
        }
    }
    return flag;
}
console.log(checkPalindromeForAllDateFormats(date));

function leapYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 4 == 0)){
        return true;
    } else{
        return false;
    }
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if(month === 2){
        if(leapYear(year)){
            if(day > 29){
                day = 1;
                month++;
            } 
        } else {
            if(day > 28){
                day = 1;
                month++;
            } 
        }
    } else {
       if(day > daysInMonth[month - 1]){
           day = 1;
           month++;
       } 
    }
    if(month > 12){
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}
console.log(convertDateToString(getNextDate(date)));

