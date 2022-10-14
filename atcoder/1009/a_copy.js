var lines =
    [
        '3 2',
        '1??',
        '4 2',
        '?1?0',
        '6 3',
        '011?1?',
        '10 5',
        '00?1???10?'
    ];

let T = parseInt(lines.shift());

for (let i = 0; i < T; i++) {
    let N = lines[i * 2].split(' ')[0]; //個数
    let K = lines[i * 2].split(' ')[1]; //連続する
    let S = lines[i * 2 + 1];
    // splitStrings(S);
    findFirstAndLastIndex(S, K);
}
console.log(lines);

function splitStrings(string) {
    let splitedStrings = string.split('');
    let formatedStrings = splitedStrings.map(s => {
        if (s == '?') { s = '1' }
        return s;
    })

    let count = 0;
    console.log(formatedStrings);
    formatedStrings.forEach(s => {
        if (s == '1') { count++ }
    })
    console.log(`${formatedStrings} : 1 is ${count} times`);
}

function findFirstAndLastIndex(string, K) {
    let splitedStrings = string.split('');
    let index = splitedStrings.indexOf('1'); //初めて1が出現
    let lastIndex = splitedStrings.lastIndexOf('1');
    // console.log(`${index} / last ${lastIndex}`);
    paddingOne(splitedStrings, index, lastIndex, K)
}

function paddingOne(splitedStrings, index, lastIndex, K) {
    let filledStrings = splitedStrings.fill('1', index, lastIndex);
    let count = 0;
    filledStrings.forEach(num => {
        if (num == '1') { count++ }
    })

    if (count == K) {
        console.log("Yes");
    } else {
        serchQuestionMark(filledStrings, index, lastIndex);
    }
}

function serchQuestionMark(filledStrings, index, lastIndex) {
    console.log(filledStrings);
    let before = filledStrings.slice(0, index);
    let after = filledStrings.slice(lastIndex + 1);
    let reverse_before = before.reverse();
    console.log(countQuestion(reverse_before))
    console.log(countQuestion(after))
}

function countQuestion(array) {
    if (!array) { return 0 }
    let count = 0;
    let isSuccessive = true;
    array.forEach(el => {
        if (isSuccessive &&
            el == '?') {
            count++
        } else {
            isSuccessive = false;
        }
    })
    console.log(count + " is count:" + array);
}
