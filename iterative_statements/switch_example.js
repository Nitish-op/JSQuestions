//WAJSP to print weekday by given day num
var day = 5;

switch(day){
    case 1: document.getElementById("day").innerHTML="Monday";
            break;
    case 2: document.getElementById("day").innerHTML="Tuesday";
            break;
    case 3: document.getElementById("day").innerHTML="Wednesday";
            break;
    case 4: document.getElementById("day").innerHTML="Thursday";
            break;
    case 5: document.getElementById("day").innerHTML="Friday";
            break;
    case 6: document.getElementById("day").innerHTML="Saturday";
            break;
    case 7: document.getElementById("day").innerHTML="Sunday";
            break;
    default: document.getElementById("day").innerHTML="wrong entry";
            break;
}