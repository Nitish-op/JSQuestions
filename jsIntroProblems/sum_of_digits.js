var digits = -345;
var sum = 0;

while(digits != 0){
    sum+=(digits%10);
    digits=parseInt(digits/10);
}
console.log(sum);