var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const N = parseInt(lines.shift(), 10);
    const S = lines[0].split(' ').map(el => parseInt(el, 10));
    // console.log(N, S);
    const answers = Array(N).fill(0);

    let sum = 0;
    for(let i = 0; i < N; i++){
        if(i === 0){
            answers[i] = S[0];
            continue;
        };
        sum += answers[i - 1]
        answers[i] = S[i] - sum;
    }

    console.log(answers.join(' '));
});