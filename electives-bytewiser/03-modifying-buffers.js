process.stdin.on('data', (buff) => {
    console.log(buff.map((x) => (x == 46) ? 33 : x));
});
