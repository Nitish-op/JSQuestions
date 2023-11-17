var n = 4;
var count = 0;
for(let i = 1; i <= n; i++){
    let concat = "";
    for(let j = 1; j <= i; j++){
        concat += `${++count} `;
    }
    console.log(concat);
}