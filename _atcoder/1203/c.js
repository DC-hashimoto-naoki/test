var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    const S = lines[0];
    const T = lines[1];
    // console.log(S, T);

    const S_strings = S.split('');
    const T_strings = T.split('');
    // console.log(S_strings, T_strings);

    let count = 0;
    while(count < Math.min(S_strings.length, T_strings.length)){
        if(S_strings[count] !== T_strings[count]){
            // console.log(count);
            break;
        }
        count++;
    }

    console.log(count + 1);
});