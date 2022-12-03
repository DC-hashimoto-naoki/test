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
    const strings = S.split('');
    let num = 0;
    strings.forEach(str => {
        if(str == "v"){
            num = num +1;
        }
        if(str == "w"){
            num = num +2;
        }
    })
    console.log(num);
});