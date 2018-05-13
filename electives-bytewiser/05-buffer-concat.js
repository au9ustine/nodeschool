// https://github.com/maxogden/bytewiser/blob/master/exercises/buffer_concat/solution/solution.js

let buffers = [];

process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
        buffers.push(chunk);
    }
});

process.stdin.on('end', () => {
    console.log(Buffer.concat(buffers));
});
