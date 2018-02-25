const dup = require('duplexer2');
let spawn = require('child_process').spawn;

module.exports = (cmd, args) => {
    let subProcess = spawn(cmd, args);
    return dup(subProcess.stdin, subProcess.stdout);
};
