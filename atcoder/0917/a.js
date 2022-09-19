var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let newLines = lines.map(line => {
        var intLine = line.split(' ').map(el => parseInt(el))
        return intLine;
    })
    let a = newLines[0][0];
    let b = newLines[0][1];
    let c = newLines[0][2];
    let d = newLines[0][3];
    console.log( (a + b) * (c - d) + "\n" + "Takahashi" );
});