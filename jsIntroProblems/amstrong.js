import {No_of_digitis} from "./No_of_digits.js";

var num = 1634;
var dup = num;
var sum = 0;
var power = No_of_digitis(dup);

while(dup != 0){
    let rem = dup%10
    sum +=rem ** power;
    dup = parseInt(dup/10);
}

console.log(sum==num);