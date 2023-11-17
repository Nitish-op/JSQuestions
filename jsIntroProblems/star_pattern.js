var n = 4;
for(let i = 1; i <= n; i++){
    let concat = "";
    for(let j = 1; j <= n - i + 1; j++){
        concat += "*" + " ";
    }
    console.log(concat);
}