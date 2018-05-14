process.stdin.once('data', (buf) => {
    let arr = new Uint8Array(buf);
    console.log(JSON.stringify(arr));
});
