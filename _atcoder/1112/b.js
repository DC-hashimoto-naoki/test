var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    let N = parseInt(lines.shift(), 10);
    let strings = lines;
    // console.log(strings);

    let ans = true;

    // 条件１
    // すべての文字列に対して、1 文字目は H , D , C , S のどれかである。
    strings.forEach(str => {
        let condition1 = str.split('')[0].match(/^[H|D|C|S]/);
        // console.log('!condition1', !condition1);
        if (!condition1) { ans = false }
    })

    // 条件２
    // すべての文字列に対して、2 文字目は A , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , T , J , Q , K のどれかである。
    strings.forEach(str => {
        let condition2 = str.split('')[1].match(/^[A|2|3|4|5|6|7|8|9|T|J|Q|K]/);
        // console.log('!condition2', !condition2);
        if (!condition2) { ans = false }
    })

    // 条件３
    // すべての文字列は相異なる。
    let data_collection = new Set(strings);
    // console.log('data_collection', data_collection);
    if(data_collection.size !== strings.length){ ans = false}

    console.log(ans ? "Yes" : "No");
});