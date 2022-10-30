
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {

    // オーバーフローに注意！！
    //(A∗B)%M=((A%M)∗(B%M))%M)
    let [a, b, c, d, e, f] = lines[0].split(' ').map(num => parseInt(num));
    let mod = 998244353;
    let x = ( (a%mod) * (b%mod))%mod;
    let y = (d * e * f)) % 998244353;
    let answer = ((a * b * c) - (d * e * f)) % 998244353
    console.log(answer);    
});