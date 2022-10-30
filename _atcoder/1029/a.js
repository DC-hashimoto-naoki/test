var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {

    let nums = lines[1].split(' ').map(num => parseInt(num));
    let max = Math.max(...nums);
    let answer = nums.findIndex(num => num == max);

    console.log(answer + 1);
});