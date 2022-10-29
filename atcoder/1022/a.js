var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {

    lines = lines[0].split(' ').map(num => parseInt(num));

    let A = lines[0];
    let B = lines[1];

    console.log( (B/A).toFixed(3) );
});