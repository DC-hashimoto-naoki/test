var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const [height, width] = lines.shift().split(' ').map(el=>parseInt(el, 10));
    // console.log(height, width);
    const S = lines.slice(0, height);
    const H = lines.slice(height);
    // console.log(S, 'S');
    // console.log(H, 'H');

    let ans = 'Yes';
    for(let i = 0; i < height; i++){
        let s_count = 0;
        let h_count = 0;
        S[i].split('').forEach(el => {
            if(el === '#'){s_count++}
            return;
        })
        H[i].split('').forEach(el => {
            if(el === '#'){h_count++}
            return;
        })
        // console.log(i, s_count, h_count);
        if(s_count !== h_count){
            ans = 'No';
            break;
        }
    }

    console.log(ans);
});