var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let [N, M] = lines.shift().split(' ').map(el => parseInt(el));
    let A = [], B = [];
    lines.forEach(line => {
        let a = line.split(' ')[0];
        let b = line.split(' ')[1];
        A.push(parseInt(a));
        B.push(parseInt(b));
    })
    /***
     * A [ 3, 1, 5, 2, 1, 1 ]
     * B [ 6, 3, 6, 5, 2, 6 ]
     */

    /**
     * d = 道路で直接結ばれている都市の数
     * a = 都市の番号
     */

    function sortCities(city, A, B){
        let sum = 0;
        let connects = [];
        A.forEach((a, index) => {
            if (a === city) { sum += 1; connects.push(B[index]) }
        })
        B.forEach((b, index) => {
            if (b === city) { sum += 1; connects.push(A[index]) }
        })
        
        let cities = connects.sort( (a,b)=> a -b ).join(' ');
        return (sum + " " + cities);
    }

    for(let i = 1; i <= N; i++){
        console.log(sortCities(i, A, B));
    }

});