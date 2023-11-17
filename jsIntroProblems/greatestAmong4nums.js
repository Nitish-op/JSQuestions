var a = 2
var b = 7
var c = 5
var d = 11

const ans = (a > b && a > c && a > d? a : b > c && b > d? b : c > d? c: d);

document.getElementById("greatest").innerHTML = `Given numbers are ${a} ${b} ${c} ${d}. Greatest number is ${ans}`;