var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let binary = parseInt(lines[0], 10).toString(2);
    console.log(binary.padStart(10, '0'));
});