module.exports = (arr, fn, initial) => {
    function step(i, acc) {
        if (i >= arr.length) return acc;
        return step(i+1, fn(acc, arr[i], i, arr));
    }
    return step(0, initial);
};
