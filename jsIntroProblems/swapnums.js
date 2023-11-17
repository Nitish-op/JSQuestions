var x = 11;
var y = 9;

document.getElementById("before").innerHTML = `values before swap x=${x} y=${y}`;

x += y
y = x - y
x = x - y

document.getElementById("after").innerHTML = `values after swap x=${x} y=${y}`;