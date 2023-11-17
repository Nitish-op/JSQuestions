//WRAJSP to check if given year is a leap year or not
var year = 1900;

if(year%4==0){
    if(year%100==0 && year%400!=0){
        document.getElementById("year").innerHTML = `${year} is not a leap year`;
    }
    else{
        document.getElementById("year").innerHTML = `${year} is a leap year`;
    }
}
else{
    document.getElementById("year").innerHTML = `${year} is not a leap year`;
}