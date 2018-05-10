console.log(
    (new Buffer(
        process.argv.slice(2).map((charVal) => 
            Number(charVal)
        ))
    ).toString('hex')
);
