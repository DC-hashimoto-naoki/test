var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const K = parseInt(lines[0], 10)

    function pf(n) {
        var result = [];

        if (n === 1) {
            return [1];
        }

        var init = 2;

        while (n !== 1) {
            var i = init;
            while (i < K) {
                if (n % i == 0) {
                    result.push(i)
                    n /= i;
                    break;
                }
                i++;
            }
            init = i;
        }
        return result;
    }

    const ans = Math.max(...pf(K))
    console.log(ans);
});