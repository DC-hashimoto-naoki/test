var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let [A, B] = lines[0].split(' ').map(el=> parseInt(el, 10));
    // console.log(A, B);

    let isMin = false;
    let count = 0;
    let ans;
    while(!isMin){
        let target_time = 1 * count + A / Math.sqrt(count+1);
        let compare_time = 1 * (count +1) + A / Math.sqrt(count+1 +1);
        
        if(target_time < compare_time){
            ans = target_time;
            isMin = true;
        }
        count++;
        // console.log(count, 'times');
    }

    console.log(ans);
});