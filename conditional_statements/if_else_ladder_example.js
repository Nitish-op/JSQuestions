//WAJSP to print if a person is eligible to vote if their gender is male and age is 21 and above or gender is female and age is 18 and above
var gender = "male";
var age = 21;

if(gender == "male" && age < 21){
    document.getElementById("vote").innerHTML="This person is not eligible to vote";
}
else if(gender == "female" && age <18){
    document.getElementById("vote").innerHTML="This person is not eligible to vote";
}
else{
    document.getElementById("vote").innerHTML="This person is eligible to vote";
}