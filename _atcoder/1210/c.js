var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const [N, T] = lines.shift().split(' ').map(el => parseInt(el, 10));
    const A = lines[0].split(' ').map(el => parseInt(el));
    // console.log(N, T, A);

    let index = 0;
    let current = 1;
    let total = T;
    let time = 0;
    while(total > 0){
        total -= A[index % N];
        index++;
        if(total > 0) {
            current++;
            time = total
        }
        // console.log(total);
    }

    let songNum = current % N;
    if(current % N === 0) songNum = N;
    console.log( songNum + ' ' + time)
});