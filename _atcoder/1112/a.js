var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let [N, X] = lines.shift().split(' ').map(val => parseInt(val, 10));
    let pattern = lines[0].split(' ').map(val => parseInt(val, 10));
    let ans;
    pattern.forEach((val, index) => {
        if(val === X) ans = index +1;
    })
    console.log(ans);
});