var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let [N, M, K] = lines.shift().split(' ').map(el => parseInt(el, 10));
    let A = lines[0].split(' ').map(el => parseInt(el, 10));

    // console.log(N, M, K, A);

    let ans = []
    for(let i = 0; i < N - M +1; i++){
        let sliceArray = A.slice(i, i + M);
        // console.log(sliceArray);
        // console.log(sortArray(sliceArray));
        let sortNums = sortArray(sliceArray);
        // console.log(sumArray(sortNums));
        ans.push(sumArray(sortNums))
    }

    function sortArray(array){
        let sortNum = array.sort((a, b) => {
            return a < b ? -1 : 1
        })
        return sortNum;
    }

    function sumArray(array){
        let sum = 0;
        for(let i = 0; i < K; i++){
            sum += array[i]
        }
        return sum;
    }

    console.log(ans.join(' '))
});