var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let N = parseInt(lines[0]);
    let amebas = lines[1].split(' ').map(num => parseInt(num));
    let answers = amebas.map(ameba => Math.floor(ameba / 2) + 1 );

    // answers.forEach((num, index) => answers.splice(index * 2 + 1, 0, num ) )
    for(let i = 0, length = answers.length ; i < length; i++){
        answers.splice(i * 2 + 1, 0 , answers[i * 2])
    }
    console.log(answers.unshift(0));
});