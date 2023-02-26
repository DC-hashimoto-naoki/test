process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function (chunk) {
    input_string += chunk;
});

process.stdin.on('end', function () {
    const lines = input_string;
    console.log(lines);
});