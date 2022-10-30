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
        var intLine = line.split('')
        var parseLine = intLine.map(el => {
            if (el == '#') { el = 1 }
            else { el = 0 }
            return el;
        })
        return parseLine;
    })
    console.log(newLines);

    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;

    let isFinded = false;
    let isSecond = false;
    for (let i = 0; i < newLines.length; i++) {
        for (let j = 0; j < newLines[i].length; j++) {
            if (newLines[i][j] == 1) {

                B = i + 1;
                D = j + 1;
                isFinded = true;

                if (isFinded && !isSecond) {
                    A = B;
                    C = D;
                    isSecond = true;
                }
            }
        }
    }

    if(A == 0 ){
        A = B
    }
    if (C == 0){
        C = D
    }

    console.log(A + ' ' + B + ' ' + C + ' ' + D);
});