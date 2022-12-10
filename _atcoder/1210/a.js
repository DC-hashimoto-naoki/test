var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const num = parseInt(lines, 10);

    let ans = []
    for(let i = num; i >= 0; i--){
        ans.push(i);
    }

    console.log(ans.join('\n'))
});