console.time('10000 mil iterações');

for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        const sum = i + j;
    }
}

console.timeEnd('10000 mil iterações');