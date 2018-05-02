module.exports = (operation, num) => Array(num).fill().reduce((acc, x) => operation());
