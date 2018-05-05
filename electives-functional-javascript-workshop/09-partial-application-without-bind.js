module.exports = (namespace) => (...args) =>
    console.log.apply(console, [namespace].concat(args));
