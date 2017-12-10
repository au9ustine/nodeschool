let partial_sum = 0;
for (let i = 2; i < process.argv.length; i++) {
    partial_sum += Number(process.argv[i]);
}
console.log(partial_sum);
