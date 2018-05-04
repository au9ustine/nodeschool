module.exports = (inputWords) => inputWords.reduce((acc, x) => {
    if (x in acc) {
        acc[x] += 1;
    } else {
        acc[x] = 1;
    }
    return acc;
}, {});
