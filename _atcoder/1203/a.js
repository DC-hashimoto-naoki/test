var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const [H, W] = lines.shift().split(' ').map(el => parseInt(el, 10))
    // console.log(H, W);
    // console.log(lines);
    let count = 0;
    lines.forEach(line => {
        let row = line.split('');
        row.forEach(el => {
            if(el === '#'){count++}
        })
    })

    console.log(count);
});