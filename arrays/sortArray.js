var arr = [3,5,89,64,45,6432,0]
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);