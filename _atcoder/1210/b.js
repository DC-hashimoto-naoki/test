var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const S = lines;
    const pattern = /^[A-Z][1-9][0-9]{5}[A-Z]$/
    const ans = pattern.test(S);
    console.log(ans? 'Yes' : 'No')
});