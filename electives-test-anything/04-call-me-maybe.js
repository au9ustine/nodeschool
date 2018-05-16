const test = require('tape');
let repeatCallback = require(process.argv[2]);
test('repeatCallback', (t) => {
    t.plan(3);
    repeatCallback(3, () => {
        t.pass('Testcase repeatCallback :: The callback is planned to be called');
    });
});
