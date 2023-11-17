//
var num1 = 5;
var num2 = 4;
var num3 = 3;

if(num1<num2 && num1<num3){
    if(num2<num3){
        document.getElementById("3num").innerHTML=`Given Numbers after Sorted :- ${num1},${num2},${num3}`
    }
    else{
        document.getElementById("3num").innerHTML=`Given Numbers after Sorted :- ${num1},${num3},${num2}`
    }
}
else if(num2<num1 && num2<num3){
    if(num1<num3){
        document.getElementById("3num").innerHTML=`Given Numbers after Sorted :- ${num2},${num1},${num3}`
    }
    else{
        document.getElementById("3num").innerHTML=`Given Numbers after Sorted :- ${num2},${num3},${num1}`
    }
}
else{
    if(num1<num2){
        document.getElementById("3num").innerHTML=`Given Numbers after Sorted :- ${num3},${num1},${num2}`
    }
    else{
        document.getElementById("3num").innerHTML=`Given Numbers after Sorted :- ${num3},${num2},${num1}`
    }
}