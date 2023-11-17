var arr = [55, 7, 9, 0, 0, 56, 7, 99];
// var count = 0;
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             count++;
//         }
//     }
// }
// console.log(`array has ${count} duplicates`);

console.log(`array has ${arr.length - new Set(arr).size} duplicates`);