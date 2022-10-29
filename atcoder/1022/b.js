var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let H = parseInt(lines[0].split(' ')[0]);
    let W = parseInt(lines[0].split(' ')[1]);

    lines.shift()
    let newLine = lines.map(line => line.split(''));

    newLine.forEach(line => {
        for (let i = 0, length = line.length; i < length; i++) {
            if (line[i] == '#') {
                line[i] = 1;
            } else {
                line[i] = 0;
            }
        }
    })

    let answers = Array.from(newLine[0], e => e = 0);

    for(let i = 0; i < W; i++){
        for(let j = 0; j < H; j++){
            answers[i] += newLine[j][i];
        }
    }
    console.log(answers.join(' '));

});