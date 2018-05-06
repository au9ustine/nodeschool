module.exports = (target, method) => {
    let f = target[method];
    let result = {
        count: 0
    };
    target[method] = (...args) => {
        result.count++;
        return f(args);
    };
    return result;
};
