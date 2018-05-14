let num = Number(process.argv[2]);

let step1 = new Uint32Array(1);
step1[0] = num;

let step2 = new Uint16Array(step1.buffer);

console.log(JSON.stringify(step2));
