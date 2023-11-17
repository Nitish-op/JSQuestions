var num = 12332;
var ans = 0;
var dup = num;
while(dup != 0){
    ans*=10;
    ans+=dup%10;
    dup=parseInt(dup/10);
}

console.log(ans==num);