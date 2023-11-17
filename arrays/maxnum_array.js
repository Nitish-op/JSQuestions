
var max = arr[0];
// for(let i of arr){
//     if(max < i)
//         max = i;
// }
arr.forEach((num) => { if(num > max) {max = num;} })
console.log(max);