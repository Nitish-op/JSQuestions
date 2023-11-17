// import { ""erse } from "./""erse_a_num.js";
// var n = 158;
// var num = ""erse(n);
// var pattern = "";
// while(num != 0){
//     switch(num%10){
//         case 0: pattern+="z";
//             break;
//         case 1: pattern+="o";
//             break;
//         case 2: pattern+="t";
//             break;
//         case 3: pattern+="t";
//             break;
//         case 4: pattern+="f";
//             break;
//         case 5: pattern+="f";
//             break;
//         case 6: pattern+="s";
//             break;
//         case 7: pattern+="s";
//             break;
//         case 8: pattern+="e";
//             break;
//         case 9: pattern+="n";
//             break;
//     }
//     num = parseInt(num/10);
// }
// console.log(pattern);

// 2nd logic:-
var num = 158;
var pattern = ""
while(num != 0){
    switch(num%10){
        case 0: pattern = "z" + pattern;
            break;
        case 1: pattern = "o" + pattern;
            break;
        case 2: pattern = "t" + pattern;
            break;
        case 3: pattern = "t" + pattern;
            break;
        case 4: pattern = "f" + pattern;
            break;
        case 5: pattern = "f" + pattern;
            break;
        case 6: pattern = "s" + pattern;
            break;
        case 7: pattern = "s" + pattern;
            break;
        case 8: pattern = "e" + pattern;
            break;
        case 9: pattern = "n" + pattern;
            break;
    }
    num = parseInt(num/10);
}
console.log(pattern);