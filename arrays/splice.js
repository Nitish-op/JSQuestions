var arr = [3,5,89,64,45,6432,0];
console.log(`before applying array methods: ${arr}`);
arr.pop(); // doesnt accept any parameters
arr.push("pushed");
arr.shift();// doesnt accept any parameters
arr.unshift("unshift");
arr.splice(3,1,9999);
console.log(arr);