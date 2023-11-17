var n = 123321;
var ans = 0;
export function reverse(num){
    while(num != 0){
        ans*=10;
        ans+=num%10;
        num=parseInt(num/10);
    }
    return ans;
}

// console.log(reverse(n));