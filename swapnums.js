var x = 11;
var y = 9;

console.log("beforeswap : ");
console.log("x = "+x)
console.log("y = "+y)

x += y
y = x - y
x = x - y

console.log("afterswap : ");
console.log("x = "+x)
console.log("y = "+y)