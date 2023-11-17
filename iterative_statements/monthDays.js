//Write a JavaScript program to read year and month from the user then find number of days in a month (for checking leap year or not for feb month)
var year = 2000;
var month = 2;

function checkDays(month){
    switch(month){
        case 1:  return 31;
        case 2:  return 28;
        case 3:  return 31;
        case 4:  return 30;
        case 5:  return 31;
        case 6:  return 30;
        case 7:  return 31;
        case 8:  return 31;
        case 9:  return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }
    return 0;
}

if(year%4==0){
    if(year%100==0 && year%400!=0){
        console.log(`Given month has ${checkDays(month)}`);
    }
    else{
        if(month != 2){
            console.log(`Given month has ${checkDays(month)}`);
        }
        console.log(`Given month has ${checkDays(month) + 1}`);
    }
}
else{
    console.log(`Given month has ${checkDays(month)}`);
}