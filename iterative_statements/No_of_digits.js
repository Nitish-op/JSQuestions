var count = 0;
var num = 0;

export function No_of_digitis(num){
    if(num == 0){
        return 1;
    }
    while(num!=0){
        num=parseInt(num/10);
        count++;
    }
    return count;
}
count = 0;

// console.log("Number of Digits: "+No_of_digitis(num));