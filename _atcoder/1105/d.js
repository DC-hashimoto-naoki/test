var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let N = parseInt(lines.shift())
    let numbers = lines[0].split(' ').map(el => parseInt(el));

    let count = 0

    numbers = numbers.map(num => {
        if(num === 1){return num};
        while(num % 2 == 0){
            num = num / 2
            count++;
        }
        return num;
    })

    numbers = numbers.map(num => {
        if(num === 1){return num};
        while(num % 3 == 0){
            num = num / 3
            count++;
        }
        return num;
    })

    numbers.forEach(num => {
        if(num != 1){count = -1}
    })

    console.log(count);
});