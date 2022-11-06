var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let ans = lines[0].lastIndexOf('a');
    if(ans != -1){
        ans = ans + 1;
    }
    console.log(ans);
});