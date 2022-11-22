var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let [H, M] = lines[0].split(' ').map(val => parseInt(val))
    // console.log(H, M);

    function init(H, M) {
        let A = 0, B = H, C = 0, D = M;

        if (H >= 10) {
            A = Math.floor(H / 10);
            B = H % 10
        }

        if (M >= 10) {
            C = Math.floor(M / 10)
            D = M % 10;
        }

        return [A, B, C, D];
    }

    let [A, B, C, D] = init(H, M);

    if (
        0 <= A * 10 + C && A * 10 + C <= 23 &&
        0 <= B * 10 + D && B * 10 + D <= 59
    ) {
        console.log(lines.toString());
        return;
    }

    let isFound = false;
    let times = 0;
    let ans;
    while (!isFound) {
        M++;
        if (M === 60) {
            M = 0;
            H++;
        }
        if (H === 24) {
            H = 0;
        }

        times++;
        // console.log(H, M, times + 'times');

        let [A, B, C, D] = init(H, M);
        if (
            0 <= A * 10 + C && A * 10 + C <= 23 &&
            0 <= B * 10 + D && B * 10 + D <= 59
        ) {
            isFound = true;
            ans = H + " " + M;
        }
    }
    // console.log(A, B, C, D);
    console.log(ans);
});