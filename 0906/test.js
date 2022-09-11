var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    console.log(lines);
    let newLines = lines.map(line => {
        var intLine = line.split(' ').map(el => parseInt(el))
        return intLine;
    })
    console.log(newLines);
});