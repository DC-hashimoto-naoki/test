var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const S = lines[0];
    const T = lines[1];
    // console.log(S,typeof(S));
    const reg = new RegExp(T);
    const result = S.search(reg);
    console.log(result === -1 ? 'No' : 'Yes');
});