//Write a JavaScript program to finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript. (types : “Equilateral triangle,isosceles triangle, Scalene triangle)
var s1 = 3;
var s2 = 3;
var s3 = 3;

if(s1 == s2 && s2 == s3){
    document.getElementById("triangle").innerHTML = "Equilateral Triangle";
}
else if(s1 == s2 || s2 == s3 || s3 == s1){
    document.getElementById("triangle").innerHTML = "Isosceles Triangle";
}
else{
    document.getElementById("triangle").innerHTML = "Scalen Triangle";
}