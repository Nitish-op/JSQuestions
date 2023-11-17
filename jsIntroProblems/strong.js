var num = 145;
var dup = num;
var sum = 0;

function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact*=i;
    }
    // console.log(`${num} + ${fact}. `);
    return fact;
}

while(dup != 0){
    sum+= factorial(dup%10);
    dup=parseInt(dup/10);
}

console.log(sum==num);