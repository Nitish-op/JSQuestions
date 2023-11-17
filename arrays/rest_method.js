var arr = [3,5,89,64,45,6432,0];
var [a,b,...c] = arr;
var sum = 0;

console.log(c);

function add(...x){
    for(let i of x){
        sum+=i;
    }
    return sum;
}

console.log(`sum of elements in arr: ${add(arr)}`);