var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let [N, K] = lines.shift().split(' ').map(val => parseInt(val));
    let array = lines[0].split(' ').map(val => parseInt(val));
    // console.log(N, K);
    // console.log(array);

    for(let i = 0; i < K; i++){
        array.shift();
        array.push(0);
    }

    // console.log(array);

    let ans = array.join(' ');
    console.log(ans);
});