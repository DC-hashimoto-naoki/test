const sum = require('./sum');

const tests = [
    [1, 2],
    [2, 4],
    [1, 3],
    [0, 3]
]


test(' add 1 + 2 to 3', () => {
    expect(sum(tests[0][0], tests[0][1])).toBe(3);
})