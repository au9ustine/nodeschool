module.exports = (arr, fn) => arr.reduce((acc, x, i, arr) => {
    acc.push(fn(x, i, arr));
    return acc;
}, []);
